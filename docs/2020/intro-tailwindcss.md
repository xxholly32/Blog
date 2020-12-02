---
title: tailwindcss 简介
image: https://camo.githubusercontent.com/53b9876cd8e38928387c6824043b0e2772b15b1bfdb7f42d0864216abbf3dfe8/68747470733a2f2f7265666163746f72696e6775692e6e7963332e63646e2e6469676974616c6f6365616e7370616365732e636f6d2f7461696c77696e642d6c6f676f2e737667
date: 2020-11-26
tags:
  - 前端
  - css
---

# tailwindcss 简介

tailwindcss 简介

## 背景

最近处于 vue3 刚出来的风口，已经暂时不支持 ie11，最新的 vite 工具也已经开始用 native ES Module imports；而年底 ie11 也到了不支持的 [browselist](https://github.com/browserslist/browserslist#best-practices) 的状态；那么未来引领 css 的框架应该是什么呢？

一个偶然的机会，我看到一个视频，说的是一个不同的 CSS 框架 Tailwind.css，它让一切都变得更美好。也许是时候去试试了。

> 其实我在做 ui 库升级到 vue3 的时候准备替换成 lerna，但其中一个皮肤一时想不到如何解藕。

## 从一个 demo 开始了解如何使用 tailwindcss

简单开发一个模块

![tailwindcss-demo](/Blog/tailwindcss-demo.png)

html/css 实现

```html
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img
      class="chat-notification-logo"
      src="/img/logo.svg"
      alt="ChitChat Logo"
    />
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
```

用 tailwindcss 实现，首先引入 tailwindcss

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

并修改样式代码

```html
<div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
  </div>
  <div class="ml-6 pt-1">
    <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
    <p class="text-base text-gray-600 leading-normal">
      You have a new message!
    </p>
  </div>
</div>
```

冗长的代码瞬间变得精简了起来

## 核心理念

### 功能类（utility-first）

功能类优先是 `tailwind` 最重要的设计理念，上面的例子，我们做的时候我们需要一遍一遍的定义自己的 css classes 名称，甚至起名也会是个艰苦的事情，如果文件过大还需要移动到对应的文件夹，单独形成变量。

以前其实有项目我会定义比如 `align-content: center` ，为 `.center`，但别的项目可能定义为 `.text-center`

这个就是功能类最大的好处：

- 你不是在浪费精力去 classes 名称.
- 你的 CSS 文件停止增长
- 全局修改变得更加容易

对应 tailwind 的配置是 `@tailwind utilities;`

> 顺便提下这里 `@tailwind base` 其实就是 [normalize.css](https://github.com/necolas/normalize.css/)，以及一些其他的[默认配置](https://v1.tailwindcss.com/docs/preflight)，而 `@tailwind component` 是 tailwind 组件，我理解应该是空的（未考证）

### 响应式设计

利用断点语法实现 @media 功能，这个操作简直逆天，以前写法都要写很多的 @media 样式，现在完全是加个前缀就可以搞定了

```html
<!-- 默认长度是16, medium screens 是32,large screens 是48 -->
<img class="w-16 md:w-32 lg:w-48" src="..." />
```

> w-16 对应的是 width: 4rem; 32 对应的是 8rem...

而响应式前缀可以默认可以和大部分功能类一起使用

### 伪类

支持伪类的前缀标签，以及可以和响应式一起使用

```html
<button
  class="bg-orange-500 hover:bg-orange-600 sm:bg-green-500 sm:hover:bg-green-600"
>
  Hover me
</button>
```

### 自定义样式

由于 tailwind 的是低层次框架，现有的 tailwindcss 默认的 utility，base，component 不足以满足所有的场景；

而使用 @layer 指令，Tailwind 将自动将这些样式移动到 `@tailwind base`， `@tailwind utility`，`@tailwind component` 的位置

比如我们要做一个按钮组件，提炼对应的样式：

```css
@layer components {
  .btn-blue {
    @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
}
```

### Tailwind 语法糖

先写个简单的例子：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl;
  }
}

@layer components {
  .btn {
    @apply bg-gray-500 text-white font-bold;
    @apply py-2 px-4 rounded;
    font-family: Georgia, Cambria, "Times New Roman", Times, serif;
    background-color: theme("colors.blue-500");
  }
}

