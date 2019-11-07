---
title: what-i-learn-from-analysis-vuepress
display: home

# image: https://user-images.githubusercontent.com/6063358/67394223-681c4380-f5d6-11e9-92b6-a9463b1ce81a.png

image: /Blog/seeconf2.jpeg
date: 2019-10-26
tags:
  - vuepress
  - analysis
---

2019 秋滨江阿里园区

> 本文为 2019 年 6 月 8 日我在第一届滨江缤纷前端技术大会上发表的同名演讲实录。

## 个人介绍

首先作下自我介绍，我是来自海康威视的综合安防前端组的相霄，今天给大家带来我对 `vuepress` 的一些分析与实战技巧。

本文思路参考 vueconf2 的 what-i-learn-from-maintain-vue-cli

## 介绍 vuepress

`vuepress` 是 `vue` 全家桶之外的技术，就算是用 `vue` 全家桶的同学也不一定会知道 `vuepress`，我们先从几个案例简单介绍一下 `vuepress`

首先是 vue 官方文档，vue，vue-cli，vuepress，vue-i18n 等都是用了`vuepress`

接下来是 react 系的一些脚手架，umijs 和 dvajs 等也是用了 `vuepress`

还有一些社区优秀的博主也会使用 `vuepress`，比如我个人关注的每日时报

最后看一个不一样的风格的 `vuepress`，是我个人的博客，也是使用 `vuepress` 去做的

所以 vuepress 是静态网站生成器，用于技术文档，技术分享，个人博客等场景

## vuepress 帮我们解决了什么问题呢

我个人负责公司通用 ui 库的开发工作，我在 2 年前参考了社区某外卖行业的 ui 库进行开发；而在去年这个时候由于业务调整需要对我们的 ui 库进行一波升级；顺便对我们整个框架结构进行升级；在研究了老的系统后发现里面的文档系统特别难维护，特别是一些封装的第三方库都不怎么维护了。再参考了 antd，iview 等一些框架以后，我最终决定把文档系统改为 vuepress；

主要有一下几点：

1.支持 markdown 语法

之所以选用 vuepress，最重要的一点原因是它天然支持在 markdown 中使用 vue，在我们内部 ui 库 1.0 的框架中文档也是用 markdown 写的，这也使我们 ui 升级在文档这块不需要特别大的改动。反而在文档代码中还可以加入 vuepress 默认的很多新语法。

2.提升开发效率，标准化框架

vuepress 的配置非常精简，几乎只需要配置一个 config.js 而以前配置还需要配置 webpack 等很多复杂的 build 文件；在标准化方面也支持 ie11 等主流浏览器；从 0~1 快速搭建项目非常方便，甚至我们内部的其他一些脚手架也基本都是用 vuepress 写的

3.部署便捷

部署适用于内部的 gitlab 和外部的 github，而且命令也非常简单只需 `vuepress run build`

4-5.约定式路由以及统一页面风格

这 2 点对于开发人员来说非常好，开发者不需要关注路由以及页面样式；让开发者花更多的时间关注在文档编写上。

还有一个个人的原因 vuepress 支持 emoji，这个在枯燥代码文档编写的同时，增加了情感化元素在里面，让内容更加生动

## vuepress 在其他场景的应用

当然除了技术文档上的贡献是巨大的，它能做的还有更多

### vuepress-plugin-yuque

先说一下公司内部的痛苦，我们是无法用语雀写文档的，vuepress-plugin-yuque 可以实现将外部的文档数据转化为本地的文档；所以只要你愿意，未来你可以将任意数据源转化成 vuepress；那这有什么好处呢，我们在公司内部有很多 oa 的数据，它的展现方式并不是非常直观，或者我们有一些业务扩展类的需求没法直接在 oa 上呈现。但我们可以拿到它的数据，在 vuepress 做展现，我们有一些定制类的项目每周有很多个分配个不同的人；我们将数据拿到用日历的方式展现在 vuepress 中，就可以直观的看到每个人每天有什么任务了。

