---
title: impress.js 使用心得
image: https://pic4.zhimg.com/v2-5df219089a2bbc87a3e490494ecb25cb_r.jpg
date: 2020-05-30
tags:
  - impress.js
  - 前端
---

一种适用与前端的新型 ppt 制作工具

<!-- more -->

# impress.js 使用心得

## 背景

因为是前端，所以啥玩意儿都喜欢做成前端的样子，ppt 也不例外；其实不只是 ppt，对于产品介绍，现在很多也做成 ppt 或者 video 的形式。

> 我个人还是蛮喜欢语雀的[介绍视频](https://gw.alipayobjects.com/mdn/prod_resou/afts/file/A*oIndSLbrp0kAAAAAAAAAAABjARQnAQ)的

之前我用的比较多的是 jinjiang 的 [vue-mark-display](https://github.com/Jinjiang/vue-mark-display)，主要是因为 md 格式支持的比较好。但直到用了 impress.js 以后发现，这里能做的可就更多了。而现在市面上有的 impress.js 的介绍并不多。

> 如果你喜欢用 powerpoint，或者其他领域的工具制作 ppt，那么下面的文章可能不适合你

## impress.js 介绍

先上案例 [impress.js 官网](https://impress.js.org/)

> 很难想象这是个 8 年前的 idea

如果有兴趣还可以看下官方引入的[其他例子](https://github.com/impress/impress.js/tree/master/examples)

以及别人使用被官方引入到[awesome 的例子](https://github.com/impress/impress.js/wiki/Examples-and-demos)

还有现任作者[henrikingo](https://github.com/henrikingo)的一些外出[演讲 ppt](http://henrikingo.github.io/presentations/)，这位好像是 mongodb 的核心开发人员；

ok 现在是不是对这个 impress.js 有点兴趣了，我们先来关注一波原理

### 原理介绍

impress.js 的框架原理并不复杂，写在 html 标签上的属性可以通过 document.querySelector('元素名').dataset["属性名"]的方式取得其值，然后将每一张幻灯片相关的值赋值给 CSS3D 相关的属性，并为其设定过渡时的渐变动画即可。

> CSS3D 是指 transition 渐变，animation 动画以及 transform 变形。

> 有时候人们很喜欢造一些名字很吓人的名词，让人一听这个名词就觉得自己不可能学会，从而让人望而却步。但是其实这些名词背后所代表的东西其实很简单。

其实是很简单的实现，那么该如何用好呢？

### 进阶入门

[impress.js 官网](https://impress.js.org/)其实包含了几乎所有的 demo；而它背后的[index.html](https://github.com/impress/impress.js/blob/master/index.html)中的注释，已经把设计说明的很详细了；

特别是这个

```
<!--
    Welcome to the light side of the source, young padawan.
    One step closer to learn something interesting you are...
                               ____
                            _.' :  `._
                        .-.'`.  ;   .'`.-.
               __      / : ___\ ;  /___ ; \      __
             ,'_ ""=-.:__;".-.";: :".-.":__;.-="" _`,
             :' `.t""=-.. '<@.`;_  ',@:` ..-=""j.' `;
                  `:-.._J '-.-'L__ `-.-' L_..-;'
                    "-.__ ;  .-"  "-.  : __.-"
                        L ' /.======.\ ' J
                         "-.   "__"   .-"
                        __.l"-:_JL_;-";.__
                     .-j/'.;  ;""""  / .'\"-.
                   .' /:`. "-.:     .-" .';  `.
                .-"  / ;  "-. "-..-" .-"  :    "-.
             .+"-.  : :      "-.__.-"      ;-._   \
             ; \  `.; ;                    : : "+. ;
             :  ;   ; ;                    : ;  : \:
             ;  :   ; :                    ;:   ;  :
            : \  ;  :  ;                  : ;  /  ::
            ;  ; :   ; :                  ;   :   ;:
            :  :  ;  :  ;                : :  ;  : ;
            ;\    :   ; :                ; ;     ; ;
            : `."-;   :  ;              :  ;    /  ;
             ;    -:   ; :              ;  : .-"   :
             :\     \  :  ;            : \.-"      :
              ;`.    \  ; :            ;.'_..-=  / ;
              :  "-.  "-:  ;          :/."      .'  :
               \         \ :          ;/  __        :
                \       .-`.\        /t-""  ":-+.   :
                 `.  .-"    `l    __/ /`. :  ; ; \  ;
                   \   .-" .-"-.-"  .' .'j \  /   ;/
                    \ / .-"   /.     .'.' ;_:'    ;
                     :-""-.`./-.'     /    `.___.'
                           \ `t  ._  /
                            "-.t-._:'
-->

```

但不太友好的是 impress.js 是 umd 模式的，我把他引入到 vue-cli 中，顺便做了一个翻译工作，[预览地址 https://xxholly32.github.io/impress-demo/](https://xxholly32.github.io/impress-demo/)以及[项目地址 https://github.com/xxholly32/impress-demo](https://github.com/xxholly32/impress-demo)

![](https://pic4.zhimg.com/v2-5df219089a2bbc87a3e490494ecb25cb_1200x500.jpg)

当然，你也可以直接学习其中 [impressDemo.vue](https://github.com/xxholly32/impress-demo/blob/master/src/components/ImpressDemo.vue)中的源码部分；这个很重要，学会了才能够更好使用`impress.js`

### 还有更好的 gossip

一个高效创建和演示炫酷幻灯片的用户界面！ 🔥 [https://pearmini.github.io/gossip/](https://pearmini.github.io/gossip/])

比较有趣的是它的产品介绍：

《人类简史》中有一个观点，人类之所以强于其他动物就是因为人类会讲故事：故事让我们能相信陌生人，从而能有效地大规模合作。PPT 不失为一种好的讲故事的方式，而 Gossip（八卦）是一种我们随时随地都在、也是人们最喜欢讲的故事，所以我将该软件取名为 Gossip，旨在打造一个通过 PPT 高效编故事、讲故事的工具。

它的内容也是比较详细可以看对应的文档，使用起来会比`impress.js`要方便的多；如果不了解前端，不想写代码可以尝试 gossip

### 还需要什么

**想象力**

## TODO

- [ ] 拆解 impress.js 更方便引入与二次开发

## 总结

impress.js 是一个利用 js 实现非网页领域的神器。

## 相关文献

- [一统江湖的大前端——PPT 制作库 impress.js](https://zhuanlan.zhihu.com/p/43808459)
- [高逼格的在线演讲稿编辑器](https://juejin.im/entry/59e9bb3b6fb9a0450908a1a7)
