# 2023 个人最佳实践

## 背景

这里记录一些个人平时工作中在 web 端开发的一些最佳实践，主要包含一些前端开发以及前端工程化相关内容。

## 图标

在 hui 早期版本的时候，我们使用的是字体图标，这里会有2个问题

+ 1. 图标其实是字体，但经常会出现，页面加载出来的时候是一个 "口" 然后在图标加载成功后变成图标。
+ 2. 耦合性太强，无法定制与组合，也是全量引用
+ 3. 早期的 hui 的图标设计会有几个px的边距留白，主要是一种设计风格，以及有一些辅形组合图标

最新的 hui 中我把纯 svg 的图标给筛选出来了，并移除了边距留白，这样可以更好的定制与组合，也可以更好的控制大小，颜色等。但写法上可能会和以前有所区别，同样也并不是所有组件都支持。这块我也会慢慢完善。

用 svg 的原因就是为了能够项目中更好的复用，比如业务层去控制边距，大小，留白等，如果熟悉一些 svg 的语法，那些组合的图标就完全可以自己做，不用依赖于 hui 的图标库。

我个人再推荐一个宝藏图标库，可能大家都知道 iconfont，确实可以，但有点倾向于设计师，现在也越来越花里胡哨，所以我这里再推荐一个，[icones](https://icones.js.org/)，它更倾向于web前端开发，而且里面的图标都是开源协议，可以随意使用。

---

当然自己画也是一种选项，[figma](https://www.figma.com/) 就是一个很好的画图工具，可以画出 svg，也可以导出 svg，但这个工具是收费的，如果你不想花钱，可以使用 [excalidraw](https://excalidraw.com/)，这个是免费的，但功能上没有 figma 那么强大。figma 近几年的口碑比较好，很多设计上的idea，在我用figma的时候就会被它影响到。

> 画图标其实还是蛮简单的，我个人天赋不强，如果想了解怎么画，可以参考我之前的文献 如何画一个会动的可达鸭

## vite 开发

vite 我个人感觉历史意义是比 vue3 更加强大，最能体现的一件事就是 react 团队之前有将默认的脚手架也改成了 vite。

在这里我先推荐 2 个个人觉得比较好的 vite 模板：

+ vue3 + element-h + vite4
+ vue2.7 + hui2.50 + vite4

### vitesse

这个其实我在之前的文献中已经说了，我的脚手架也是拿它的魔改来的。想熟悉这块的可以看下 它的 [官方demo](https://github.com/antfu/vitesse) 或者我的老文献 vue3 初体验

### vite-plugin-vue-devtools

这个插件的强大来源于 [nuxt/devtools](https://github.com/nuxt/devtools)， 它已经打破了我对于开发体验提升的一切幻想，如果要评2023年度我个人觉得最佳工具，它肯定是上榜的，但无奈这个是基于 nuxt的。大家有兴趣的话 可以看下这个分享：introducing-nuxt-devtools：<https://nuxt.com/blog/introducing-nuxt-devtools>

但是庆幸的是类似的 vite 工具也有人做了。而且还做的不错。官方地址：<https://github.com/webfansplz/vite-plugin-vue-devtools>

我个人觉得最让人颠覆性的就是我们开发的菜单，我们之前vessel 是把菜单放到最左边，但最终成果物并不没有最左边的功能。这样导致我们在脚手架中塞入了过多的代码。而这个插件在开发态可以把这件事情做掉，而且做的更强大。

![](/imgs/vite-plugin-vue-devtools.png){data-zoomable}

还有一点就是它可以代替大部分 浏览器插件 vue-devtools 的功能。但我个人其实 vue-devtools 用的也习惯，所以我会同时开启这两个插件。

> 唯一不足的是 这个插件暂时不支持 vue 2.7

### unplugin-auto-import

官方地址： <https://github.com/antfu/unplugin-auto-import>

这个插件的作用就是自动引入，比如你在代码需要调用一些方法，它会自动帮你引入 `import { someaction } from '@/api'`，这样就不用每次都手动引入了。

以前一个东西没有引入，要去文件最上方去import 一下，回来你就忘记你当时加在那里了，开发思路也会被打断。这个插件就是为了解决这个问题。

我个人还仅仅在vite中用，其实应该也能支持 webpack，但我没有试过。

### unplugin

官方地址：<https://github.com/unjs/unplugin>

如果你打算编写vite插件，同时想支持 rollup，webpack，esbuild，Rspack，你可以考虑使用这个工具，它帮你把底层对接的事情给搞定了。

### 有关接口请求的最佳实践

以前 vessel 中会引入 api 这个文件夹，有一个原因是，我们之前有easy-mock，可以把swagger文档自动生成文档并放到api文件夹下面，前端就可以用过一些调用去解决接口层面的问题；这个算是我引入的一层心智负担；

但这会引发2个问题：

1. 我们还是需要引入api对应的js去调用
2. 每个api不管自动生成，还是手动写入，都会生成一个function ，如果请求叫/aaa/bbb，那我们方法名可能会加 AaaBbb 这样，这样其实多了一层心智负担，一般做法是找到请求，在跳转到api内的文件夹，再切回来其实还是蛮影响开发体验的

我这里有个解法，可以完全不需要api文件夹 内网链接无法访问

> 这里我引用的是 vueuse，当然直接使用 axios，我估计也是可以的

### 代理的最佳实践

之前由于 webpack 在修改配置文件的时候并没有热加载，导致我们在切换请求的时候需要停服务和启服务。所以我们诞生了 [easy-proxy](http://10.19.171.209:8900/login)，我们组基本人手都要用

在用了 vite 后其实这个问题并不存在了，代理可以直接在 `vite.config.js` 中配置了，easy-proxy 是时候走下历史舞台了，配置方式如下

```js
server: {
  proxy: {
    '/xxx': {
      target: `https://${Host}`,
      changeOrigin: true,
      // https安全验证关闭
      secure: false,
      // 请求头
      headers: {
        Referer: `https://${Host}`,
        Host: Host,
        Cookie,
      },
    },
  },
},
```

## 工程化相关最佳实践

可能大家觉得工程化并不是前端开发特别需要关注的事情，确实，可能大家都是用的脚手架，但我个人觉得工程化是前端开发的一部分，而且是非常重要的一部分，因为它会影响到你的开发体验，以及你的开发效率。

首先我在这里要强调三点内容：

+ 项目开发中一定要使用并上传 lock 文件
+ 项目开发中一定要使用并上传 lock 文件
+ 项目开发中一定要使用并上传 lock 文件

### 一些配置文件的用法

README.md 其实是描述项目内容的主要信息，可以存很多东西，其实可以写需求，设计等等，也可以存一些必要的项目信息，我拿我自己做的项目举例：

```
# 园区光纤配置

脚手架基于 内网链接无法访问

## 路由

[标定页面](/fiber/settings)

[标定分区配置](/fiber/zone)

## 项目信息

后端开发：蒋勇16，石娅

演示环境：10.33.40.183   admin/****    sysadmin/****  root/****

交互地址：内网链接无法访问
```

### 需要支持 esmodule

commonjs 在大量伤害现有的前端工程，如果你做一个组件库或者工具，尽可能要支持 esmodule，这样可以让你的工具在未来更好的发展。

为了长远发展，对于在线demo都可以更好的配合 内网链接无法访问 和 内网链接无法访问

相关文献：【翻译】CommonJS正在破坏JavaScript

### 分支与版本工具

现在如果你要做一个脚手架，或者组件库，发布版本与日志记录是必不可少的，这里我推荐使用 [standard-version](https://github.com/conventional-changelog/standard-version)

配合 [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) 可以自动生成 changelog，让你的版本管理更加规范，也可以让你的版本管理更加简单。

同时你也要遵循代码提交的规范，这里我推荐一个工具是 gitcz，它可以让你的代码提交更加规范，也可以让你的代码提交更加简单。每次提交前你可以运行 

```bash
npx gitcz
```

它会指引你写正确的提交记录

> 规范的 changelog 可以看下hui的 更新日志

### 进阶 monorepo

monorepo 的项目（也就是一个项目里面要做多个包，发多个版本，打多个tag），那我个人推荐 <https://github.com/vitejs/release-scripts> 这个工具，它可以让你的 monorepo 项目发布与打tag更加简单。有需要的同学可以直接看它的文档，或者vitejs的发布配置。我自己也有相关的使用，可以看下 内网链接无法访问

## 总结

以上是我个人推荐的一些最佳实践，如果有觉得好的最佳实践也可以提 issues 给我