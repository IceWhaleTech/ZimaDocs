function set_image_size(image, width, height)
{
    if (!Number.isFinite(width) || !Number.isFinite(height)) return;
    image.setAttribute("width", Math.round(width));
    image.setAttribute("height", Math.round(height));
}

function hexo_resize_image()
{
    var imgs = document.getElementsByTagName('img');
    for (var i = imgs.length - 1; i >= 0; i--) 
    {
        var img = imgs[i];

        var src = img.getAttribute('src');
        if (!src || src.indexOf('?') === -1) continue;
        var query = src.slice(src.indexOf('?') + 1);

        var sizeMatch = query.match(/^(\d*)x(\d*)$/);
        if (sizeMatch && (sizeMatch[1] || sizeMatch[2]))
        {
            var width = parseFloat(sizeMatch[1]);
            var height = parseFloat(sizeMatch[2]);
            var n_width = img.naturalWidth;
            var n_height = img.naturalHeight;
            if ((!width || !height) && n_width && n_height)
            {
                if (width) height = n_height * width / n_width;
                if (height) width = n_width * height / n_height;
            }
            set_image_size(img, width, height);
            continue;
        }

        if (/^\d+(?:\.\d+)?$/.test(query))
        {
            var scale = parseFloat(query);
            var width = scale/100.0*img.naturalWidth;
            var height = scale/100.0*img.naturalHeight;
            set_image_size(img, width, height);
        }
    }
}
window.addEventListener('load', hexo_resize_image);
