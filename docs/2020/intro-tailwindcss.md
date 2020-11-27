---
title: tailwindcss 简介
image: https://pic4.zhimg.com/v2-5df219089a2bbc87a3e490494ecb25cb_r.jpg
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

> 其实我在做 ui 库的时候准备替换成 lerna，但其中一个皮肤一时想不到如何解藕。

## 从一个 demo 开始

简单开发一个页面

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

引入 tailwindcss

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

实用第一是 `tailwind` 最重要的设计理念，上面的例子，我们做的时候我们需要一遍一遍的定义自己的 css classes 名称，甚至起名也会是个艰苦的事情，如果文件过大还需要移动到对应的文件夹，单独形成变量。

以前其实有项目我会定义比如 `align-content: center` ，为 `.center`，但别的项目可能定义为 `.text-center`

这个就是功能类最大的好处：

- 你不是在浪费精力去 classes 名称.
- 你的 CSS 文件停止增长
- 全局修改变得更加容易

对应 tailwind 的配置是 `@tailwind utilities;`

### 响应式设计

利用断点语法实现 @media 功能，这个操作简直逆天，以前写法都要写很多的 @media 样式，现在完全是加个前缀就可以搞定了

```html
<!-- 默认长度是16, medium screens 是32,large screens 是48 -->
<img class="w-16 md:w-32 lg:w-48" src="..." />
```

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

> 这里 base 其实就是 [normalize.css](https://github.com/necolas/normalize.css/)，以及一些其他的[默认配置](https://v1.tailwindcss.com/docs/preflight)，而 component 是空的

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

- **@tailwind**：使用 @Tailwind 指令将 Tailwind 的 base, components, utilities 和 screens 插入到 CSS 中。
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

可以简单通过配置来减少打包体积

```js
// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
};
```

### 自定义配置

TODO:

### 自定义插件

这个我觉得是我引入它到组件库的一个重要的原因，虽然我们自己有过类似的方案；但结果还是把组件的样式文件从组件库中捞出来，然后放到项目中，并实用其中的样式变量。最终还是引入到 `main.js中`，感觉实现并不是特别美观。还有一点就是，颜色变量非常多，非常不容易理解，而且大部分都不是用户希望改的，很多时候只需要修改主题色就好了。

从我们公司的脚手架出发其实就是将 `vue.config.js` 中的颜色变量提取到，`tailwind.config.js` 中，但这么提取就感觉到非常的舒服了。

TODO:

### 周边

官方的很多都要收费，比较啃爹

- [tailwindplay](https://play.tailwindcss.com/)：在线编辑器
- [tailblocks](https://mertjf.github.io/tailblocks/)：内涵大量模版
- [vue-tailwind](https://www.vue-tailwind.com/)：一个 vue tailwind 组件库
- [nuxt](https://nuxtjs.org/)：nuxt 文档官网最新版采用 tailwind 布局

其他模版和组件库可以查看[awesome-tailwind](https://github.com/aniftyco/awesome-tailwindcss)

## 缺点

如果你熟悉 css，那么你一开始实用默认的 tailwindcss 样式需要大量的查找官网 api 去对应，比如：

- 默认实用 rem，那么如果用 px 的需要考虑被 16 整除的问题
- `opacity:0;` 对应 `opacity-0`, `opacity:1;` 对应 `opacity:100;`
- `width` 和 `height` 对应的是 `w`, `h` 可以理解，`line-height` 对应的是 `leading-`
- `font-size: 1.5rem;` 对应的是 `text-2xl`，怎么看 1.5 也不能被 2 整除
- 找不到一些不是很主流的样式比如 `translateZ`

![](http://img.cankaowang.com/ck202002/0006.jpg)

我魔改过 `impress` 的项目，很多样式没办法修改（虽然也有一大部分可以调整），同时也做过 admin-template 的项目，也感受到如果所有像素都做到整改，也是需要加入大量的自定义样式。

> vscode 自带很多插件，有输入提示功能

当然最痛苦的还是每个样式要去官网找一遍 api，需要遇到和尤大类似的问题，[如何评价 Vue 的 ref 语法糖提案？](https://www.zhihu.com/question/429036806/answer/1564223482)；

## 反思

其实最早从 甚至现在的 `js` -> `ts`，`option Api` -> `compsition Api`，文档由纯撸，再引入 `markdown-loader`，其实语言的转化更多的并不是先驱者强行加入的，而是给我们带来的一种约束，从代码层面去约束使用者本身。我们所说的约定大约配置，的约定更多的是一种束缚。

![soda 1](/Blog/houhuiwuqi.jpg)

> 喜欢是放肆，爱是克制

来看一下 tailwindcss 一开始的设计理念，tailwindcss maintainer 的一篇最早 [tailwindcss 的设计理念](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)

作者有以下一些观点：

- HTML 是独立的，CSS 依赖 HTML
  - **css 需要语义化**
- CSS 是独立的，HTML 依赖 CSS
  - **一个组件做得越多，或者一个组件越具体，越难以复用**
- 以功能类组合成组件 css
  - **避免过早抽象**

TODO:
