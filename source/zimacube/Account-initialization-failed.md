---
title: Fix "Account Initialization Failed" Error: Quick Guide  
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

## **Option 1: Reinstall ZimaOS**  
**Tools Needed**:  
- Blank USB drive (≥4GB)  
- Keyboard  

**Steps**:  
- Please follow [this link](/zimacube/How-to-Install-ZimaOS) to complete the installation.

---

## **Option 2: Command Line Repair**  
**Tools Needed**:  
- HDMI/DP/Type-C Monitor
- Keyboard  
  

**Steps**:  
1. **Login to command line mode**  
   - Connect the monitor > Press Alt+F2 > Enter `root` to login command line mode

2. **Repair System Files**:  
   - Run
  ```language
  cat /etc/release.yaml
  ```

   - Run
  ```language
  rm -rf /var/lib/casaos/db/user.db && systemctl restart zimaos-user 
  ```
   - Done！Now you can try to log in to zimaos again

Thank you for your support！


