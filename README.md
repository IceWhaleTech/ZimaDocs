# Zima Docs Official Website


The website for Zima Docs. Bulit with Hexo.

## Getting started

Install Hexo

``` bash
$ npm install -g hexo-cli
```

Install dependencies:

``` bash
$ git clone https://github.com/jerrykuku/zima-docs.git
$ cd zima-docs
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