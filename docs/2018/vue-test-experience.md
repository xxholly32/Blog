---
title: vue 单元测试心得总结
image: https://cdn.stocksnap.io/img-thumbs/960w/ENOWZ1UBKA.jpg
date: 2018-01-01
tags:
  - vue
  - test
  - skill
---

# vue 单元测试心得总结

## 为什么要单元测试

我认为的单元测试就是，万一我改动了某个代码，导致了当前功能或者是别的功能的问题（主要是后者）；还有一点就是，不用等着浏览器打开，就能知道代码是否存在问题。

其实最好的方式就是写代码的同时，就开始写测试用例。

如果写完代码再写单元测试，会失去写单元测试的意义。

## 单元测试的内容

首先要明白我们要测试什么，添加了一个样式就要加用例？所有的方法都要进行测试？

这里我推荐一段 vue-test-util 的文献

[https://vue-test-utils.vuejs.org/zh-cn/guides/common-tips.html](https://vue-test-utils.vuejs.org/zh-cn/guides/common-tips.html)

对于 UI 组件来说，我们不推荐一味追求行级覆盖率，因为它会导致我们过分关注组件的内部实现细节，从而导致琐碎的测试。

所以我们要做的是模拟一些关键行为并产生了某一种结果，测试这个结果
是否是达到了我们的预想值；一般的关键行为测试是一个简单流程的操作，比如一次点击，一个 UI 组件的生产；可能是人为的，也有可能是代码生成的；

但不是对所有 UI 组件的方法测试。所以我们代码测试覆盖率不用 100%

### 测试覆盖率的作用

那你大概会问：“那测试覆盖到底有什么用呢？”。我的答案还是很简单，“测试覆盖是一种学习手段”。学习什么呢？学习为什么有些代码没有被覆盖到，以及为什么有些代码变了测试却没有失败。理解“为什么”背后的原因，程序员就可以做相应的改善和提高，相比凭空想象单元测试的有效性和代码的好坏，这会更加有效

———— 摘自 [http://www.infoq.com/cn/articles/test-coverage-rate-role](http://www.infoq.com/cn/articles/test-coverage-rate-role)

### 样式如何测试

我个人认为的样式测试是穿插在单元测试中的，比如找容器；都会用到我们的样式表但并不会测试样式中有什么内容；

但一些特殊的操作，比如 hover、active 以后 class 值的变化，也是需要的。这也是产生了某一种结果。

## 单元测试框架

虽然 vue.js 官方文档没有写出，但 vue-test-util 上写的是 vue 的官方测试工具库

[https://vue-test-utils.vuejs.org/zh-cn/](https://vue-test-utils.vuejs.org/zh-cn/)

我在本实例中也对项目中的 vuex，router，axios 进行了测试，确实比较好用。

我们熟悉的 Element-UI 内部自己实现了一套，也挺好用的；但并没有封装出去。

## 单元测试工具对比

### Jest 与 Mocha

vue-cli 自带的 2 个选项是 jest 和 karam 加 mocha 的选项

jest 和 mocha 都是属于测试框架，我这里只使用过 mocha，一方面是 jest 不能和 karma 使用；另一方面是 mocha 的文档比较详细；

我推荐一篇阮一峰的博文[http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)；里面基本把 mocha 和一些 mocha 的使用方法都介绍一遍；

### Karam

而 karma 是一个专门用于 JS 运行的一个工具(Spectacular Test Runner for JavaScript)，这边 karma 主要搭建文档[https://segmentfault.com/a/1190000006895064](https://segmentfault.com/a/1190000006895064)也说了比较详细了。

划重点：

- 在脚手架中 karma 默认是 PhantomJS，也可以用 chrome 和 IE，基于开发方便，建议直接改为 chrome!

```
# karam.conf.js

customLaunchers: {
  Chrome_travis_ci: {
    base: 'Chrome',
    flags: ['--no-sandbox']
  }
},

```

Element-ui 也从之前的 PhantomJS 改成了 chrome，这使得 test:watch 非常方便，能够直接在代码中打断点；本项目也采用了这个方案。

但 chrome 的 tools 没法使用。

- karma 浏览器开始测试的时候会弹出 chrome，尽量不要去动它；有几率会存在获取不到元素；

### 断言库 chai

断言库基本采用的是 chai

这里放一个 API 方便以后学习

[https://www.jianshu.com/p/f200a75a15d2](https://www.jianshu.com/p/f200a75a15d2)

## 结束

这样就基本覆盖到了所有需求，有关具体的单元测试内容，还是需要开发人员认真去训练才能达到单元测试的目的。

**相关文献**

unit

> vue-test-utils : [https://vue-test-utils.vuejs.org/zh-cn/](https://vue-test-utils.vuejs.org/zh-cn/)
> 如何对 vue.js 单文件（.vue）进行单元测试？: [https://www.zhihu.com/question/50566681/answer/267276949](https://www.zhihu.com/question/50566681/answer/267276949)
> Chai.js 断言库 API 中文文档 [https://www.jianshu.com/p/f200a75a15d2](https://www.jianshu.com/p/f200a75a15d2)
> 前端单元测试之 Karma 环境搭建 [https://segmentfault.com/a/1190000006895064](https://segmentfault.com/a/1190000006895064)
> 测试覆盖（率）到底有什么用？ [http://www.infoq.com/cn/articles/test-coverage-rate-role](http://www.infoq.com/cn/articles/test-coverage-rate-role)

e2e

> 使用 Nightwatch 进行 E2E 测试中文教程: [https://www.jianshu.com/p/936bee074b66](https://www.jianshu.com/p/936bee074b66)
> yyx 的 nightwatch-helpers [https://github.com/yyx990803/nightwatch-helpers](https://github.com/yyx990803/nightwatch-helpers)
> nightwatch API 中文版：[https://www.cnblogs.com/saryli/p/6903873.html](https://www.cnblogs.com/saryli/p/6903873.html)
> 怎么为大中型的 vue.js 项目编写 e2e 测试？: [https://www.zhihu.com/question/51764943?from=profile_question_card](https://www.zhihu.com/question/51764943?from=profile_question_card)
