(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{413:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("快速搭建 vue 组件方案 vue-general-components")]),t._v(" "),a("h1",{attrs:{id:"快速搭建-vue-组件方案-vue-general-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速搭建-vue-组件方案-vue-general-components"}},[t._v("#")]),t._v(" 快速搭建 vue 组件方案 vue-general-components")]),t._v(" "),a("p",[t._v("一个基于 vue2，vuepress，rollup，以及集成 npm 命令的 vue 组件快速开发工具 vue-general-components")]),t._v(" "),a("h2",{attrs:{id:"项目背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目背景"}},[t._v("#")]),t._v(" 项目背景")]),t._v(" "),a("p",[t._v("在日常开发中，我们经常会在项目中写很多组件，有些是通用的有些是非常业务的，而一些优秀的组件会随着项目结项而"),a("code",[t._v("封印")]),t._v("；而不会说提炼成对应的 npm 仓库；社区上有很多优秀的 ui 库比如，"),a("a",{attrs:{href:"https://element.eleme.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("element-ui"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://antdv.com/docs/vue/introduce-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ant-design-vue"),a("OutboundLink")],1),t._v("等，又无法加入自己的组件到其中，也无法魔改他们的组件。所以 一个简单快速的开发 vue 组件的项目 vue-general-components 就这么诞生了；")]),t._v(" "),a("p",[t._v("它是一键生成组件项目的脚手架，从搭建到发布到 npm 仓库只需要 1 分钟，还不赶快来试试！！")]),t._v(" "),a("h2",{attrs:{id:"项目安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目安装"}},[t._v("#")]),t._v(" 项目安装")]),t._v(" "),a("p",[t._v("利用脚手架安装")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yarn create vgc <project-name># 或 npx create-vgc <project-name>\n\nyarn install # 或 npm install\n\nyarn dev\n")])])]),a("blockquote",[a("p",[t._v("vgc 即 vue-general-components")])]),t._v(" "),a("p",[t._v("或者直接 fork "),a("a",{attrs:{href:"https://github.com/xxholly32/vue-general-components",target:"_blank",rel:"noopener noreferrer"}},[t._v("vgc 项目"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("生成包含以下功能")]),t._v(" "),a("ul",[a("li",[t._v("[x] hello-world 组件")]),t._v(" "),a("li",[t._v("[x] 组件 api 文档系统")]),t._v(" "),a("li",[t._v("[x] 组件测试用例")]),t._v(" "),a("li",[t._v("[x] 组件打包")]),t._v(" "),a("li",[t._v("[x] 组件版本日志")])]),t._v(" "),a("h2",{attrs:{id:"组件开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件开发"}},[t._v("#")]),t._v(" 组件开发")]),t._v(" "),a("h3",{attrs:{id:"新建组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建组件"}},[t._v("#")]),t._v(" 新建组件")]),t._v(" "),a("p",[t._v("demo 中自带 hello-world 组件，代码中包含了简单的多语言（你也可以完全不用多语言），基本的 vue 实例，和 scss 样式")]),t._v(" "),a("blockquote",[a("p",[t._v("组件多语言还需要加入 lang 语言包")])]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("demo-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n      This is VGC {{ t("hgc.helloworld.hello") }} {{ message }} demo\n    '),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Locale "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../../../src/utils/mixins/locale.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HelloWorld"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mixins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Locale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("message")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scoped")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".demo-box")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 24px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("如果不是"),a("code",[t._v("yarn create vgc")]),t._v("命令生成的项目一定要修改对应的 package.json 中的 name，这个很重要，因为最终发布到 npm 是根据这个名字来的")])]),t._v(" "),a("h3",{attrs:{id:"组件测试用例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件测试用例"}},[t._v("#")]),t._v(" 组件测试用例")]),t._v(" "),a("p",[t._v("我引入的是 jest ，以及 "),a("a",{attrs:{href:"https://vue-test-utils.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-test-utils"),a("OutboundLink")],1),t._v("，在 demo 中加入了一个简单的 helloworld test 供参考；")]),t._v(" "),a("blockquote",[a("p",[t._v("一个优秀的软件，test 必不可少")])]),t._v(" "),a("p",[a("code",[t._v("package.json")]),t._v(" 配置")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jest"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"moduleFileExtensions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"moduleNameMapper"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"^@/(.*)$"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<rootDir>/src/$1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transform"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"^.+\\\\.js$"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<rootDir>/node_modules/babel-jest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('".*\\\\.(vue)$"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<rootDir>/node_modules/vue-jest"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"snapshotSerializers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<rootDir>/node_modules/jest-serializer-vue"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"组件文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件文档"}},[t._v("#")]),t._v(" 组件文档")]),t._v(" "),a("p",[t._v("文档系统引入 vue 官方的 vuepress，用起来也最顺手，主要还是因为 vuepress 支持 md 和其内置的一些周边，代码展示，emoji 等也不用再单独引入，直接有内置；")]),t._v(" "),a("p",[t._v("我加入了自己的一个插件 "),a("a",{attrs:{href:"https://xxholly32.github.io/vuepress-plugin-code-box/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-code-box"),a("OutboundLink")],1),t._v("，支持代码的隐藏可让展现方式多样化。antd 和 elementui 都有类似。")]),t._v(" "),a("p",[t._v("vuepress 默认的 dev 和 build 功能也支持，如果你想发布到 pages 上可以查看 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/deploy.html#%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress 部署文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://xxholly32.github.io/vue-general-components/#%E9%A1%B9%E7%9B%AE%E8%83%8C%E6%99%AF",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo实例地址"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"组件打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件打包"}},[t._v("#")]),t._v(" 组件打包")]),t._v(" "),a("p",[t._v("引入了 rollup 进行组件打包，喜欢撸 webpack 的也可以用 webpack")]),t._v(" "),a("ul",[a("li",[t._v("'rollup-plugin-node-resolve' // 告诉 Rollup 如何查找外部模块")]),t._v(" "),a("li",[t._v("'rollup-plugin-commonjs' // 将 CommonJS 模块转换为 ES2015 供 Rollup 处理")]),t._v(" "),a("li",[t._v("'rollup-plugin-vue' // 处理 vue 文件")]),t._v(" "),a("li",[t._v("'rollup-plugin-babel' // rollup 的 babel 插件，ES6 转 ES5")]),t._v(" "),a("li",[t._v("'rollup-plugin-css-only' // 提取 css，压缩能力不行")])]),t._v(" "),a("p",[t._v("会打包出 esm、min、umd 的 js 文件以及一个 css 文件")]),t._v(" "),a("h2",{attrs:{id:"组件代码提交规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件代码提交规范"}},[t._v("#")]),t._v(" 组件代码提交规范")]),t._v(" "),a("p",[t._v("项目中自带 husky 的 hooks，会自动对提交代码进行校验，建议使用下面提交规范。")]),t._v(" "),a("h3",{attrs:{id:"代码提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码提交"}},[t._v("#")]),t._v(" 代码提交")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 或 npx git-cz\nyarn cz:commit\n")])])]),a("p",[t._v("默认选项 ：")]),t._v(" "),a("ul",[a("li",[t._v("feat: 新的功能")]),t._v(" "),a("li",[t._v("fix: 修复 bug")]),t._v(" "),a("li",[t._v("docs: 只是文档的更改")]),t._v(" "),a("li",[t._v("style: 不影响代码含义的更改 (例如空格、格式化、少了分号)")]),t._v(" "),a("li",[t._v("refactor: 既不是修复 bug 也不是添加新功能的代码更改")]),t._v(" "),a("li",[t._v("perf: 提高性能的代码更改")]),t._v(" "),a("li",[t._v("test: 添加或修正测试")]),t._v(" "),a("li",[t._v("chore: 对构建或者辅助工具的更改，例如生成文档")])]),t._v(" "),a("blockquote",[a("p",[t._v("可以修改提交模版，但建立在有一定 git commit 基础之上")])]),t._v(" "),a("h3",{attrs:{id:"changelog-生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog-生成"}},[t._v("#")]),t._v(" changelog 生成")]),t._v(" "),a("p",[t._v("如果您的代码是通过以上命令提交的话，那 changelog 生产就是一个命令行的事；")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# npm run release\nyarn release\n")])])]),a("p",[t._v("它会根据提交记录修改你的版本号和对应的 changelog 文档，让您的组件库提交变得非常简单。")]),t._v(" "),a("blockquote",[a("p",[t._v("更多内容可以查看 "),a("a",{attrs:{href:"https://juejin.im/post/5e8ee53251882573cb7221c2#heading-15",target:"_blank",rel:"noopener noreferrer"}},[t._v("git commit 规范参考"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[t._v("#")]),t._v(" 发布")]),t._v(" "),a("p",[t._v("最后只需要 push 到 npm 仓库就好了")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm publish\n")])])]),a("blockquote",[a("p",[t._v("可以用 npm link 软链接的方式在本地进行开发")])])])}),[],!1,null,null,null);s.default=n.exports}}]);