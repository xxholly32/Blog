---
title: 利用 vite 快速搭建 vue3 组件库
image: /Blog/WechatIMG130.png
date: 2020-11-05
tags:
  - components
  - vue
  - 组件
  - 前端
---

利用 vite 快速搭建 vue3 组件库

<!-- more -->

# 利用 vite 快速搭建 vue3 组件库

## 背景

vue3 出来已经有一段时间了，刚好前端时间做了 [vue-general-components](https://xxholly32.github.io/vue-general-components/)，在想着要不也把 vue3 的做一下；

社区上有很多相关的框架 [ant-design-vue](https://github.com/vueComponent/ant-design-vue) 、[element-plus](https://github.com/element-plus/element-plus)、[elenext](https://github.com/JasKang/elenext) 等，而我对里面的技术以及先有 vue3 社区中一些框架进行了一些分析选择，并最终运用到新的项目 [vite-components-playground](https://xxholly32.github.io/vite-components-playground/) 中。

虽然看上去没什么内容已经包含了一个组件库应有的所有内容了，接下去逐个解析一下。

## 文档系统

前期有几个可以选型的点，[vue-cli](https://github.com/vuejs/vue-cli)，[vite](https://github.com/vitejs/vite)，[vitepress](https://github.com/vuejs/vitepress)；

文档是一个组件库的灵魂，文档系统为什么不借鉴主流组件库的？其实之前用 `elementui` 包括 `ant-design-vue`，都是自己内部实现的文档系统，整个文档也是用 `webpack-dev-server` 构建一下，或者自己封装一些工具库，比如 `antd-tool`，`cooking` 等，但其实很难有可提取复用的点，部分已经没落了；还有一点就是设计，大厂的设计都有点产品特色，就有点大厂的格局在那。不像 `vuepress` 这种能够一通百通的产品出现，所以并没有可借鉴的地方；简单来说，太重。

不过可惜我比较中意的 `vuepress` 只支持 `vue2`。

### vitepress

其实喜欢用 md 写文档的同学来说，感觉 `vitepress` 应该是最好的，因为之前的 [vue-general-components](https://xxholly32.github.io/vue-general-components/) 我就是用的 `vuepress`，使用起来特别顺手，但实际上社区现在对 `vitepress` 暂时没有做更多的深入，而且项目一直处于 `WIP`。

`vitepress` 的设计理念其实和 `vuepress` 完全不同，现在官方 `issues` 模版直接带上 `VitePress is still WIP, and it is not compatible with VuePress.`，还有 `readme` 里面的一句话。

> But the overall idea is that VitePress will have a drastically more minimal theming API (preferring JavaScript APIs instead of file layout conventions) and likely no plugins (all customization is done in themes).

之前 vuepress 引以为傲的`插件系统`、`默认大于配置`、主题系统的设计理念没有特别好的运作起来。

简单来说就是之前的 vuepress `config.js` 中有 `plugins`、`theme` 配置，现在都么了～～～～，说所有的功能都得写到 `Layout.vue` 里面。挣扎一番还是放弃了。官方社区还有很多周边需要维护，`vitepress` 还不算他们的首选。

> 不过 `vitepress` 确实和 `vuepress` 不同，不能说它不对，只是现在官方不急着去给他做完善的设计

其实还可以选 [vuepress-next](https://github.com/vuepress/vuepress-next) ，但也是非官方维护 `stage` 也是 `WIP`

### vue-cli 与 vite

`vite` 最大的优点就是快，如果非要和 `vue-cli` 对比的话，可能周边相对差一些，稳定性与健壮性会相对差一些。服务端 `rollup` 打包机制和我们内部的一个产品也非常类似，组内也开始有用 `vite`，so 在我研究玩 `vitepress` 不可行之后就决定采用 `vite`。

> 内部简单用了下，主要是 md 文档解析的问题，其他基本满足。

### vite 相关周边

首先介绍一下 vite 的 awesome 仓库[awesome-vite](https://github.com/vitejs/awesome-vite)

#### vite-plugin-vuedoc

vite 暂时是不支持 import md 文件的，我研究了很久，最后才在社区发现了这个项目， [vite-plugin-vuedoc](https://github.com/JasKang/vite-plugin-vuedoc)；好像也是 `element` 的使用者做的，（作者是做 [elenext](https://github.com/JasKang/elenext) 的可以支持一下），比较好的呈现了 md 文档。也可以和 `markdown-it` 做到完美融合。

code:

![](https://github.com/JasKang/vite-plugin-vuedoc/blob/master/playground/assets/md.png?raw=true)

preview:

![](https://github.com/JasKang/vite-plugin-vuedoc/blob/master/playground/assets/vue.gif?raw=true)

#### vite-ts-tailwind-starter

为了弥补 `vitepress` 相对 `vuepress` 在布局方面的欠缺，文档布局我最近采用的是今年比较火的 [tailwindcss](https://tailwindcss.com/)，这里也推荐一个简易配置的 template：[vite-ts-tailwind-starter](https://github.com/Uninen/vite-ts-tailwind-starter)；

实际在真实项目中使用 `tailwindcss` 的效果我还没有体验过（是否能够提升开发效率与质量），vue 社区现在有在用的是[Nuxt](https://nuxtjs.org/)。

虽然使用灵活，理解这块可能会比较耗时间，`tailwindcss` 的周边也很强大[awesome-tailwindcss](https://github.com/aniftyco/awesome-tailwindcss)，等这个完工了，会考虑提取一些可服用的插件或者 `template` 供项目使用吧。

### 文档部分总结

文档这块我只能找到社区内先有比较好的技术选型，如果最终一些技术框架有比较好的提升，我也会做一些替换。也接受任何反驳，但主体应该不会换了，如果不喜欢的可以 `fork` 自行修改。

## 引入 lerna

借鉴一下社区 `awesome` 库的理念，其实在我厂内部也有非官方维护的组件库（我个人把他们放到一个仓库 awesomeui 库，`ant-design` 也有官方的 [ant-design/pro-components](https://github.com/ant-design/pro-components)，采用 lerna 进行管理）。可以通过私有 npm 仓库去统计单个组件的 npm 下载次数。但我们库（类似 elementui ）如果统一下载，一是没有办法统计下载量，二是，awesomeui 库的下载量高的没办法解藕的合并到主库。

所以这次我打算用 lerna 进行管理（看了下 element-plus）也是用了 lerna。

单个 `lerna packages` 的模版

```
├── __tests__
├── lib
├── style (可选的)
├── src (可选的)
  ├── HelloWorld.vue
├── index.ts
├── package.json
├── README.md
```

值得一提的是，这里的 `README.md` 也是真正网页上对应的文档，之前用 `vuepress` 所有文档需要放到 .vuepress 文件夹下无法解藕的事情，现在可以通过 vite 简单实现了

那么这样一个组件但愿，你想挪到哪里都是 ok 的。

## 样式与图标方案

这个可能每个项目都不同，我就没有去实现，都是初步想法，但我说下思路

主题可以是一个单独的 `@xxx/theme` 包，内部有基础颜色变量，其他的变量可以别的组件库自己实现。打包可以统一去文件夹下指定目录去获取

图标方案我找了个较为通用的，[iconify](https://iconify.design/)，它集成了 100 多个开源图标库，共计 7w+ 图标，支持 vue/react 标签，使用也比较友善。当然如果是大厂有自己的库，也可以和它一起使用。

顺便安利一个图标搜索工具基于 `iconify` 的 [icones](https://icones.js.org/)，可以用于搜索（作者是 [antfu](https://github.com/antfu)，他现在是 vite 代码 `code-reviewer`，在多个开源社区项目做贡献）。如果用不了 [iconfont](https://www.iconfont.cn/) 的可以在自己公司内部搭一个，非常友好。

![](https://github.com/antfu/icones/raw/master/screenshots/2.png)

## 组件打包

依旧采用 rollup，官方只做了，[rollup-plugin-vue](https://github.com/vuejs/rollup-plugin-vue)，现在是 `6.0.0-beta.11`

打包文件没有单独写入到 `lerna/packages` 内部，而是外部统一做打包，主要原因是不想内部组件依赖过重，还有一部分原因是打包还是得依赖全局的一些库，比如样式，图标等。不用太担心过多的配置，用 nodejs 遍历一下包就可以了。

### ts(x)/js(x)

老实说 `ant-design-vue` 的 jsx 实现我研究了一段时间，学习成本有点高，作为 vue 使用者，我还是希望他们做业务代码（vue template）同时可以有时间看看源码，如果用 jsx 的话用户的心智负担还是太大了，所以这次重构我只用了 ts，没有采用 tsx 的模式，但这里我重点说下打包。

[esbuild](https://github.com/evanw/esbuild) 最近非常火，在处理 ts 方面特别的快，`vite` 内部也用了 `esbuild`，而社区的 [egiost](https://github.com/egoist) 做了一款 [rollup-plugin-esbuild](https://github.com/egoist/rollup-plugin-esbuild) 用来代替 `rollup-plugin-typescript2`, `@rollup/plugin-typescript` 和 `rollup-plugin-terser`；

同时也支持 t/jsx 格式，只需要引入我做的另一个插件 [rollup-plugin-vue-jsx](https://github.com/xxholly32/rollup-plugin-vue-jsx)

> webpack 5 没有怎么研究，好像还处于不稳定状态, `ant-d` 和 `element-plus` 用的都是 `webpack`，如果不习惯 `rollup` 的可以参考他们的库

## 测试

[vue-test-utils-next](https://github.com/vuejs/vue-test-utils-next) 和对应的 vue-jest 库写的比较详细了，这里就不展开了。

## 总结

vue 3 社区现阶段还不算健壮，很多技术可能也会改，如果后续有变动我也会持续修改，之前还有一个采用 `vitepress` 的项目现在已经停了，有兴趣也可以关注一下[vue3-general-components](https://github.com/xxholly32/vue3-general-components)；可能哪天 vitepress 支持够好了我会捡起来。

如果觉得本文好可以给我的项目[vite-components-playground](https://github.com/xxholly32/vite-components-playground)一个 star，后续我也会持续在这个项目做更新。

## 后话

截至收稿前，我的项目 [vite-components-playground](https://xxholly32.github.io/vite-components-playground/) 已经和入到 [awesome-vite templates](https://github.com/vitejs/awesome-vite#templates) 中去了。

vue3 发布也有一段时间了，各个大厂已经发布了自己的组件库，而其实 vue3 真正使用上的问题还是有很多，尤大也在说全面用起来也最好是年底。我也有担心，是否 vue3 投入到生产项目会不会过早。一个成熟的系统简答切换 vue2 到 vue3 代价可是不小的。

能看到社区上也有官方与非官方的同学在完善自身组件库、业务代码的同时，也在尽力维护周边工具版本的稳定和健壮。接触 vue 3 年多了，在社区中学到了很多，对文档的追求，框架设计的解藕，真正关注用户（开发人员），能够理解 vue 为什么有这么广大的用户群体；希望 vue 能够越来越好。

## 招聘

我们是海康威视前端团队，一个能折腾点事的团队

如果你不局限于日复一日的机械工作，希望在整个公司 make some impact

如果你是技术达人，总感觉自己缺少那么些有愿景，有意思的 idea

如果你的想法新颖独到，想把他们付诸实践，需要和同伴一起讨论落地的方案

如果你和现在的工作没得聊，那欢迎你来我们这聊聊

投递简历联系： [xiangxiao3@hikvision.com](xiangxiao3@hikvision.com)
