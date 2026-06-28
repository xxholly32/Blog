# vessel-vite 最佳实践

## 背景

组内使用 vue 3 也有一段时间了，在 web 组件库逐渐完善的情况下，我们也已孵化出脚手架 vessel-vite-lite，以及典型页面 vessel-vite-template，还有移动端的框架 vessel-h5-vite-lite。

不像老版本的  vessel，有个明确的文档，我可能经常会调整脚手架；而且，之前我也出过 2 篇，最佳实践。但这次可能不太一样一些，这次是真正项目有落地的一次最佳实践。以及在开发中可能会遇到的一些问题。

> 最佳实践可能会一直更新，所以其实在做在线文档可能没有特别大的意义。

## README.md

### 开发阶段

我个人建议是，开发的时候将 README.md 写入一些内容，比如：

- 联调环境
- 交互视觉地址及负责人
- 研发负责人
- ...

### 项目末期

再补充一些内容；由于这个项目可能后续是别人接手，所以需要将一些内容补充一下。

- 安装与启动
- 一些项目开发的注意事项
  - 比如我们移动端，不像web端有菜单，所以我会要求研发展示一个全量的菜单，方便后续接手的同事理解。
  - 比如这个项目，所适配的硬件，或者分辨率等
  - 项目的一些在线文档~

## package.json

### 开发阶段

我个人建议是，如果是重新开发，或者项目有大功能迭代的时候，在初期整理一下 package.json 文件的配置。

因为很多人在做的时候没有养成移除库的习惯，比如某个功能删了，但其实库还在 package.json 中。这块其实可以全局搜一下，然后移除。（需要有一定框架经验，如果没有的话可以请教资历老的同事）

更新工具依赖，就如果你不更新的话，可能会跟不上时代，这里我推荐使用的是 npm-check-updates 工具。

```bash
npm install -g npm-check
npm-check -u
```

### 项目末期

+ 是否有 .npmrc 文件
+ 是否只有一个 lock 文件；如果存在多个 lock 文件的话，接手的同时不清楚要装哪个；个人建议后续的都是用 pnpm
+ 看下 package.json 文件，是否有多余的依赖，或者不必要的 script

### 接手项目

