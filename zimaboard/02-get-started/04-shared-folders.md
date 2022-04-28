---
sidebar_label: Accessing Shared Folders
title: Accessing Shared Folders | Get Started | ZimaBoard
hide_title: true
comments: true
---

# Accessing Shared Folders

## Brief

ZimaBoard comes pre-installed with Samba, a common communication protocol for sharing files and printers over a LAN.

So, once ZimaBoard is started, the shared folders created by Samba will be automatically discovered on the LAN, whether it's your home laptop, cell phone, router, or big TV.

Of course, all the pre-made scripts are simply configuring some shared areas in the ZimaBoard file system. If you need advanced requirements, you can check Samba extended configuration information

:::tip
All devices on the local network can use these shared folders as "**guest**".
:::

## Accessing from macOS

1. In the Finder menu, click Go > Connect to Server...

<p><img
  src={require('./images/finder-go.png').default}
  alt="finder-go"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

2. Type `smb://casaos.local` and click on **"Connect"**

<p><img
  src={require('./images/mac-connect-to-casaos-mac.png').default}
  alt="mac connect to casaos"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

1. Select the connection identity, here we directly select **"Guest"**, then click **"Connect"**

<p><img
  src={require('./images/mac-guest.png').default}
  alt="mac guest"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

4. Select the folder you want to connect to Data

<p><img
  src={require('./images/connect-to-data.png').default}
  alt="connect to data"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

5. When you enter and see

<p><img
  src={require('./images/see-data-file.png').default}
  alt="see data file"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

## Accessing from Windows

1. Open File Manager and type **`\\casaos`** in the address bar

<p><img
  src={require('./images/win-file-manager.png').default}
  alt="win file manager"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

2. Press Enter and you will see the shared files on your ZimaBoard

<p><img
  src={require('./images/win-see-data.png').default}
  alt="win see data"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

## Accessing from iOS

1. Open the Files app that comes with iOS

<p><img
  src={require('./images/search-files-ios.jpg').default}
  alt="search files ios"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

2. Click the button in the upper right corner, and select **"Connect to Server"**

<p><img
  src={require('./images/connect-to-server-ios.png').default}
  alt="connect to server ios"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

3. Enter **`casaos.local`**, or Use router to see the IP address of ZimaBoard (Knowledge Base Tutorial)

<p><img
  src={require('./images/connect-server-ios.jpg').default}
  alt="connect server ios"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

4. Login in with guest mode (default Samba configuration)

<img
  src={require('./images/connect-to-server-guest-ios.jpg').default}
  alt="connect to server guest ios"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/>

5. Successfully log in and access all files and media content

<p><img
  src={require('./images/see-data.jpg').default}
  alt="see data"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

<p><img
  src={require('./images/see-data-file-ios.jpg').default}
  alt="see data file ios"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>

## Accessing from Android

In Android phones, we tested several file managers (ES File Explorer, Xiaomi File Explorer, File Geek, CX File Manager, etc.).

We recommend "**CX File Manager**", which is a small, beautiful, ad-free file manager that can easily connect to many types of shared drives.

Download CX File Manager：
[Download via Google Play](https://play.google.com/store/apps/details?id=com.cxinventor.file.explorer),
[Download APK](https://www.apkmirror.com/apk/cx-file-explorer/)，

See it all in one picture:

<p><img
  src={require('./images/android-get.gif').default}
  alt="android-get"
  style={{
    maxWidth: '80%',
    display: 'block',
    margin: 'auto'
    }}
/></p>
