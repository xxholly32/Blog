---
title: 浏览器选型
image: https://cdn.stocksnap.io/img-thumbs/960w/H2SNXCYG1T.jpg
date: 2019-02-27
tags:
  - browser
---

社区专用浏览器选项规范

# 浏览器选型

<a name="3ae2d96a"></a>

# 一些流行控件的浏览器支持范围

<a name="0c7c2f82"></a>

## 🖥 支持环境（antd）

- 现代浏览器和 IE9 及以上。
- 支持服务端渲染。
- [Electron](http://electron.atom.io/)

| [![](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png#alt=IE%20%2F%20Edge&height=24&width=24)](http://godban.github.io/browsers-support-badges/)<br />IE / Edge | [![](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png#alt=Firefox&height=24&width=24)](http://godban.github.io/browsers-support-badges/)<br />Firefox | [![](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png#alt=Chrome&height=24&width=24)](http://godban.github.io/browsers-support-badges/)<br />Chrome | [![](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png#alt=Safari&height=24&width=24)](http://godban.github.io/browsers-support-badges/)<br />Safari | [![](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png#alt=Opera&height=24&width=24)](http://godban.github.io/browsers-support-badges/)<br />Opera | [![](https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png#alt=Electron&height=24&width=24)](http://godban.github.io/browsers-support-badges/)<br />Electron |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE9, IE10, IE11, Edge                                                                                                                                                                               | last 2 versions                                                                                                                                                                                 | last 2 versions                                                                                                                                                                             | last 2 versions                                                                                                                                                                             | last 2 versions                                                                                                                                                                         | last 2 versions                                                                                                                                                                                     |

<a name="0b34e0bb"></a>

## Browser Support（element）

Modern browsers and Internet Explorer 10+.

<a name="bfab5fa6"></a>

## angular/material

![](https://cdn.nlark.com/yuque/0/2019/png/127166/1551232026656-8d82171c-98e1-4ec2-b15f-37989135e821.png#align=left&display=inline&height=801&originHeight=1076&originWidth=1002&size=0&status=done&width=746)

<a name="browserslist"></a>

# browserslist

[Browserslist (基于官方文档翻译）](https://juejin.im/post/5b8cff326fb9a019fd1474d6)是在不同的前端工具之间共用目标浏览器和 node 版本的配置工具。它的默认配置是`> 0.5%, last 2 versions, Firefox ESR, not dead`。<br /><br /><br />[相关配置列表](https://juejin.im/post/5b8cff326fb9a019fd1474d6#heading-4)中也存在一些其他配置，比如

- `since 2015` or `last 2 years` :自某个时间以来更新的版本（也可以写的更具体`since 2015-03`或者`since 2015-03-10`）根据时间点去判断是否适用；
- `> 5%`: 基于全球使用率统计而选择的浏览器版本范围。`>=`,`<`,`<=`同样适用。

根据时间和根据范围去做相应控制；

[浏览器占有率](https://browserl.ist/)，我看了下前面 material 的图就是从这里盗的，有变化的是 safari 的 11 和 12 的占有率从之前的 1.57 到现在不到 0.5%这块还是值得关注一下的，如果选择了 last 2 versions 虽然会跟进时代，但也会舍弃一些浏览器；用默认的好处是可以紧跟时代，不用的话可能要每年做更新。<br />对于以上的一些配置还可以组合([Query Composition](https://github.com/browserslist/browserslist/blob/master/README.md#query-composition))，'> .5% or last 2 versions'的形式可以满足版本和人数的限制。这样我们算出来的浏览器版本就是[> .5% or last 2 versions](https://browserl.ist/?q=%3E+.5%25+or+last+2+versions)；<br /><br /><br />browserslist 的默认配置  `> 0.5%, last 2 versions, Firefox ESR, not dead` 。刚好也在浏览器占有率的[默认标准](https://browserl.ist/?q=)之内。

<a name="3ff3c3e2"></a>

# 开发

```
// package.json
{
  "private": true,
  "browserslist": [
    "defaults"
  ]
}
```

<a name="fb507f2c"></a>

# 参考文献

> [Browserslist (基于官方文档翻译）](https://juejin.im/post/5b8cff326fb9a019fd1474d6) > [browserslist（官方文档）](https://github.com/browserslist/browserslist)
