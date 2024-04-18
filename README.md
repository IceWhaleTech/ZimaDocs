# Zima Docs Official Website


The website for Zima Docs. Bulit with Hexo.

## Getting started

You will need [Node.js](https://nodejs.org/en/)(LTS version recommended),and [yarn](https://classic.yarnpkg.com/en/docs/install)

Install Hexo

``` bash
$ npm install -g hexo-cli
$ yarn global add open-cli
```

Install dependencies:

``` bash
$ git clone https://github.com/IceWhaleTech/ZimaDocs.git
$ cd ZimaDocs
$ yarn install
```

Generate:

``` bash
$ hexo generate
```

Run server:

``` bash
$ hexo server
```

Run editor
``` bash
$ yarn start
```

Create a new page:

``` bash
$ hexo new page <title>
```


## Available tags

### Video

Youtube. You can get youtube video id from youtube video url. https://www.youtube.com/watch?v= ```DqqY3sDVGKA```

``` html
{% youtuber video <youtube-video-id> %}
{% endyoutuber %}
```

Bilibili

``` html
{% mmedia "bilibili" "bvid:<video-bvid>" "danmaku:false" %}
```

Local or internet video

``` html
{% mmedia "video" "src:<video-path>" "autoplay:true" %}
```

### Note

tag name: note  
tag type: default / primary / success / info / warn / danger

``` html
{% note warn <your-note-title> %}
<your-note-body>
{% endnote %}
```

### Add new menu

1. open ```source/_data/menu.yml``` ,add a new menu in the original format.
2. open ```themes/zima/languages/en.yml```, add the translation for the new link. 

### Add new sidebar link

1. open ```source/_data/sidebar.yml``` ,add a new link in the original format.
2. open ```themes/zima/languages/en.yml```, add the translation for the new link. 

### Resize image

``` html
![Specify size](/image/test.jpg?200x200)

![Restricted width](/image/test.jpg?200x)

![Restricted height](/image/test.jpg?x200)

![Specify the ratio](/image/test.jpg?40)
```

## Contributing Guide

1. Please fork the repo first.
2. Follow the getting started guide to install the environment and dependencies.
3. Clone the forked repo to your local pc.
4. Run ```hexo server``` to preview the site.

### Create a new page

``` bash
# Create a new docs page
hexo new page -p docs/<page name> "<title>" 
# hexo new page -p docs/Install-Debian "Install-Debian" will create a new Install-Debian.md in /source/docs

# Create a new faq page
hexo new page -p faq/<page name> "<title>" 
# hexo new page -p faq/Install-Debian "Install-Debian" will create a new Install-Debian.md in /source/faq
```
You can open the /source/docs/Install-Debian.md and use markdown to edit it.

``` markdown
title: Install Debian
---

new content here
```

If you want add images for new page. You need to create a folder under the /source/images folder with the same name as the page.

``` markdown
title: Install Debian
---

new content here

![Debian-Logo](/images/Install-Debian/logo.png)
```

### Show the new page in the sidebar

1. Open the /source/_data/sidebar.yml
2. Add your page to the appropriate category.

``` yaml
docs:
...
  operating_systems:
    ...
    install_debian: Install-Debian.html  # <index-key>: <page-name>.html
...
```

### Add translation for the sidebar

1. Open the /themes/languages/en.yml
2. Add new translation to en.yml

``` yaml
...

sidebar:
  docs:
    ...
    install_debian: Install Debian # <index-key>: <Final content>
    ...
```

After confirming that everything is OK, you can commit your changes to github, and PR them to IceWhaleTech/ZimaDocs.