---
title: Fix "Account Initialization Failed"  
description: "Fix ZimaCube account initialization failure. Troubleshooting guide covering common causes and step-by-step solutions to complete your initial ZimaOS setup."
type: Docs
author: admin
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## **Option 1: Reinstall ZimaOS**  
**Tools Needed**:  
- Blank USB drive (≥4GB)  
- Keyboard  

**Steps**:  
- Please follow [this link](docs/zimacube/How-to-Install-ZimaOS) to complete the installation.

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


