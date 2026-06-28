# isc 开发笔记

## 背景

最近我 在 isc 220 的开发中，我也投入很多精力在需求的研发中，那中间我发现一些好的工具和操作，记录和分享一下。

## 工具

### 浏览器插件

+ vue2 vue devtools v6
+ vue3 vue devtools v7
+ 一键切换的插件 Vue Devtools Toggle

主要是我需要在 vue2 和 vue3 之间来回切换，之前的话是去浏览器扩展程序中来回切换，很麻烦，但这个的话只需右上角点击一下即可，很方便。

![vue devtools toggle](/imgs/isc-write-note/vue-devtools-toggle.png)

### debugger 不生效

我自己开发了几个组件，在开发的时候，发现浏览器插件不生效，甚至在代码中 debugger 也不生效，只能用 console.log 来调试，配置下 vue.config.js 即可。

```js
module.exports = {
  configureWebpack: {
    // 避免源码泄露
    devtool: process.env.NODE_ENV === 'production' ? 'nosources-source-map' : 'source-map'
  },
}
```

## notepad 工具

我在每个项目的时候会记录一些项目信息，比如 环境，视觉稿地址，相关开发人员等，这个我之前写在readme.md 中，但后来发现，这样不便于管理，甚至有一定的代码侵入性，所以我就用 notepad 工具来记录，这样更便于管理。

这个是我在 cursor 中偶然发现的，只有 cursor 才有。这个的好处就是和项目本地结合，不会占用资源。而且每次打开也很方便。

![notepad](/imgs/isc-write-note/notepad.png)

> vscode 应该也有类似的插件，有兴趣的同学可以探索下。

## hiklink 在线文件

一般接口文档，缺陷记录，项目记录，甚至一些设计，都可以用 hiklink 在线文档来记录。就不用本地传来传去，很方便。

比如轻文档，我一般记录一些项目信息，学习笔记。而 excel 一般记录缺陷回归，项目问题记录，自测记录等。

## pixso 的历史记录功能

现在我们的视觉稿都用 pixso 来设计，那在开发中，设计师会经常修改视觉稿，但并不一定会加入改动记录；那我们可能需要查看历史记录，回退版本；

![pixso history](/imgs/isc-write-note/pixso.png)


## isc 易用性 

这个 isc 的版本我们做的一些易用性改造，不过我个人觉得这个其实是前端或者一个开发的基础工作，而不是当做一个重点工作执行的。就是易用性本事就是 DFX 的一项，应该在日常工作中就应该去做到的基本工作。

比如说，我们最基本的，当我们控件没安装的时候应该告诉去哪里安装，当某个配置项没有配置的时候应该提示用户去哪里配置，这里就需要用到门户的 gotoApp 方法。可以看下这个文档：内网链接无法访问

## eslint 校验

开发过程中还是有很多人的编辑器会开启 eslint 保存调整，那代码提交的时候会出现虽然提交了一个代码，但实际只改了一行，但提交了 n 行的信息，不利于代码审核。所以我有以下的推荐。

+ 如果负责一个项目在项目初期和末期执行一次 eslint 的校验，并提交
+ 在编辑器中开启 eslint 保存调整
+ 在项目中配置 .vscode/settings.json 文件
  + vue3 项目的话可以参考 内网链接无法访问
  + 或者 https://github.com/antfu/vscode-settings

> 后续这块可能也会单独出文献说明
