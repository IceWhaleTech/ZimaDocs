---
title: Self-Deploying-Applications
description:
typora-root-url: ..
---
# Reason

**To meet the needs of installing their own application load, CasaOS provides users with a variety of ways to install. This document will help you to find more Docker applications and use them by simply copying them. The recommended search site for this document is **[linuxserver.io](https://www.linuxserver.io/)****


# linuxserver.io

![Linuxserver](/images/Self-Deploying-Applications/application-introduce-linuxserver.png)

As described on their official website.
We are a group of like-minded enthusiasts from across the world who build and maintain the largest collection of Docker images on the web, and at our core are the principles behind Free and Open Source Software. Our primary goal is to provide easy-to-use and streamlined Docker images with clear and concise documentation. 
**Yes, I think they’ve achieved that!**


# Search for the Desired Docker Image

**Step 1** OpenLinuxServer and click **[’fleet’](https://fleet.linuxserver.io/)**

![Linuxserver Fleet](/images/Self-Deploying-Applications/application-linuxserver-fleet1.png)

**Step 2** Search for the application you want in **[’fleet’](https://fleet.linuxserver.io/)**

![Linuxserver Fleet](/images/Self-Deploying-Applications/application-linuxserver-fleet.png)

# Installing applications 

**Example:** Installing the **[Apprise API](https://hub.docker.com/r/linuxserver/apprise-api)** on CasaOS and using it

## What is **[Apprise API](https://hub.docker.com/r/linuxserver/apprise-api)**?

![Appriseapi](/images/Self-Deploying-Applications/applicatin-appriseapi-logo.png)

 Apprise allows you to send notifications to almost all of the most popular notification services we have available today, such as Telegram, Discord, Slack, Amazon SNS, Gotify, and more. This API provides a simple gateway to access it directly through an HTTP interface. Apprise API installation on CasaOS

## Search For Docker CLI 
Go to the Apprise API hub and copy the appropriate Docker CLI -apprise-api

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-docker-cli.png)


## Follow these steps in order 

Open CasaOS and go to the user-defined installation screen, paste in and wait for the installation.

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps1.png)

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps2.png)

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps3.png)

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps4.png)

## Copy Apprise API Docker Cli 

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps5.png)

## Past Apprise API Docker Cli 

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps6.png)

## Add Web UI Port

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps7.png)

## Wait for Installation

This can take a few minutes

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps8.png)

## Successful Installation and Click-to-Use

![Copy Appriseapi Cli](/images/Self-Deploying-Applications/application-using-appriseapi.png)

**Attention**
AutoFill only helps you to complete some of the configuration information, 
including:
- the port and path of the Web UI
- the mount location of the volume or file
- the port mapping of the Host
- optional configuration items
These include but are not limited to these cases and still need to be confirmed or modified by you. Feel free to suggest improvements to this feature in the Discord Server!

# Conclusion

The above is the **[Apprise API](https://hub.docker.com/r/linuxserver/apprise-api)** installation method, and the same is true for other applications. But note: each application itself requires certain conditions.

Several parts need to be checked in the Docker Hub interface during installation。

**For example**

- Supported Architecture 
  Identifies the architecture supported by the application. If not, please check the Tags above (containing the history of updated versions)
- Parameters : 
  The container image is rationed using the parameters passed at runtime, and some applications have set default passwords to be displayed here as well.

More Information——https://docs.linuxserver.io/images/docker-airsonic-advanced#docker-cli-click-here-for-more-info

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)