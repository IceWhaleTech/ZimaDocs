---
title: Move Data Between Drives
seo_title: "Move Data Between Drives on ZimaOS: Docker, App Data, and Folders"
description: "Move Docker images, app data, and user folders between storage spaces on ZimaOS with the built-in Data Migration tool."
type: "Docs"
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

When a drive fills up, you do not need to reinstall anything. The built-in migration tool moves Docker images, app data, and user folders to another storage space while keeping everything working.

## What You Can Move

- Docker Images
- Docker Application Data
- User Databases (Gallery, Downloads, Documents, Media, Backup)

## How to Move

![ZimaOS Settings page showing the Data Migration entry with storage folders listed](https://manage.icewhale.io/api/static/docs/1727178430378_image.png)

1. Open **Settings > Data Migration**.
2. Select the item you wish to migrate and click the **Modify Location** button on the right.

![Data Migration page with Modify Location button next to each selectable item](https://manage.icewhale.io/api/static/docs/1727178444256_image.png)

3. Choose the new storage space and click **Next**.

![Data Migration wizard showing storage space selection with the Next button](https://manage.icewhale.io/api/static/docs/1727178450237_image.png)

4. Check the box for "I acknowledge and confirm this action," then click **Start Migration**.

![Data Migration confirmation screen with acknowledgment checkbox and Start Migration button](https://manage.icewhale.io/api/static/docs/1727178455511_image.png)

5. Progress shows full screen, and no other operations can be performed during migration.

![Data Migration progress screen showing the full screen migration status display](https://manage.icewhale.io/api/static/docs/1727178460307_image.png)

6. When it finishes, a popup shows the migration details.

![Data Migration completion popup showing the details of the finished migration](https://manage.icewhale.io/api/static/docs/1727178465734_image.png)

## Related

- **[App Storage Paths](./docker-app-paths "Where apps store data on your drives and how to move it")** — understand where apps keep data before you move it
- **[Storage Setup](./storage-setup "Choose your storage setup with RAID options matched to your needs")** — plan your storage spaces
