---
title: ZimaCube & ZimaOS Compatible Network Adapters
description: 
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
Here’s a list of network adapters compatible with ZimaCube and ZimaOS. Based on community feedback, we have ensured compatibility with the following adapters, providing seamless integration for optimal performance:
### Compatible Network Adapter List
- **PCIe to Dual Port Gigabit Ethernet Adapter** Realtek RTL8111 Chipset
- **PCIe to Dual Port 2.5G Ethernet Adapter** Realtek RTL8125B Chipset
- **PCIe to 4-Port Gigabit Ethernet Adapter** Realtek RTL8111 Chipset
- **PCIe to 4-Port Ethernet Adapter** Intel I350-T4 Chipset
- **PCIe to 4-Port 2.5G Ethernet Adapter** Realtek RTL8125B Chipset
- **PCIe to 4-Port 2.5G Ethernet Adapter** Intel I225 Chipset
- **PCIe x4 to Single-Port 10G Ethernet Adapter** AQC113 Chipset
- **PCIe to 2-Port Ethernet Adapter** Intel I350-T2 Chipset
- **PCIe to 2.5G Ethernet Adapter** Realtek RTL8125 Chipset
- **Intel AX210 WiFi 6E PCIe Card** with 8Dbi Antennas Set
Added according to community user(Coming soon):
- **PCIe Network Adapter** Intel X540 Chipset (New Addition)
- **PCIe Network Adapter** Realtek RTL8125B (New Addition)
- **PCIe 10G 2-Port SFP + Server Adapter** Intel 82599ES  Chipset (New Addition)
### Recommended Speed Test Tools
To help you measure network performance accurately, we recommend the following two tools:
1. **iPerf3**: A built-in command-line tool within ZimaOS, iPerf3 is perfect for testing internal network speeds. It’s fast, reliable, and ideal for users comfortable with terminal commands to benchmark their internal network performance.
2. **OpenSpeedTest Docker App**: This easy-to-install graphical interface tool, available in the ZimaOS App Store, can be used for testing internal network speeds. OpenSpeedTest provides a simple, user-friendly interface, making it an good choice for those who prefer a visual tool over command-line utilities.
Both tools are great for testing internal network speeds, with iPerf3 for users who prefer command-line testing and OpenSpeedTest for those looking for a quick and intuitive graphical option.
### Brief tutorial on how to use iperf3
You need at least two machines that have iperf3 installed. On ZimaOS, you can refer to this article to learn CLI. On Windows or macOS, you need to install iperf3 first [acticle](https://www.zimaspace.com/docs/zimaos/Sync-Photos-via-Configurable-CLI)and use it in Terminal app.
**Setup the Server**
On the machine you want to use as the server, run:
```
iperf3 -s
```
This will start the `iperf3` server, waiting for connections.
**Setup the Client**
On the client machine, run:
```
iperf3 -c <server_ip_address>
```

Replace `<server_ip_address>` with the IP address of the machine running the server.
This command will initiate a test and display the network bandwidth between the client and server.
Run Tests with Custom Parameters
You can modify the test settings by using different options:
- Test duration: `-t <seconds>` (default is 10 seconds)
- Number of parallel streams: `-P <num_streams>` (default is 1)
- Port number: `-p <port_number>` (default is 5201)
Example: Run a 30-second test with 4 parallel streams:
```
iperf3 -c <server_ip_address> -t 30 -P 4
```

**Check the Results**
After the test completes, `iperf3` will show you the bandwidth, jitter, and packet loss between the two devices.
This is a basic guide to get started with `iperf3` for network performance testing. Adjust parameters based on your specific needs!
With this compatibility and the recommended speed testing tools, you’ll be able to make the most out of your ZimaCube setup. If you have further questions or feedback, please feel free to reach out to our community or support team!