### vuepress-plugin-gitalk-maker

上面的例子，数据还是纯静态的；来说一个基于 token 认证的动态数据的例子，个人编写的插件 vuepress-pligin-gitalk-maker；gitalk 是基于 github 的一个 issues 展现功能，放在 vuepress 中，支持每个文档一个 issues；使用这个插件的好处是，在编写文档的时候我们会发现，文档写的再好还是会有问，而且一些问题的说明并不仅仅需要写在文档中，而是在评论中可以体现；我个人也会经常在 github issues 中寻找自己要的答案，这个插件就提供这种可能性，让评论去驱动大家提 issues，而且好的回复通常都会得到高的点赞数，让排名靠前（这个暂时还没支持）。

这个插件还有 gitlab 版本这个我们在公司内部做了开源，外部还有一个 vssue 更强大，支持多个社区类 issues；这个就让 vuepress 不仅仅是个静态文档了，更像是一个论坛了。

基于这个功能，和 vuepress 强大的博客系统，我们在内部也做了很多的项目。公司羽毛球官网，组内团建，照片墙，新人成长计划等等一系列网站。而在下面都加了评论功能，能收到不少小伙伴们有爱的回复

## vuepress 的优秀设计理念

讲了一些实战的例子，我们回顾分析一下 vuepress 的一些优秀设计理念；这边先分享一个个人对 vuepress 的源码分析，vuepress-analysis；理念来自于 vue-cli-analysis

### markdown-it-chain

如果了解 webpack-chain 的同学们应该可以知道这个是用来干什么的，markdown-it-chain 是支持链式调用 markdown-it 的文档解析工具。刚才又说道 vuepress 是支持 markdown 语法的，而 markdown-it-chain 就是 vuepress 解析 markdown 的灵魂。

我们看一组官方代码

以上代码就实现了简单的目录和锚点功能，我之前在技术选型中有做过一些对比，有些框架的目录和锚点功能单独封装成插件的形式，虽然也是解耦但对于这种再剥离成语言解析层面的解耦，会用起来更舒服。其实 markdown-it-chain 不仅仅可以使用于 vuepress，只要是有 markdown 文档解析的软件都是可以适用的，现在 star 人数还不是很多，大家还不操作起来。

### monorepo

这个也是老生常谈的话题，monorepo 是一种项目代码管理的一种方式，指的是在一个项目（repo）中管理多个某块的包，不同于常见的一个模块一个（repo）；这里蹭一波 vue3 的热度，vue-cli 和 vuepress 都是 monorepo 的实现的，最新 vue3 的 next 也是基于 monorepo 管理，大家使用的时候可以单独引入比如 test，runtime 的一些库。

在 vuepress 中本身的 core 实现了插件化，内部有很多默认的插件，比如 back-to-top，项目不需要是默认不使用的，还有比如 search 是默认使用的。vuepress1.x 将主题也做成了插件化。做社区最重要的是不做什么，而 vuepress 的 monorepo 的一些插件基本都是通用的功能，插件化和 monorepo 的设计是值得我们去学习的。

monorepo 最早是 babel 在使用，也沉淀了一些对它的理解，这个在 [babel 官网](https://github.com/babel/babel/blob/master/doc/design/monorepo.md#why-is-babel-a-monorepo) 可以看到

- Single lint, build, test and release process.
- Easy to coordinate changes across modules.
- Single place to report issues.
- Easier to setup a development environment.
- Tests across modules are run together which finds bugs that touch multiple modules more easily.

### 约定大于配置，合理的优先级管理

这些也是体现在插件的默认配置和设计中，特别是文档目录结构的设计以及主题目录的设计。往往好的设计都是少配置甚至 0 配置的。

我们从 vuepress1.x 的主题系统分析一下这个设计理念。