@layer utilities {
  @variants hover, focus {
    .filter-none {
      filter: none;
    }
  }
  @responsive {
    .bg-opacity-none {
      @apply opacity-0;
    }
  }
}
```

- **@tailwind**：使用 @Tailwind 指令将 Tailwind 的 base, components, utilities 插入到 CSS 中。
- **@apply**：使用 @apply 将任何样式内联到您自己的自定义 CSS 中。
- **@layer**：使用 @layer 指令告诉 Tailwind 属于一组自定义样式的 “块”。在 base, components, utilities 有效。
- **@variants**：您可以通过在 @variant 指令中包装它们的定义来生成响应式、hover, focus, active 和其他伪类。
- **@responsive**：通过将 class 的定义包装在 @responsive 指令中，您可以生成自己 class 的响应式。
- **theme()**：使用 theme() 函数和 . 访问你的 Tailwind 配置值。

## 其他优势

### 按需配置打包

全量的 tailwindcss2.0 的包是 3020.7kB，1.8 是 2413.4KB；但如果你没用到的 tailwindcss 样式，是不是压缩大你的文件中去的， Tailwind 的 [purge](https://purgecss.com/) 选项来进行 tree-shake 来减少你最终构建项目的大小；

PurgeCSS 会查找 HTML 中的 classes。它不会尝试解析你的 HTML，寻找类属性或者动态执行你的 JavaScript，它只是在整个文件中寻找任何与这个正则表达式匹配的字符串；

```js
/[^<>"'`\s]\*[^<>"'`\s:]/g`
```

> 不要使用 btn-{type} 这样的样式来定义样式，避免出现样式丢失情况

扫描文件也可以配置

```js
// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
};
```

### 自定义配置

想要自定义配置，需要先了解[tailwindcss 的默认配置](https://github.com/tailwindlabs/tailwindcss/blob/v1/stubs/defaultConfig.stub.js)

在 `tailwind.config.js` 中可以扩展自己的自定义配置项

比如如下配置：

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
    },
    extend: {
      colors: {
        cyan: "#9cdbff",
      },
      spacing: {
        "96": "24rem",
        "128": "32rem",
      },
    },
  },
};
```

### 自定义插件

这个我觉得是我引入它到组件库的一个重要的原因，虽然我们自己有过类似的方案；但结果还是把组件的样式文件从组件库中捞出来，然后放到项目中，并实用其中的样式变量。最终还是引入到 `main.js中`，感觉实现并不是特别美观。还有一点就是，颜色变量非常多，非常不容易理解，而且大部分都不是用户希望改的，很多时候只需要修改主题色就好了。

但其实不管放到哪个 js 或者 css 文件，或者是 vue.config.js 中都不是非常解藕的方案，从我们公司的脚手架出发其实就是将 `vue.config.js` 中的颜色变量提取到，`tailwind.config.js` 中。

