---
title: More RAID Options
description:
type: “Docs”
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
# RAID Array Setup
RAID (Redundant Array of Independent Disks) is a technology that combines multiple hard drives to improve both data storage **reliability** and **performance**. It distributes data across multiple drives to achieve higher read and write speeds, and can maintain data integrity even if some drives fail.
JBOD simply combines multiple disks into one continuous logical volume, thereby maximizing the use of total capacity.

  <br/>


**In ZimaOS, complex RAID configurations are simplified into an intuitive user experience.**
Whether creating or maintaining a RAID array, you don’t need cumbersome commands or configurations — the setup can be completed in just **three steps**.

  

### Supported Storage Combination Options:

Currently, ZimaOS supports the following RAID levels and JBOD configuration. Each option has unique advantages and ideal use cases:

*   **RAID 0 (Fast)**: Focuses on maximum speed and capacity, but offers low security.
    
*   **RAID 1 (Safe)**: Provides high redundancy through mirroring, suitable for critical data.
    
*   **RAID 5 (Balanced)**: Offers a good balance of performance, capacity, and single-disk failure tolerance.
    
*   **RAID 6 (Stability)**: Enhances RAID 5 with dual parity, providing better protection against two-disk failures.
    
*   **JBOD (Flexible)**: Treats disks as independent units or concatenates them to maximize flexibility and capacity, with no redundancy.
    

  

For easier comparison, the table below summarizes the key features of each option (speed and capacity percentages are relative to using individual disks; actual performance depends on hardware configuration):

  

![](https://manage.icewhale.io/api/static/docs/1755075585086_copyImage.png)

  

  

### Detailed Steps to Create RAID 5:

RAID 5 is ideal for users seeking a balance of storage efficiency, performance, and single-drive failure protection. It requires at least three disks. Below is a step-by-step guide for creating a RAID 5 array using the updated ZimaOS UI.

  

1.  **Navigate to Storage Settings** Open the **Settings** interface. Go to the **Storage** tab. Here, you will see a list of current disks and available operations.
    

![](https://manage.icewhale.io/api/static/docs/1755075586219_copyImage.png)

2.  **Click the “Combine” button** to enter the disk combination menu.
    

![](https://manage.icewhale.io/api/static/docs/1755075587914_copyImage.png)

3.  **Select the RAID 5 option**, then click **“Next.”**
    

![](https://manage.icewhale.io/api/static/docs/1755075589691_copyImage.png)

4.  **Select three available disks**. The system will calculate the estimated capacity, then click **“Next.”**
    

![](https://manage.icewhale.io/api/static/docs/1755075591241_copyImage.png)

5.  **Configure and name the array**: Enter a name for the array (e.g., “RAID5”), check the desired protocols, then click **“Create”** to begin initialization.
    

![](https://manage.icewhale.io/api/static/docs/1755075592784_copyImage.png)

6.  **Creation complete**: The system will perform data striping, monitor the progress until finished, and display the array status as **“Healthy.”**
    

![](https://manage.icewhale.io/api/static/docs/1755075594884_copyImage.png)

7.  **You can now use RAID 5!** After creation, parity will be enabled automatically. During this process, disk read speeds may be affected, but normal usage will not be interrupted.
    

![](https://manage.icewhale.io/api/static/docs/1755075596383_copyImage.png)

### Others:

*   **Other RAID creation**: The steps for RAID 0, 1, and 6 are similar, differing only in the selected option and minimum number of disks. For example, RAID 6 requires at least four disks and provides dual-failure tolerance.
    
*   **ZFS support**: For users whose needs are not met by the default RAID options, ZimaOS also supports the ZFS file system. Please refer to the ZFS section in the official ZimaOS documentation or use command-line tools for setup: [https://www.zimaspace.com/docs/zimaos/ZFS-Setup](https://www.zimaspace.com/docs/zimaos/ZFS-Setup).
    

  

### FAQ:

*   **Why does creating a RAID take a long time?**
    
     It is affected by the capacity and performance of the hard drives.
        
    
      
    

### **How** **should I choose?**

Choosing the right RAID level depends on your storage needs: RAID 0 prioritizes speed, RAID 1 emphasizes safety, RAID 5 offers a balance of performance and protection, while RAID 6 is suitable for high-reliability scenarios. For quick comparison, the table below summarizes the descriptions, best uses, and key features of these levels to help you make an informed decision.

![](https://manage.icewhale.io/api/static/docs/1755075597233_copyImage.png)

  

### **Conclusion**

With the new visual RAID wizard in ZimaOS, you can achieve the optimal storage solution with minimal effort—just three clicks to easily complete RAID configuration, without complex commands, and enjoy high-performance, highly reliable storage.

  <br/>

We strongly recommend pairing this with the **3-2-1 backup strategy** (keeping three copies of your data, using two different media types, and ensuring at least one copy is stored offline) to further guard against accidental data loss and keep your valuable files safe. [Learn more here](https://www.zimaspace.com/docs/zimaos/How-to-Use-3-2-1-Backup-on-ZimaOS%EF%BC%9F).

  <br/>

If you encounter any questions, technical issues, or need further guidance during use, feel free to reach out to our official support team via direct message: [X platform](http://bit.ly/45Ef2Du) or [Facebook](http://bit.ly/3HofnB3). We promise a quick response within 48 hours, along with professional, personalized assistance.

  <br/>

Thank you for using ZimaOS! If this guide has been helpful, please share your feedback to help us improve.