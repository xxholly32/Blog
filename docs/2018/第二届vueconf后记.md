---
title: 第二届 vueconf 后记
display: home
image: /Blog/vueconf2.jpeg
date: 2018-01-01
tags:
  - vue
  - vueconf
---

杭州金逸影城卧趟式听课

# 第二届 vueconf 后记

## 场馆为什么要在电影院办？

真香！！why？

### imax 厅，足够大，音效足够好

![微信图片_20181130100030.jpg | left | 827x465](https://cdn.nlark.com/yuque/0/2018/jpeg/127166/1544448492747-ae5561c5-b9bc-4cf1-a965-b59636c210ed.jpeg)

可惜了我迟到了，没有听到乐队的表演；在讲 ppt 全场都黑的时候只有文字是白的，特别是蒋豪群的分享，黑字白底加上演讲时候灯只照到他身上，感觉注意力能够完全集中，又是我非常喜欢听的课题，代入感真强；

### 躺着听 ppt 是什么感受

![微信图片_20181130100004.jpg | left | 827x551](https://cdn.nlark.com/yuque/0/2018/jpeg/127166/1544448529292-20aab5c4-c5ac-4522-9867-2ebbaf023b26.jpeg)

就是你不爱听的课，可以睡觉；之前的 D2 等一些分享，一讲就是一天，虽然课题有很多，难免有自己不喜欢的；这个会就好，我不喜欢可以直接睡觉；我中途大概睡了 3 次吧，下午多一些，因为下午的课题是一些实际应用类的课题；和一些框架强耦合，听起来就一知半解；之前 D2 我经常听个半天就溜了.....

## Vue 3.0 进展分享--尤雨溪

这个兴奋点就有很多了

![微信图片_20181130095828.jpg | left | 827x620](https://cdn.nlark.com/yuque/0/2018/jpeg/127166/1544448546608-2d05a577-a373-4bdc-a1c6-cfd41a9fa767.jpeg)

### proxy 实现机制加快运行速度

1. 放弃了`Object.defineProperty`，基于 Proxy 观察者机制以满足全语言覆盖及更好的性能。加上其它方法的优化改动，vue3.0 可以提速一倍/内存使用降低一半；
2. `Observer`模块将可以单独作为一个库来使用。

具体我还没看过性能对比，有相关文章可以参考下
[https://juejin.im/post/5bfe3360518825653a231f33](https://juejin.im/post/5bfe3360518825653a231f33)

不过 ie11 还是只能用老的模式，so sad.....

### vue 的模块拆解

这是最近 vue 以及 vue-cli 的思想源泉，也就是更好地颗粒化，就像前面的 observer 模块；还有 runtime-core，test，都是可以支持单独运行的，我认为，这里面应该和语言也没有什么关系；但有提到 vue-cli 为 vue3 做准备，好像有提到说 vue3 的架构也会用 vue-cli 的脚手架生成，可能会为 vue3 单独做一些 plugin；（我只是猜测）

### vue 性能优化之新的 Virtual DOM 实现 + Time Slicing Support

虚拟 dom 实现机制，最关键的是子组件渲染不会重新触发父组件的渲染机制；实际项目中如果层级过多的一些控件，很容易出现类似的情况，最恶心的就是地图，我们之前封装了 n 层，性能就超慢，只要改了某个值，其他的都渲染了一遍；

其次是压榨性能，榨的是真的干，连 dom 节点的属性值也不放过。还有静态内容，方法变量等；

最后一个就是 time slicing support；这个将 js 碎片话的操作方式，对于大数据，比如我们的页面数据很多，滚动之前很卡，特别是列表，不知道用了以后会不会减少页面的帧数；特别想知道内部实现机制到底是什么....

## vue-cli3 分享加上韦小姐的闪电分享

首先说韦小姐的分享简直是天秀，15 分钟做了一件神奇的事情，我回来就给他模拟实现，并提了 issue，就差没提 pr 了；中间其实还有很多步骤，包括后面的 ui 还没看过了，[https://github.com/miccycn/vue-cli-plugin-react](https://github.com/miccycn/vue-cli-plugin-react)，把 react 嵌入到 vue，非常有意思的 idea，后面夸底层的应用估计也不是梦了，还有她微博也是个蛮有意思的人，可以关注下；

![微信图片_20181130095901.jpg | left | 827x620](https://cdn.nlark.com/yuque/0/2018/jpeg/127166/1544448630548-ce7b5704-5330-4b00-8c2c-a25ba923c9cb.jpeg)

[https://img.w3ctech.com/What-I-Learned-from-Maintaining-Vue-CLI.pdf](https://img.w3ctech.com/What-I-Learned-from-Maintaining-Vue-CLI.pdf) 说下蒋豪群的分享，感觉思路不是特别清晰，但我听到一些我想了解的东西了；社区项目维护的版本问题，vue-cli3 理念的深入探讨，社区的最佳实践的简单介绍；对于 cli 中一些 eslint 的标准维护花费开发者大量时间，也是万万没有想到的；对于 upgrade，方案好像还没有，比较可惜。回头又看了遍他的视频，这句话说的很有道理，我翻译不好只能用表达式去理解；

> Each extra dependency doubles the complexity
> 依赖和复杂度的关系 => y\*y = x

后面几天我在 cli 上提的几个 issues 都回的比较快和满意，果然有专职维护就是不一样；果然做前端的就应该有这种开源的精神和理念；

**早上只有一节课没意思，下午只有一节课是有意思的**

## Making Your App Accessible

这是比较有意义的一节课，加深了我对 role 和 aria 标签的理解，之前真的以为这些只是一个摆设；最近也看到有 element 的提交记录有对这些标签的引入；当然也要看产品是否有需求，如果有需求，估计会深入学习；

## what`s next

感觉要学的东西还有很多，特别是大神的一些理念，在项目中可以大展拳脚；很庆幸来了这次 vueconf！

吐槽一波抽奖，抽了 10 次没抽到衣服，不过送的 T 恤还是蛮帅的；