所以我希望的我们作出的通用的样式可以提炼出插件，我将这个想法提交到：[vite-components-playgrount commit](https://github.com/xxholly32/vite-components-playground/commit/ca12693221b28e09fc0a117cab34c0a5d4750614)

这里并不是传统意义的 `css-in-js`，更多的是 `css-in-conifg`。在设计上有更多的约束。

## Tailwindcss 缺点

如果你熟悉 css，那么你一开始实用默认的 tailwindcss 样式需要大量的查找官网 api 去对应，比如：

- 默认实用 rem，那么如果用 px 的需要考虑被 16 整除的问题
- `opacity:0;` 对应 `opacity-0`, `opacity:1;` 对应 `opacity:100;`
- `width` 和 `height` 对应的是 `w`, `h` 可以理解，`line-height` 对应的是 `leading-`
- `font-size: 1.5rem;` 对应的是 `text-2xl`，怎么看 1.5 也不能被 2 整除
- 编写插件也要记住默认配置，否则需要自己去找。
- 找不到一些不是很主流的样式比如 `translateZ`

![](http://img.cankaowang.com/ck202002/0006.jpg)

我魔改过 [impress](https://xxholly32.github.io/impress-tailwindcss-demo) 的项目，很多样式没办法修改（虽然也有一大部分可以调整），同时也做过 admin-template 的项目，也感受到如果所有像素都做到整改，也是需要加入大量的自定义样式。

> vscode 自带很多插件，有输入提示功能

当然最痛苦的还是每个样式要去官网找一遍 api，需要遇到和尤大类似的问题，[如何评价 Vue 的 ref 语法糖提案？](https://www.zhihu.com/question/429036806/answer/1564223482)；

### 周边

- [tailwindplay](https://play.tailwindcss.com/)：在线编辑器
- [tailblocks](https://mertjf.github.io/tailblocks/)：内涵大量模版
- [vue-tailwind](https://www.vue-tailwind.com/)：一个 vue tailwind 组件库
- [nuxt](https://nuxtjs.org/)：nuxt 文档官网最新版采用 tailwind 布局

> 官方的很多模版都要收费

其他模版和组件库可以查看[awesome-tailwindcss](https://github.com/aniftyco/awesome-tailwindcss)

学习 tailwindcss 可以查看我翻译的 [tailwind-learning](https://xxholly32.github.io/tailwind-learning/#/doc/Intro)，基本是官网的翻译（现在还是 1.x 的，后续会改成 2.x 的）。以及我自己做的 template 项目 [elementui-tailwind-admin-template](https://github.com/xxholly32/elementui-tailwind-admin-template)

## 反思

其实最早从 甚至现在的 `js` -> `ts`，`option Api` -> `compsition Api`，文档由纯撸，再引入 `markdown-loader`，其实语言的转化更多的并不是先驱者强行加入的，而是给我们带来的一种约束，从代码层面去约束使用者本身。我们所说的约定大约配置，的约定更多的是一种束缚。

![后会无期](/Blog/houhuiwuqi.jpg)

> 喜欢是放肆，爱是克制

来看一下 tailwindcss 一开始的设计理念，tailwindcss maintainer 的一篇最早 [tailwindcss 的设计理念](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)

实际工作中，面临的两难境地：

- HTML 是独立的，CSS 依赖 HTML，**css 语义化**：类似 `btn btn-primary`，但会出现提前优化，一个组件做得越多，或者一个组件越具体，越难以复用。
- CSS 是独立的，HTML 依赖 CSS，CSS 可以方便地复用，HTML 不能方便地调整样式：类似 `text2xl`。

作者的选择：**内容中立组件 + 功能类（utility classes），并且功能类优先**。

核心代码：

```css
@tailwind components;
@tailwind utilities;
```

### 提炼思路

如果是组件，那基础组件的样式，比如主题色，基础色值，可以引入到`功能类`中，而组件样式可以加入到`内容组件`中去。

如果是项目，那么一般只需要关注功能类，提取主题色，基础色值，引入到`功能类`中。

> 这里有个原则直到一个样式出现 3 次的时候，再考虑抽象成组件或功能类，而非像 BEM 等方法论所做的那样，一开始就提取样式。

提取的内容可以利用插件的方式供三方使用，而不是从库中捞取对应的样式变量文件，这从某种程度也是一种开发约束的方式。

## Tailwind css 2.0

1.0 之后的 18 个月，tailwind css 2.0 在 2020 年 11 月 18 日发布了，以下是更新热点：

- 全新的调色板，比 1 多了 1 倍多以上的色值选择
- 支持暗色模式，这里不是指的换肤，而是支持 [prefers-color-scheme](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme)
- 响应式增加 `2xl`， 最小支持宽度为 `1536px`
- 友好的 form 样式插件[tailwindcss-forms](https://github.com/tailwindlabs/tailwindcss-forms)
- 为每个 `font-size` 提供对应的 `line-heights` 配置
- 扩充了 间距，文字大小，透明度 等一些功能类的默认样式范围
- `@apply` 用在所有语法上，比如类似使用 `@apply hover:bg-black` 的语法
- 可以默认配置 `transition` 的动画时间或者效果

值得一提的是 tailwindcss 2.0 采用的是 PostCss8，如果老的用户需要查看[升级文档](https://tailwindcss.com/docs/installation)

> vite 我看了下是支持的，但 vue-cli，暂时还未加入 PostCss8，需要等到 vue-cli5： [Plan for Vue CLI v5](https://github.com/vuejs/vue-cli/issues/6064#issuecomment-733530870)

> 更多 tailwindcss2 内容可以参考 [tailwindcss-v2](https://blog.tailwindcss.com/tailwindcss-v2)

## 总结

tailwindcss 是一个低 level， 可定制化的 CSS 框架；它的最大特点是功能类（utility classes）优先。同时它有着强大的文档，插件和生态系统。基于 tailwindcss 的能力与约束，你可以开发出自己的组件或者页面样式。

tailwind 2.0 已正式发布，快来使用吧。

## 相关文献

- [如何评价 CSS 框架 TailwindCSS？](https://www.zhihu.com/question/337939566/answer/1523063814)
- [css-utility-classes-and-separation-of-concerns](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)
