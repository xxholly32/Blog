(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{417:function(e,r,t){"use strict";t.r(r);var a=t(5),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("blockquote",[t("p",[e._v("本文为 2019 年 6 月 8 日我在第一届滨江缤纷前端技术大会上发表的同名演讲实录。")])]),e._v(" "),t("h2",{attrs:{id:"个人介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#个人介绍"}},[e._v("#")]),e._v(" 个人介绍")]),e._v(" "),t("p",[e._v("首先作下自我介绍，我是来自海康威视的综合安防前端组的相霄 👨‍💻 🏸 🎦")]),e._v(" "),t("p",[e._v("今天给大家带来我对 vuepress 的一些分析与实战技巧。")]),e._v(" "),t("p",[e._v("本文思路参考 "),t("code",[e._v("vueconf2")]),e._v(" 的 "),t("a",{attrs:{href:"https://img.w3ctech.com/What-I-Learned-from-Maintaining-Vue-CLI.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("what-i-learn-from-maintain-vue-cli"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"/Blog/2019binfen/ana1.jpg",loading:"lazy"}})]),e._v(" "),t("blockquote",[t("p",[e._v("ppt 地址请查看 "),t("a",{attrs:{href:"https://xxholly32.github.io/what-i-learned-from-analysis-vuepress/",target:"_blank",rel:"noopener noreferrer"}},[e._v("传送门"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"介绍-vuepress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍-vuepress"}},[e._v("#")]),e._v(" 介绍 vuepress")]),e._v(" "),t("p",[e._v("vuepress 是 vue 全家桶之外的技术，就算是用 vue 全家桶的同学也不一定会知道 vuepress，我先从几个案例简单介绍一下 vuepress")]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"/Blog/2019binfen/ana2.jpg",loading:"lazy"}})]),e._v(" "),t("p",[e._v("首先是 vue 官方文档，"),t("a",{attrs:{href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue"),t("OutboundLink")],1),e._v("，"),t("a",{attrs:{href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-cli"),t("OutboundLink")],1),e._v("，"),t("a",{attrs:{href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-router"),t("OutboundLink")],1),e._v("，"),t("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress"),t("OutboundLink")],1),e._v(" 等都是用了 vuepress 编写")]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"/Blog/2019binfen/ana3.jpg",loading:"lazy"}})]),e._v(" "),t("p",[e._v("接下来是 "),t("code",[e._v("react")]),e._v(" 系的一些脚手架，"),t("a",{attrs:{href:"https://umijs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("umijs"),t("OutboundLink")],1),e._v(" 和 "),t("a",{attrs:{href:"https://dvajs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("dvajs"),t("OutboundLink")],1),e._v(" 等也是用了 vuepress")]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"/Blog/2019binfen/ana4.jpg",loading:"lazy"}})]),e._v(" "),t("p",[e._v("还有一些社区优秀的博主也会使用 vuepress，比如我个人关注的 "),t("a",{attrs:{href:"https://wubaiqing.github.io/zaobao/",target:"_blank",rel:"noopener noreferrer"}},[e._v("每日时报"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"/Blog/2019binfen/ana5.jpg",loading:"lazy"}})]),e._v(" "),t("p",[e._v("最后看一个不一样的风格的 vuepress，是我"),t("a",{attrs:{href:"http://xxholly32.github.io/Blog/",target:"_blank",rel:"noopener noreferrer"}},[e._v("个人博客"),t("OutboundLink")],1),e._v("，也是使用 vuepress 去做的")]),e._v(" "),t("p",[e._v("所以 vuepress 本质是静态网站生成器，主要用于技术文档，技术分享，个人博客等场景")]),e._v(" "),t("h2",{attrs:{id:"vuepress-帮我们解决了什么问题呢-🤔"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-帮我们解决了什么问题呢-🤔"}},[e._v("#")]),e._v(" vuepress 帮我们解决了什么问题呢 🤔")]),e._v(" "),t("p",[e._v("我个人负责公司通用 ui 库的开发工作，我在 2 年前参考了社区某外卖行业的 ui 库进行开发；而在去年这个时候由于业务调整需要对我们的 ui 库进行一波升级；顺便对我们整个框架结构进行升级；在研究了老的系统后发现里面的文档系统特别难维护，特别是一些封装的第三方库都不怎么维护了。再参考了 "),t("code",[e._v("antd")]),e._v(" 、"),t("code",[e._v("elementui")]),e._v("、 "),t("code",[e._v("iview")]),e._v(" 等一些框架以后，我最终决定把文档系统改为 vuepress ；")]),e._v(" "),t("p",[e._v("主要有一下几点：")]),e._v(" "),t("p",[e._v("1.支持 markdown 语法")]),e._v(" "),t("p",[e._v("之所以选用 vuepress，最重要的一点原因是它天然支持在 markdown 中使用 vue，在我们内部 ui 库 1.0 的框架中文档也是用 markdown 写的，这也使我们 ui 升级在文档这块不需要特别大的改动。反而在文档代码中还可以加入 vuepress 默认的很多新语法。")]),e._v(" "),t("p",[e._v("2.提升开发效率，标准化框架")]),e._v(" "),t("p",[e._v("vuepress 的配置非常精简，几乎只需要配置一个 config.js 而以前配置还需要配置 webpack 等很多复杂的 build 文件；在标准化方面也支持 ie11 等主流浏览器；从 0~1 快速搭建项目非常方便，甚至我们内部的其他一些脚手架也基本都是用 vuepress 写的")]),e._v(" "),t("p",[e._v("3.部署便捷")]),e._v(" "),t("p",[e._v("部署适用于内部的 gitlab 和外部的 github，而且命令也非常简单只需 "),t("code",[e._v("vuepress run build")])]),e._v(" "),t("p",[e._v("4-5.约定式路由以及统一页面风格")]),e._v(" "),t("p",[e._v("这 2 点对于开发人员来说非常好，开发者不需要关注路由以及页面样式；让开发者花更多的时间关注在文档编写上。")]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"/Blog/2019binfen/ana6.jpg",loading:"lazy"}})]),e._v(" "),t("p",[e._v("还有一个个人的原因 vuepress 支持 emoji，这个在枯燥代码文档编写的同时，增加了情感化元素在里面，让内容更加生动")]),e._v(" "),t("h2",{attrs:{id:"vuepress-在其他场景的应用-👷‍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-在其他场景的应用-👷‍"}},[e._v("#")]),e._v(" Vuepress 在其他场景的应用 👷‍")]),e._v(" "),t("p",[e._v("当然除了技术文档上的贡献是巨大的，它能做的还有更多")]),e._v(" "),t("h3",{attrs:{id:"vuepress-plugin-yuque"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-yuque"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/ulivz/vuepress-plugin-yuque",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-plugin-yuque"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("先说一下公司内部的痛苦，我们是无法用语雀写文档的，vuepress-plugin-yuque 可以实现将外部的文档数据转化为本地的文档；所以只要你愿意，未来你可以将任意数据源转化成 vuepress；那这有什么好处呢，我们在公司内部有很多 oa 的数据，它的展现方式并不是非常直观，或者我们有一些业务扩展类的需求没法直接在 oa 上呈现。但我们可以拿到它的数据，在 vuepress 做展现，我们有一些定制类的项目每周有很多个分配个不同的人；我们将数据拿到用日历的方式展现在 vuepress 中，就可以直观的看到每个人每天有什么任务了。")]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"/Blog/2019binfen/ana7.jpg",loading:"lazy"}})]),e._v(" "),t("h3",{attrs:{id:"vuepress-plugin-gitalk-maker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-gitalk-maker"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://xxholly32.github.io/vuepress-plugin-gitalk-maker/guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-plugin-gitalk-maker"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("上面的例子，数据还是纯静态的；来说一个基于 token 认证的动态数据的例子，个人编写的插件 vuepress-pligin-gitalk-maker；gitalk 是基于 github 的一个 issues 展现功能，放在 vuepress 中，支持每个文档一个 issues；使用这个插件的好处是，在编写文档的时候我们会发现，文档写的再好还是会有问，而且一些问题的说明并不仅仅需要写在文档中，而是在评论中可以体现；我个人也会经常在 github issues 中寻找自己要的答案，这个插件就提供这种可能性，让评论去驱动大家提 issues，而且好的回复通常都会得到高的点赞数，让排名靠前（这个暂时还没支持）。")]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"/Blog/2019binfen/ana8.jpg",loading:"lazy"}})]),e._v(" "),t("p",[e._v("这个插件还有 gitlab 版本这个我们在公司内部做了开源，外部还有一个 "),t("a",{attrs:{href:"https://github.com/meteorlxy/vssue",target:"_blank",rel:"noopener noreferrer"}},[e._v("vssue"),t("OutboundLink")],1),e._v(" 更强大，支持多个社区类 issues；这个就让 vuepress 不仅仅是个静态文档了，更像是一个论坛了。")]),e._v(" "),t("p",[e._v("基于这个功能，和 vuepress 强大的博客系统，我们在内部也做了很多的项目。公司羽毛球官网，组内团建，照片墙，新人成长计划等等一系列网站。而在下面都加了评论功能，能收到不少小伙伴们有爱的回复。")]),e._v(" "),t("h2",{attrs:{id:"vuepress-优秀设计理念-🌈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-优秀设计理念-🌈"}},[e._v("#")]),e._v(" Vuepress 优秀设计理念 🌈")]),e._v(" "),t("p",[e._v("讲了一些实战的例子，我们回顾分析一下 vuepress 的一些优秀设计理念；这边先分享一个个人对 vuepress 的源码分析，vuepress-analysis；理念来自于 vue-cli-analysis")]),e._v(" "),t("h3",{attrs:{id:"markdown-it-chain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#markdown-it-chain"}},[e._v("#")]),e._v(" markdown-it-chain")]),e._v(" "),t("p",[e._v("如果了解 "),t("a",{attrs:{href:"https://github.com/neutrinojs/webpack-chain",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack-chain"),t("OutboundLink")],1),e._v(" 的同学们应该可以知道这个是用来干什么的，"),t("a",{attrs:{href:"https://github.com/ulivz/markdown-it-chain",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown-it-chain"),t("OutboundLink")],1),e._v(" 是支持链式调用 markdown-it 的文档解析工具。刚才又说道 vuepress 是支持 markdown 语法的，而 markdown-it-chain 就是 vuepress 解析 markdown 的灵魂。")]),e._v(" "),t("p",[e._v("我们看一组官方代码")]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"/Blog/2019binfen/ana9.jpg",loading:"lazy"}})]),e._v(" "),t("p",[e._v("以上代码就实现了简单的目录和锚点功能，我之前在技术选型中有做过一些对比，有些框架的目录和锚点功能单独封装成插件的形式，虽然也是解耦但对于这种再剥离成语言解析层面的解耦，会用起来更舒服。其实 markdown-it-chain 不仅仅可以使用于 vuepress，只要是有 markdown 文档解析的软件都是可以适用的，现在 star 人数还不是很多，大家还不操作起来。")]),e._v(" "),t("h3",{attrs:{id:"monorepo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monorepo"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/babel/babel/blob/master/doc/design/monorepo.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Monorepo"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("这个也是老生常谈的话题，monorepo 是一种项目代码管理的一种方式，指的是在一个项目（repo）中管理多个某块的包，不同于常见的一个模块一个（repo）；这里蹭一波 vue3 的热度，vue-cli 和 vuepress 都是 monorepo 的实现的，最新 vue3 的 next 也是基于 monorepo 管理，大家使用的时候可以单独引入比如 test，runtime 的一些库。")]),e._v(" "),t("p",[e._v("在 vuepress 中本身的 core 实现了插件化，内部有很多默认的插件，比如 back-to-top，项目不需要是默认不使用的，还有比如 search 是默认使用的。vuepress1.x 将主题也做成了插件化。做社区最重要的是不做什么，而 vuepress 的 monorepo 的一些插件基本都是通用的功能，插件化和 monorepo 的设计是值得我们去学习的。")]),e._v(" "),t("p",[e._v("monorepo 最早是 babel 在使用，也沉淀了一些对它的理解，这个在 "),t("a",{attrs:{href:"https://github.com/babel/babel/blob/master/doc/design/monorepo.md#why-is-babel-a-monorepo",target:"_blank",rel:"noopener noreferrer"}},[e._v("babel 官网"),t("OutboundLink")],1),e._v(" 可以看到")]),e._v(" "),t("ul",[t("li",[e._v("Single lint, build, test and release process.")]),e._v(" "),t("li",[e._v("Easy to coordinate changes across modules.")]),e._v(" "),t("li",[e._v("Single place to report issues.")]),e._v(" "),t("li",[e._v("Easier to setup a development environment.")]),e._v(" "),t("li",[e._v("Tests across modules are run together which finds bugs that touch multiple modules more easily.")])]),e._v(" "),t("h3",{attrs:{id:"约定大于配置-合理的优先级管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#约定大于配置-合理的优先级管理"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://v1.vuepress.vuejs.org/miscellaneous/design-concepts.html#convention-over-configuration",target:"_blank",rel:"noopener noreferrer"}},[e._v("约定大于配置，合理的优先级管理"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("这些也是体现在插件的默认配置和设计中，特别是文档目录结构的设计以及主题目录的设计。往往好的设计都是少配置甚至 0 配置的。")]),e._v(" "),t("p",[e._v("我们从 vuepress1.x 的主题系统分析一下这个设计理念。说这个理念之前我先说一个个人非常喜欢玩的游戏炉石传说，炉石传说是 30 张卡 2 人对战的回合制游戏。在炉石区有个说法就是，一套卡组（30 张）只要改一张就是我的卡组了。这个理念就刚好来说明 vuepress 的主题系统在默认的某个文件夹下面，默认的皮肤都在 theme-default 下，开发人员不需要修改所有的皮肤组件，只需要针对自己想要改的元素适当的修改某个指定的元素就可以了，比如我们公司内部的 ui 库只改一个首页"),t("code",[e._v("Home.vue")]),e._v("也可以是一个 vuepress 的自定义皮肤，而实现这个原理就是采用 webpack 的 alias 功能这么简单。")]),e._v(" "),t("h2",{attrs:{id:"社区优秀实践-🛰"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#社区优秀实践-🛰"}},[e._v("#")]),e._v(" 社区优秀实践 🛰")]),e._v(" "),t("h3",{attrs:{id:"vuepress-community"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-community"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://vuepress.github.io/zh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-community"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("社区维护的 vuepress 生态系统，由@Shigma 和@meteorlxy 维护，上面介绍的 vuepress 项目比较实用而且有很好的文档说明")]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"/Blog/2019binfen/ana10.jpg",loading:"lazy"}})]),e._v(" "),t("h3",{attrs:{id:"vuepress-plugin-cat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-cat"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/QiShaoXuan/vuepress-plugin-cat",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-plugin-cat"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("vuepress 在线撸猫插件，作者也是"),t("a",{attrs:{href:"https://github.com/QiShaoXuan/css_tricks",target:"_blank",rel:"noopener noreferrer"}},[e._v("css tricks"),t("OutboundLink")],1),e._v("的作者@QiShaoXuan，里面有非常多的优秀实践，撸猫只是其中的一个功能点；我们组有部分同事引入了，所以给大家推荐一下。")]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"/Blog/2019binfen/ana11.jpg",loading:"lazy"}})]),e._v(" "),t("h3",{attrs:{id:"vuepress-theme-default-prefers-color-scheme"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-theme-default-prefers-color-scheme"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://tolking.github.io/vuepress-theme-default-prefers-color-scheme/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-theme-default-prefers-color-scheme"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("基于 css 语法 "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",target:"_blank",rel:"noopener noreferrer"}},[e._v("prefers-color-scheme"),t("OutboundLink")],1),e._v(" 做的一个主题插件，可以配置时段让你的 vuepress 拥有半天和黑夜的功能。我个人是在做 vuepress 的主题切换的时候发现的，因为哦们内部 ui 库需要支持切换皮肤，现在还没有特别好的方案。其中一种是和 elementui 一样直接全局替换 css 的方式，但做法还是感觉比较 low。如果有好的建议欢迎给我留言。")]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"/Blog/2019binfen/ana12.jpg",loading:"lazy"}})]),e._v(" "),t("p",[e._v("这个作者也是我博客的主题的开发作者，@tolking，有关主题可以查看 "),t("a",{attrs:{href:"https://github.com/tolking/vuepress-theme-ououe",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-theme-ououe"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("VuePress is much more than that. —— ULIVZ")]),e._v(" "),t("p",[e._v("😊")]),e._v(" "),t("h2",{attrs:{id:"扩展阅读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[e._v("#")]),e._v(" 扩展阅读")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=lIv1ItUzktc",target:"_blank",rel:"noopener noreferrer"}},[e._v("VueNYC - Intro to VuePress 0.x - Evan You"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://ulivz.com/2019/06/09/intro-to-vuepress-1-x/#intro-to-vuepress-1-x",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vueconf3 - Intro to VuePress 1.x - ULIVZ"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("更多的源码分析请查看 "),t("a",{attrs:{href:"https://xxholly32.github.io/vuepress-analysis/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuepress-analysis"),t("OutboundLink")],1),e._v(" 😊")])])}),[],!1,null,null,null);r.default=s.exports}}]);