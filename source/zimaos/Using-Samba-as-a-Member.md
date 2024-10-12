---
title: Samba with Multi-User
description: 
type: "Docs"
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## What Can Samba do?

### 3 Roles in Samba
<div style="display: flex; align-items: center;">
<div style="flex: 1;">
Samba allows for different roles and permissions when sharing files across a network.
</div>
<div style="flex: 1;">
<img src="https://manage.icewhale.io/api/static/docs/1728632674915_image.png" alt="Samba Roles">
</div>
</div>

## As "Manager", How to Create Shares?（Manager Roadmap）

### 1. Choose the file and click "Share Samba"
<div style="display: flex; align-items: center;">
<div style="flex: 1;">
Select the file you want to share and choose "Share Samba".
</div>
<div style="flex: 1;">
<img src="https://manage.icewhale.io/api/static/docs/1728635259975_image.png" alt="Share Samba">
</div>
</div>

### 2. Set the permission
<div style="display: flex; align-items: center;">
<div style="flex: 1;">
There are two roles to choose from:
- **Member**: Can create a new member or choose an existing one.
- **Guest**: Anyone with the file's address can access it.
</div>
<div style="flex: 1;">
<img src="https://manage.icewhale.io/api/static/docs/1728635259975_image.png" alt="Set Permission">
</div>
</div>

<div style="display: flex; align-items: center;">
<div style="flex: 1;">
Permissions:
- **Read**: The member can only download the file.
- **Read & Write**: The member can download, upload, rename, delete, etc.
</div>
<div style="flex: 1;">
<img src="https://manage.icewhale.io/api/static/docs/1728636948904_image.png" alt="Permission">
</div>
</div>

### 3. Create Sharing
<div style="display: flex; align-items: center;">
<div style="flex: 1;">
Click the "Create" button to start the sharing process.
</div>
<div style="flex: 1;">
<img src="https://manage.icewhale.io/api/static/docs/1728638375493_image.png" alt="Create Button">
</div>
</div>

<div style="display: flex; align-items: center;">
<div style="flex: 1;">
According to the member's or guest's operating system, choose the "Address" and "Copy". Send this address to the respective user.
</div>
<div style="flex: 1;">
<img src="https://manage.icewhale.io/api/static/docs/1728638496968_image.png" alt="Address Copy">
</div>
</div>

### 4. Manage your shared files
There are two methods to help manage shared files via Samba:

<div style="display: flex; align-items: center;">
<div style="flex: 1;">
1. Click the "Shared" button to view all shared files.
</div>
<div style="flex: 1;">
<img src="https://manage.icewhale.io/api/static/docs/1728638620287_image.png" alt="Shared Button">
</div>
</div>

<div style="display: flex; align-items: center;">
<div style="flex: 1;">
On the "Shared via Samba" page, you can manage the permission settings by hovering over the shared file and selecting "Manage Share". Click "Save" to confirm your changes.
</div>
<div style="flex: 1;">
<img src="https://manage.icewhale.io/api/static/docs/1728638763045_image.png" alt="Manage Share">
<img src="https://manage.icewhale.io/api/static/docs/1728638801741_image.png" alt="Save">
</div>
</div>

You can also right-click and select "Manage Samba" in the context menu.
<img src="https://manage.icewhale.io/api/static/docs/1728638926994_image.png" alt="Manage Samba">

### 5. Create Share Roadmap
<img src="https://manage.icewhale.io/api/static/docs/1728639005880_image.png" alt="Create Share Roadmap">

## As "Manager", How to Manage Members?（RoadMap）
<div style="display: flex; align-items: center;">
<div style="flex: 1;">
At the "Settings - Member" page, create new member accounts or edit existing ones.
</div>
<div style="flex: 1;">
<img src="https://manage.icewhale.io/api/static/docs/1728639061073_image.png" alt="Manage Members">
</div>
</div>

### 6. Manage your Member Accounts
<div style="display: flex; align-items: center;">
<div style="flex: 1;">
1. Create new member accounts from the "Settings" page.
</div>
<div style="flex: 1;">
<img src="https://manage.icewhale.io/api/static/docs/1728639235564_image.png" alt="Create Member">
</div>
</div>

<div style="display: flex; align-items: center;">
<div style="flex: 1;">
2. Edit a member’s account password or delete their account.
</div>
<div style="flex: 1;">
<img src="https://manage.icewhale.io/api/static/docs/1728639475546_image.png" alt="Edit Member">
<img src="https://manage.icewhale.io/api/static/docs/1728639486206_image.png" alt="Edit Password">
<img src="https://manage.icewhale.io/api/static/docs/1728639504689_image.png" alt="Confirm Changes">
<img src="https://manage.icewhale.io/api/static/docs/1728639516436_image.png" alt="Delete Account">
</div>
</div>

## As "Member", How to use Samba?

### Verify the address for your operating system compatibility.

#### 1. For Windows OS
1. Open the "File Explorer".
<img src="https://manage.icewhale.io/api/static/docs/1728370332527_4.1.png" alt="File Explorer">

2. Enter your Samba address in the search box.
<img src="https://manage.icewhale.io/api/static/docs/1728370346032_4.2.png" alt="Enter Address">

3. Enter your member account and password.
4. Click "OK".
<img src="https://manage.icewhale.io/api/static/docs/1728370367682_4.3.png" alt="Login">

5. Connection successful.
<img src="https://manage.icewhale.io/api/static/docs/1728370378592_4.4.png" alt="Connection Success">

#### 2. For Mac OS
1. Click "Go" -> "Connect to Server" in the menu bar.
<img src="https://manage.icewhale.io/api/static/docs/1728370418677_4.5.png" alt="Connect to Server">

2. Enter your Samba address in the search box and click "Connect".
<img src="https://manage.icewhale.io/api/static/docs/1728370424977_4.6.png" alt="Enter Address">

3. Click "Connect" to continue.
<img src="https://manage.icewhale.io/api/static/docs/1728370429529_4.8.png" alt="Connect">

4. Enter your member account and password and click "Connect".
<img src="https://manage.icewhale.io/api/static/docs/1728370435735_4.9.png" alt="Login">

5. Connection successful.
<img src="https://manage.icewhale.io/api/static/docs/1728370440897_4.10.png" alt="Connection Success">

6. If you face permission issues, check with the file's manager.
<img src="https://manage.icewhale.io/api/static/docs/1728370447288_4.11.png" alt="Permission Error">
