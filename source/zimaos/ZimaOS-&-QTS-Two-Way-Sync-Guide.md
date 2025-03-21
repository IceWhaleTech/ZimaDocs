---
title: ZimaOS & QTS Two-Way Sync Guide
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
![](https://manage.icewhale.io/api/static/docs/1742550303202_image.png)
## Real-World Pain Point: Cross-NAS Synchronization Challenges
A user recently asked: "Our team uses both ZimaOS and QNAP QTS systems. Manually transferring files consumes 2+ hours daily. How can we automate bidirectional sync?" This guide solves this exact problem.
## Why WebDAV + Zerotier?
![](https://manage.icewhale.io/api/static/docs/1742550364111_image.png)
Figure 1: Architecture of cross-system file synchronization via WebDAV and Zerotier
### Keywords: ZimaOS and QTS Two-Way Sync
- WebDAV : Cross-platform file collaboration protocol
- Zerotier : Virtual LAN tool for NAT traversal without public IP requirements
- Advantages : Easy configuration, automatic sync and resumable sync
## Step-by-Step Implementation
### Step 1: Configure WebDAV on ZimaOS
1. Install App : Search "WebDAV" in ZimaOS App Store
![](https://manage.icewhale.io/api/static/docs/1742550445278_image.png)
2. Critical Parameters (Figure 2):
  - Credentials: Default `casaos` 
  - Sync Directory: Select target folder via "Choose Directory Icon"(second red circle)
  - Port: Note custom port (e.g., `5005`)
![](https://manage.icewhale.io/api/static/docs/1742550489305_image.png)
Figure 2: ZimaOS WebDAV configuration interface
### Step 2: Establish Zerotier Network
1. Get Network ID :
  - ZimaOS Dashboard → Settings → Network → Remote access → Enable → Click "NetworkID" to copy
![](https://manage.icewhale.io/api/static/docs/1742550534267_image.png)
2. Install Zerotier and enable SSH. (Related resources can be found at the bottom of the article)
3. QNAP Configuration :
  - SSH into QTS and run:
`zerotier-cli join [ZimaOS NetworkID]`
4. Verify Connectivity :
  - Get ZimaOS Zerotier IP: Network → Virtual Network → Static IP
  - Test with `ping [ZimaOS Zerotier IP]
`
### Step 3: Create HBS 3 Sync Task
1. Setup Sync :
  - Install "HBS 3" from QTS App Center
  - Launch HBS 3 and Select Snyc → Two-Way Sync Job → Add WebDAV account
![](https://manage.icewhale.io/api/static/docs/1742550603938_image.png)
2. Optimization :
  - Choose 'conflict policy' to rename local files
  - Set 'job schedule frequency' to 30 ~ 300s
## Conclusion & Resources
![](https://manage.icewhale.io/api/static/docs/1742550646713_image.png)
You’ve achieved:
✅ Real-time cross-system sync
✅ NAT penetration without public IP
✅ Automated files two-way sync
If you encounter any issues during use, feel free to let us know at any time. You can also join our [community](https://community.zimaspace.com/) and [Discord](https://discord.gg/uuNfKzG5) to discuss more about NAS and ZimaOS. We look forward to your feedback!

Further Reading:
[Zerotier Official Manual for QNAP](https://docs.zerotier.com/qnap/)
[Enabled SSH access on QNAP](https://www.qnap.com.cn/zh-cn/how-to/faq/article/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-ssh-%E8%AE%BF%E9%97%AE-qnap-nas)
[Keep Files Synced Between ZimaOS and Synology DSM](https://www.youtube.com/watch?v=n8ajxo6Uh3c)