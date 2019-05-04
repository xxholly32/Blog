# vscode 使用心得

## vscode 的简介

用 vscode 也有个几个年头了，最早用文本编辑器 editplus 和后面的 sublime，直到现在的 vscode 基本上每天工作已经离不开了；

vscode，免费，开源，使用简单，占资源少，丰富的插件功能，页面很赞，快捷键很舒服；

功能强大的而且简单到不能再简单，如果你不知道怎么用打开，然后运行 ctrl+shift+p；随便输入什么都可以找到你要的答案，比如快捷键；

## vscode 的插件

vscode 最强打的就是插件系统，我引入一些我平时用到的，如果还有一些好的可以留言给我。

### [Emmet](https://docs.emmet.io/)  简易 html 输入

vscode 内嵌的一款插件，简易编写 html 语言，采用 tab 切换使用

比如，输入一下字符:

```
ul#nav>li.item$*4>a{Item $}
```

...可以自动生成相对应 html 语言:

```
<ul id="nav">
	<li class="item1"><a href="">Item 1</a></li>
	<li class="item2"><a href="">Item 2</a></li>
	<li class="item3"><a href="">Item 3</a></li>
	<li class="item4"><a href="">Item 4</a></li>
</ul>
```

### 用  [prettier](https://prettier.io/) ，Vetur，ESlint 编写 Vue 项目

ESlint 接管原生 js 提示，可以自定制提示规则。[Vetur](https://cn.vuejs.org/v2/guide/typescript.html#%E7%BC%96%E8%BE%91%E5%99%A8%E6%94%AF%E6%8C%81)  则是 Vue 官方推荐的编辑器支持插件；prettier 可以加入 eslint 校验，formatOnSave 可以自动在项目保存的时候进行代码的 formatter 操作；3 件套让你的代码变的整洁、美观；以下是我个人的配置；

```
// setting.json
{
    // #设定tabsize为2个空格
    "editor.tabSize": 2,
    // #每次保存的时候自动格式化
    "editor.formatOnSave": true,
    // #每次保存的时候将代码按eslint格式进行修复
    "eslint.autoFixOnSave": true,
    // 添加 vue 支持
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    //  #让prettier使用eslint的代码格式进行校验
    "prettier.eslintIntegration": true,
    "vetur.validation.template": false
}
```

### Snippets 之 vue vscode snippets

Snippets 的功能和 emmet 差不多，还有 html snippets，react snippets；知道一些快捷键可以很快速的写一些空的页面或者函数；还有一个 vue 2 snippets 具体我还没仔细看过，貌似下载次数比这个高。

![](https://cdn.nlark.com/yuque/0/2019/gif/127166/1552119580664-b7c49d38-53ec-4dcd-bf39-35eb8f891f50.gif#align=left&display=inline&height=420&originHeight=720&originWidth=1280&size=0&status=done&width=746)

### [DocBlocker](https://github.com/FlyDreame/vscode-docBlocker)  方法注释

这个是我们组刘梦同学开发的 vscode 插件，如要是做方法注释用的；还有一个 document this 的插件，适用于全局的注释；他还有一款 vue i18n helper 的插件用于检验 vue 文件中是否包含多语言的，配合相关也有 eslint 的插件有兴趣的可以关注一下；

![](https://cdn.nlark.com/yuque/0/2019/gif/127166/1552117629502-f1e12b80-c8e3-45e8-8bd0-f385786f66b4.gif#align=left&display=inline&height=388&originHeight=475&originWidth=914&size=0&status=done&width=746)

### Bracket Pair Colorizer 括号终结者

有时候我们写代码会不知道括号的结尾在哪里，没有对应的终线，这个是很好的利器，支持多括号的颜色区分；

![image.png](https://cdn.nlark.com/yuque/0/2019/png/127166/1552117888151-55cc8557-eede-49af-9431-8d3a1247487e.png#align=left&display=inline&height=118&name=image.png&originHeight=118&originWidth=579&size=23172&status=done&width=579)

### TODO Highlight 编辑器中的 checklist

在代码中标注我们想做和需要做的事情，可以用不同的颜色分别标注在注释中；支持自定义颜色和关键字；

![image.png](https://cdn.nlark.com/yuque/0/2019/png/127166/1552118291798-9169f2a5-d736-4c4d-865a-b6fcb8182d9d.png#align=left&display=inline&height=290&name=image.png&originHeight=290&originWidth=584&size=42955&status=done&width=584)

### 其他

1. git history ：查看 git 历史记录
1. git history diff : 对比 git 历史提交记录
1. Emoji：ctrl + shift +p 输入 emoji，来啊拼表情包啊
1. 翻译(translate to chinese)：翻译工具，不过有个问题是翻译的结果不能复制
1. markdown PDF：可以一边编辑一边看效果，再也不需要 Typora 了
1. import css：能够算出你 import 或者 require 的文件的大小，非常实用
1. material icon theme：文档图标库，类似的还有很多，只需要搜 icons 就好了，这个看个人喜欢

## 主题与字体

### 主题  

在官网搜索排行我们就可以看到一些比较著名的主题了，[https://marketplace.visualstudio.com/search?target=VSCode&category=Themes&sortBy=Downloads](https://marketplace.visualstudio.com/search?target=VSCode&category=Themes&sortBy=Downloads)，有 material，这个就中规中矩，on dark，这个色彩会更多一些，还有一款 winter is coming，里面的值都是白色，有股淡淡的忧伤。

我这边要推荐的是[dracula](https://github.com/dracula/dracula-theme/)，淡淡的紫色底，颜色也显得多彩；特别是关键字变成了暗粉色，特别的舒服；<br />
![image.png](https://cdn.nlark.com/yuque/0/2019/png/127166/1552120220846-98764a57-32d7-4f00-8c97-4974cdf04e9d.png#align=left&display=inline&height=420&name=image.png&originHeight=420&originWidth=647&size=96975&status=done&width=647)

还有一套是 owl night，在 d2 开发大会上一个大神使用的，我看了下也不错；真实效果比图片暗一丢丢。

![image.png](https://cdn.nlark.com/yuque/0/2019/png/127166/1552121271855-9c433649-c432-439d-b215-0a7282b6562c.png#align=left&display=inline&height=468&name=image.png&originHeight=468&originWidth=678&size=240603&status=done&width=678)

什么你要背景是白色的？不好意思，没有共同语言

![](https://github.com/robb0wen/synthwave-vscode/blob/master/theme.jpg)

[synthwave-vscode](https://github.com/robb0wen/synthwave-vscode)又一个碉堡的效果，做得有梦幻的感觉，颜色有点深，是基于 vscode 的新特性实现的，[Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css)，原理应该是 vscode 支持加载 css 和 js 来做皮肤

### 字体

字体普遍推荐的是 Operator Mono Book 和 [Dank Mono](https://dank.sh/)，不过 2 个都收费；我比较喜欢 dank mono 的 f 和 l 的写法，不过 s 的写法就比较蛋疼了；所以还是用的是默认字体，如果有好的字体也可以推荐给我。