我们可能会从零接手一个项目，那可能需要看下，这个项目的 lock 文件是用什么的，这里我推荐全局安装 [ni](https://github.com/antfu-collective/ni) ，它会根据你的 lock 文件，自动安装依赖。

那么我们只需要 

```bash
## 安装依赖
ni

## 启动项目
ni dev
```

## vscode 配置

这块我是基于 [vitesse 的配置](https://github.com/antfu-collective/vitesse/blob/main/.vscode/extensions.json)，魔改的，具体参考 vessel 配置；这里的好处我就不说了，大家自己可以看下配置和作用。

这里要提到的一点是这样的，就是我们项目的外部的 .gitignore 文件，会包含 .vscode 文件夹，我们需要在外面把它移除，否则会出现上传不了的情况。

> 之前好像有说，vscode 的配置文件，是二进制文件不能上传，如果有问题请单独找我下。

## 代码格式化

现在统一用的是 eslint，和前面的插件配合使用，然后用的是 @antfu/eslint-config 配置。当然也可以自己做一些全局的配置。vessel 的配置

> 至于为什么不用 prettier，可以看这篇文章 [为什么我不使用 Prettier](https://antfu.me/posts/why-not-prettier-zh)

### 项目初期与末期

由于我设置了 vscode 的 eslint 插件，所以每次保存的时候，都会自动格式化代码。但这样其实对代码提交可能不是很有利。所以我个人建议是在项目初期和末期，都执行一下 eslint 的命令。统一提交一下代码格式化。

> 我个人不太想严控说所有的 lint 报错必须要消除。如果有能力的可以钻下牛角尖。

## 代理 与 环境变量

### 代理

之前我们用的都是 easy-proxy，虽然这个工具我以后不维护且现在也没什么问题，但我还是建议大家可以用 vite 原生的能力，来配置代理。

> 以前为什么有 easy-proxy 这个工具，是因为 vue-cli 修改 vue.config.js 文件，需要重启项目，而 vite 修改 vite.config.ts 文件，不需要重启项目。

``` ts
// vite.config.ts
export default defineConfig({
  server: {
    proxy: {
      // 需要本地配置代理的.env.local 文件，https://cn.vitejs.dev/guide/env-and-mode#env-files
      '^/api/': {
        target: env.VITE_APP_PROXY_TARGET,
        changeOrigin: true,
        secure: false,
        headers: {
          Referer: env.VITE_APP_PROXY_TARGET,
          Host: (env.VITE_APP_PROXY_TARGET?.match(/https?:\/\/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/) || [])[1] || '',
          Cookie: `JSESSIONID=${env.VITE_APP_PORXY_COOKIES}`,
        },
      },
    },
  },
});
```

```
// .env.local
VITE_APP_PROXY_TARGET=https://10.19.223.31
VITE_APP_PORXY_COOKIES=1234567890
```

这里要注意的是，.env.local 文件，我是控制没有上传到 git 的，所以需要大家自己手动添加。这个也避免的了代码提交冲突的问题。

### 环境变量 - 静态文件

vite 默认的配置是最终生成的静态文件放在 assets 目录下，为了减少后端的心智负担，我们统一将静态文件放在 static 目录下。配置如下

> 当然你说服后端改成 assets 目录，也是可以的。这里也不强制要求

```ts
// vite.config.ts
export default defineConfig({
  build: {
    assetsDir: 'static',
    sourcemap: false, // 生产环境下将不会生成源映射文件
  },
});
```

### 环境变量 - hido 构建

这个我也没写到脚手架里面，因为我感觉很多项目不一定使用 hido 构建，这块可以参考文献 [hido 前后端构建任务分离方案 - 前端构建相关指令](/2024/hido-cicd-frontend#_3-前端构建相关指令)，需要新增 .env.hido 文件，然后配置 hido 构建的命令。

## hui-vue 3 的引入

现在 hui-vue 3 的引入有所调整，是按需引入的了，就是用到什么引入什么。不需要在 main.ts 中引入全量的 hui 了。

> hui-unplugin-vue-components

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite'
import { HuiResolver } from '@hui/unplugin-vue-components'

export default defineConfig({
  plugins: [
    // https://github.com/antfu/unplugin-vue-components
    Components({
      ...
      resolvers: [HuiResolver({ resolveIcons: true })],
    }),
  ]
});
```

## 典型页面

这块其实在 vessel-vite-template 和 hui-vue3-pro 中都有了。我这里说下一些理念。

### hui-vue3-pro

hui-vue3-pro 我后面用的是将代码直接注入到项目中，然后进行开发。这块就是放到业务中，业务可以灵活调整。

我尽可能的把 hui-vue3-pro 的控件做的简单（瘦身），然后业务可以灵活调整。但这里有个弊端就是，基础库如果升级了，那业务可能会同步不到。

最终的文件是在 项目的 `src/components/hui-pro` 目录下，如果业务有些控件可能会通用，其实也放到那里面也可以。

### 布局

布局这块，现在是由 layouts 以及 unocss 共同生效 unocss 配置，现在可能还不全，后续也会持续调整。

#### layouts

之前的布局，解耦成了代码片段放到 hui-vue3-pro 中，内网链接无法访问

#### 布局的建议

TODO:

## [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)

这个插件的贡献其实是比较大的，让我们少些了很多 import，但使用上需要注意一些

+ 组件命名不要太随意，由于是自动引入的，很容易出现文件冲突问题，排查起来不方便
+ 一些独立的组件，比如这个组件只给这个业务用，但直接放到 `pages/A/components/` 下面，等到有公用的地方了再移到 `components/` 下面
  + 同理也适用于 `composables` 、`utils` 等

## 其他实践

+ 如果重构项目的话，尽量拉新分支开发，有必要多做一些代码审核
+ 多去看 vueuse
  + 比如虚拟滚动：https://vueuse.org/core/useVirtualList
  + 比如 localstorage：https://vueuse.org/core/useLocalStorage/
+ 其实我们的业务，如果都使用 unocss 的话，那其实样式不太多的，所以我个人建议是能用 unocss 就用 unocss，如果不能用的话，那尽量使用原生的 css，而不是 less 和 sass。具体可以参考 [vite 的 css 预处理器章节](https://cn.vite.dev/guide/features.html#css-pre-processors)
+ 图标的话，我建议统一使用svg，并放在 components/icon 下面，并可以直接使用 vue 文件；注意一下命名，建议是 Hi 开头，例：`HiAbc`，避免 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) 导致的文件冲突问题
  + 图标还需关注，[SVG 最佳实践](/2024/svg-best-practices)
+ 项目中多语言多皮肤，根据业务需要按需选择，不要无脑迁移
+ moment 库，换成 dayjs，因为 moment 库已经停止维护了
+ 尽可能都用 ts
+ 尽可能用一些 TODO:

最后，多关注框架的的变化与更新，以及脚手架更新，如果有好的最佳实践也可以提 issues 给我。

