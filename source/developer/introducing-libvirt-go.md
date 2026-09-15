---
title: "Introducing libvirt-go: A Cgo-Free Libvirt API for Go"
seo_title: "Introducing libvirt-go: A Cgo-Free Libvirt API"
description: "Explore libvirt-go, an experimental purego binding created from ZVM engineering work for cgo-free builds and version-aware libvirt access."
type: Docs
author: Ns2Kracy
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

# Introducing libvirt-go: A Cgo-Free Libvirt API for Go

![A Zima system running ZVM beside a terminal showing a cgo-disabled Go build.](/images/guides/libvirt-go-launch-hero.webp)

Today, ZimaSpace Engineering is sharing [libvirt-go](https://github.com/Ns2Kracy/libvirt-go), an experimental developer preview of a cgo-free Go binding for libvirt built with purego. The project grew from our work on ZVM and the practical needs of home-server virtualization, where users create and manage machines for workloads such as Home Assistant OS, Windows, and pfSense. We are publishing the library now so Go and libvirt developers can inspect the approach and help test its boundaries. libvirt-go does not ship in any released ZimaOS build. It remains an independent experiment that we intend to use incrementally to improve the existing ZVM backend.

## The Problem I Faced While Building ZVM

While building ZVM, I needed Go code to define, start, stop, inspect, and delete virtual machines through libvirt. Those operations support the ordinary lifecycle behind home-server VMs, including attaching storage and configuring network interfaces. I wanted the backend to cover more of that lifecycle without making release builds harder to produce.

The primary problem was cgo cross-compilation. I wanted release cross-builds to run with `CGO_ENABLED=0`, which excludes cgo code from the build. A cgo-based binding requires more than a Go compiler when a developer builds ZVM for another target. The build machine also needs libvirt development headers, pkg-config metadata that points to them, and a working C compiler for the target platform. Each dependency adds host and target assumptions to a release pipeline that should produce consistent Go binaries.

I also had to account for the libvirt version installed on each target system. One machine may expose a symbol or API that an older installation lacks. Compile-time checks against one set of headers cannot describe every runtime we need to handle. The Go API therefore needs deliberate coverage, runtime version awareness, and clear behavior when a function is unavailable. Resource ownership matters too: VM, connection, and callback handles need explicit release rules so long-running lifecycle operations do not leak native resources.

That experience led me to build libvirt-go with purego, loading libvirt dynamically and calling it without cgo. I started it as an independent experiment inspired by ZVM, and I intend to adopt useful pieces incrementally in the existing backend after testing. No released ZimaOS build ships this integration today.

## Why Build Another Go Binding?

Existing Go bindings have supported libvirt users and Go virtualization projects for years. libvirt-go takes a different route around a specific set of constraints I met while working on ZVM. Application builds need to succeed with `CGO_ENABLED=0`, so the build environment does not need libvirt headers, `pkg-config`, or a C compiler for the target platform. That makes cross-compilation easier to keep inside a Go-focused release pipeline.

The resulting binary still accesses the native libvirt shared library in process. There is no companion service or separate protocol between the Go application and libvirt. The project generates a broad low-level API from upstream metadata, then adds handwritten, ownership-aware wrappers for the resource handles and values that need safer Go lifecycles.

Runtime symbol discovery is another core goal. An installed libvirt may be older than the metadata used for generation, while a distribution may backport selected newer functions. libvirt-go checks the symbols that are actually present, allowing callers to handle unavailable operations explicitly instead of assuming that one build-time version describes every target. This combination fits ZVM's cross-build and deployment constraints. It may also suit other Go projects that need cgo-free builds, in-process libvirt access, and deliberate compatibility across varied Linux installations.

## How libvirt-go Works

libvirt-go has a generated low-level layer and a handwritten high-level layer. At runtime, `purego` opens the native libvirt shared library and binds C symbols to Go-callable functions. This keeps cgo out of the application build, while libvirt continues to run in the same process. A compatible libvirt shared library is therefore still required on the machine that runs the program.

![libvirt-go architecture from a Go application through high-level wrappers, generated RawAPI bindings, and purego to native libvirt libraries.](/images/guides/libvirt-go-architecture.webp)

The generator reads the official API XML metadata vendored in this repository from libvirt 12.6.0. Across the main, admin, QEMU, and LXC APIs, that metadata produces exactly 568 functions and 1,093 enums. The generated surface exposes public `RawAPI` methods with types suitable for `purego`. Its catalog also records source-library routing, so each function is looked up in the main libvirt library or its admin, QEMU, or LXC extension library. Generated symbol registration data connects names to call targets, and introduction versions record when upstream libvirt added each function. Missing extension libraries affect their own symbols without preventing the main library from loading.

Generation supplies breadth, while the handwritten wrappers supply behavioral rules that XML declarations alone cannot express. These wrappers track ownership of connections, domains, streams, and other native handles. They copy allocated return values into Go data and release native allocations where required. They also preserve Go values for the lifetimes needed by native calls, manage callback registration and cleanup, and turn libvirt's thread-local error records into structured Go errors. These details matter because a successful call can transfer a reference, return memory that needs release, or register work that remains active after the call ends.

Compatibility is visible to callers instead of being hidden in the loader. `HasSymbol` reports whether the loaded libraries export a generated function. `SymbolVersion` reports the upstream version that introduced a known symbol. When a requested function is absent, generated raw calls and high-level calls return a `SymbolUnavailableError`. That error wraps `ErrSymbolUnavailable`, so normal Go error inspection can recognize the shared condition while retaining the symbol name and introduction version.

This symbol-by-symbol model supports older libvirt installations and distribution backports. It relies on what the runtime library exports rather than treating its numeric version as a complete capability list. `RawAPI` remains available for specialized operations that lack a high-level wrapper, but raw callers retain responsibility for C failure sentinels, native ownership, and thread-local error handling. The high-level layer is the safer starting point for application code.

## Try It

The repository example opens libvirt's `test:///default` URI in read-only mode and lists its domains:

<!-- markdownlint-disable MD010 -->
```go
package main

import (
	"fmt"
	"log"

	libvirt "github.com/Ns2Kracy/libvirt-go"
)

func main() {
	conn, err := libvirt.NewConnectReadOnly("test:///default")
	if err != nil {
		log.Fatal(err)
	}
	defer func() {
		if _, err := conn.Close(); err != nil {
			log.Printf("close connection: %v", err)
		}
	}()

	domains, err := conn.ListAllDomains(0)
	if err != nil {
		log.Fatal(err)
	}
	for _, domain := range domains {
		name, nameErr := domain.GetName()
		if err := domain.Free(); err != nil {
			log.Printf("free domain: %v", err)
		}
		if nameErr != nil {
			log.Fatal(nameErr)
		}
		fmt.Println(name)
	}
}
```
<!-- markdownlint-enable MD010 -->

From the repository root, run the example with cgo disabled on a supported
Linux machine with libvirt installed:

```sh
CGO_ENABLED=0 go run ./examples/list-domains
```

`test:///default` is libvirt's synthetic test driver. It supplies sample resources and does not alter real guests. The build does not need libvirt development files. The program still requires a compatible libvirt shared library at runtime.

## Current Limits and Validation

libvirt-go remains experimental and is not recommended for production workloads. Linux amd64 is the only runtime-tested and supported platform. Linux arm64 is compile-checked only. The macOS, FreeBSD, and NetBSD loader paths have not been tested by this project and remain unsupported.

A compatible native libvirt shared library is required at runtime. Removing cgo from the application build removes the build-time C toolchain dependency; it does not replace libvirt itself. Applications must close connections and explicitly free returned resources according to each API's ownership rules. `RawAPI` callers must also recognize native failure sentinels and retrieve thread-local libvirt errors on the same OS thread. No production libvirt/QEMU/KVM environment has been validated.

Testing evidence is kept separate from those support boundaries. Automated CI runs cgo-disabled unit tests for the generator, ABI layouts, and ownership helpers; synthetic integration tests against `test:///default` on Ubuntu 22.04 and 24.04; plus race and generated-code checks. A gated real-integration job starts an isolated QEMU/libvirt daemon on an ephemeral Ubuntu runner and exercises disposable fixtures, guest lifecycle callbacks, and cleanup. Compatibility checks cover different packaged libvirt runtimes and missing-symbol behavior. Govulncheck and CodeQL add dependency and code security analysis.

These checks provide useful evidence about API behavior and test isolation. They do not establish reliability under production storage transfers, streams, callback load, or long-running guest churn.

## Where It Goes Next

One intended path is to use libvirt-go for incremental improvements to the existing ZVM backend after each piece has proved useful in testing. The library will remain an independent package, available to other Go projects that need in-process libvirt access with cgo-free builds. Near-term work focuses on expanding high-level wrappers, testing streams and callbacks under load, strengthening resource-lifetime coverage, exercising a wider old-to-new libvirt compatibility matrix, and moving Linux arm64 from compile checks toward runtime validation. No ZimaOS version, release date, or integration schedule is being announced.

## Try the Developer Preview

Try the [libvirt-go developer preview](https://github.com/Ns2Kracy/libvirt-go) and open a focused [GitHub issue](https://github.com/Ns2Kracy/libvirt-go/issues) when you find a gap. Include your Linux distribution and architecture, installed libvirt version, the missing high-level wrapper or unavailable symbol, and a minimal reproduction.

Reports of behavior on older libvirt versions and Linux arm64 are especially useful. For resource, callback, or stream bugs, describe the cleanup order and whether the issue reproduces with `test:///default` or a real daemon. Contributions are welcome. If you want to add a missing wrapper, begin with an issue that names the underlying libvirt function and ownership behavior so the implementation and tests can be reviewed together.
