---
title: Rebuilding RAID after reinstalling the system
description: 
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## Purpose
This tutorial will guide you through using the `Files` application to download and replace the `local-storage.db` file, enabling you to migrate or restore RAID configuration data after reinstalling the system.
## Operation Steps
1. **Download local-storage.db File**
  a. Access `Files` on ZimaCube.
  b. In `Files`, set the access path to `/ZimaOS-HD/.casaos/db`.
  c. Find the `local-storage.db` file and download it to your local device.
2. **Reinstall the System**
  a. Safely shut down ZimaCube, ensuring the device is completely powered off.
  b. Replace the system SSD drive as needed and reinstall ZimaOS.
  c. Start ZimaCube, ensuring ZimaOS is installed successfully and running normally.
3. **Upload and Replace local-storage.db File**
  a. Open `Files` and navigate to the `/ZimaOS-HD/.casaos/db` directory again.
  b. Find the `local-storage.db` file in the current directory and rename it to `local-storage.db.bak` to keep a backup.
  c. Upload the `local-storage.db` file downloaded in Step 1 to the current directory.
4. **Restart ZimaCube:**
  After replacing the file, restart the ZimaCube device to ensure all changes take effect.
## Notes
- Ensure all important data is backed up before proceeding to avoid data loss due to errors.
- If you encounter issues with installation or configuration, check your network connection or contact technical support.