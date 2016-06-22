# CDN 配置

网站用了两个 CDN 空间:

### [ccchloris-www](https://portal.qiniu.com/bucket/ccchloris-www)

这个空间用于加速网站用到的静态文件。当前是配置回源到 http://ccchloris.github.io/ 的,等以后加了自定义域名后要改一下。

### [ccchloris-cdn](https://portal.qiniu.com/bucket/ccchloris-cdn)

这个空间用于存放写文章时上传的图片。图片以 GitHub Pages 的形式保存在 https://github.com/ccchloris/ccchloris-cdn 中,同时我给这个 GitHub Pages 配置了一个自定义域名 cccdn.limingkai.cn 用于 CDN 回源。
