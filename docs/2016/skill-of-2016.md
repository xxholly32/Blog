---
title: 2016年JavaScript开发者需要了解的技能
image: https://cdn.stocksnap.io/img-thumbs/960w/RM676MH2KP.jpg
date: 2016-01-01
tags:
  - skill
---

# [翻译]2016 年 JavaScript 开发者需要了解的技能

JavaScript - 由于它是 web 开发中最基本的语言，无论你怎么看待它，我们都要去考虑它的"未来"。毕竟，在电脑和手机端，浏览器大概是人们用的最多的应用了。

我们开发人员都知道，JavaScript 世界看上去动荡不安甚至有些混乱(e.g. [the left-pad incident](http://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/))，但这也是说明了这门语言正在不断的完善。它试着去完善一些老的问题(通常是相关扩展或者复杂的问题)以跟上现在的发展趋势。

随着需求的变化，特别是在这技术日新月异的时代。你也许不知道以下这些技术，但想要提高或者完善你的技能，这些因素都是你需要关系(尤其是那些初学者)。能够了解 Javascript 的发展走向还是能够让你更好的进入这个领域。

那么到底 2016 年 javascript 开发方向是什么(或者 2017 年又会有什么走向)？

![javascript 趋势](https://s3.amazonaws.com/codementor_content/2016-May/reddit_wordcloud.png)

node.js 已经是我们都知道的，后面的内容我们也不会提它，因为太有名气了...........

## React & Redux

2015 年是 React 获得肯定的一年，[越](https://top.fse.guru/2-years-with-angular-b72a81f9e1ae)来[越](http://www.quirksmode.org/blog/archives/2015/01/the_problem_wit.html)多的[开发者](https://medium.com/@mnemon1ck/why-you-should-not-use-angularjs-1df5ddf6fc99#.kl0hmp1l1)在 2014 年尾声开始[抱怨](https://medium.com/este-js-framework/whats-wrong-with-angular-js-97b0a787f903#.1t3o3yxko)Angularjs 的一些问题，也有新闻说道，Angular2 将会和 Angular 1 不兼容。

如今的现状是，Angular1 仍然是 Github 上最受关注的，同时缓慢增长，而 React 正快速的填补这个缺口。

![github star 增长图](https://s3.amazonaws.com/codementor_content/2016-May/trend.png)

图中的数据基于互联网。

也许这张`react`, `angular`, and `angular2`, 在 npm 下载数量图能够更好的反应这个问题：

[![angularjs vs react](https://s3.amazonaws.com/codementor_content/2016-May/npm_downloads.png)](http://www.npmtrends.com/react-vs-angular)

出自 [NPM 走势](http://www.npmtrends.com/react-vs-angular-vs-angular2)

但是，这些数据并不能真实的代表这些框架的使用情况，有一点要考虑的是自从 Angular1 被 Angular2 替代之后的并没有任何升级，更不必说，React 不是一个框架，不能够和 AngularJS 一起用。所以说，这 2 者其实是没法放在一起对比的。

尽管如此，大概在去年一年里，JavaScript 社区对 React 的支持比 Angularjs 要多一些。

看图表，你可能会问：在 8 月后发生了什么？React 在 npm 的下载数量突然以指数倍的方式暴涨，Github 的关注数量快要接近 AngularJS 的数量。

同时，[Redux 出现](https://www.youtube.com/watch?v=xsSnOQynTHs)，由它的创作人 Dan Abramov 发布   在[ReactEurope2015](https://www.react-europe.org/2015/2015.html) 7 月的会议上。Redux 是一个类似 flux 的实现，让很多开发者确信这更适合并能够推动 React 的发展。

在 Redux 出现前，React 走过一段不寻常的旅程，开发者需要自己去方法去实现"Flux"的功能。很多很好的实现方式涌现出来，但对于 Javascript 开发者来说还是缺少一个全面完整的解决方案。因此尽管 React 在 DOM 表现层处理的有多优秀，开发者还是对采用这个技术到项目中保留自己的意见。

如今，随着越来越多的开发者开始关注和使用 Redux 并且认识到，测试和 debug JavaScript 是如此方便。Redux 开始替代 Flux 成为了新的赢家。

[![](https://nodei.co/npm-dl/redux.png?months=6)](https://nodei.co/npm/redux/)

[![](https://nodei.co/npm-dl/alt.png?months=6)](https://nodei.co/npm/alt/)

[![](https://nodei.co/npm-dl/reflux.png?months=6)](https://nodei.co/npm/reflux/)

[![](https://nodei.co/npm-dl/graphql-relay.png?months=6)](https://nodei.co/npm/graphql-relay/)

[![](https://nodei.co/npm-dl/fluxxor.png?months=6)](https://nodei.co/npm/fluxxor/)

由于 2016 年 Javascript 在前端领域的地位，同样地，React 和 Redux 也变的炙手可热了。知名公司如：Netflix，Dropbox, 雅虎 都已经开始使用 React，并给与很大的信心。

尽管这样，Facebook 的 Relay 框架在 2017 年成为 Redux 的最大挑战者。

_You Might Also Want to Read: [Getting Started With React & Redux: An Intro](https://www.codementor.io/reactjs/tutorial/intro-to-react-redux-pros)_

####   其他感兴趣的框架

那么还有什么别的框架？还有一些相对关注低一些的，但被炒做的一些框架。

**Angular2**

谷歌和微软[合作](http://techcrunch.com/2015/03/05/microsoft-and-google-collaborate-on-typescript-hell-has-not-frozen-over-yet/)开发的框架 Angular2,或者说是用微软的 TypeScript 开发的更易管理的 Angularjs2。这是什么意思呢？大型公司(一些非技术性的公司)可能会关注 Angularjs2, 特别是使用了微软的.NET 框架的。从去年开始，微软也开始推动.NET 的开源工作，使开发者能够更好的使用。

随着 Angular2 的重写，整个过程希望能够修改 Angular1 app 开发的一系列问题，[目前为止效果明显](http://info.meteor.com/blog/comparing-performance-of-blaze-react-angular-meteor-and-angular-2-with-meteor)。谷歌也相信未来是属于互联网开发，Angular2 也会支持 web 组件开发，使其有能力支持更好的展现。

然而，不管 Angular 团队如何努力的带领开发者从 Angular 1 引导向 Angular2， Angular 社区对 Angular 的取舍还是分成 2 大阵营。重写导致 Angular 的停滞不前和 React 逐渐火热，而这个势头同时正在加剧。

Angular2 是否能够和 Angular1 当初一样成功，并不能完全肯定，在 Javascript 社区也众说纷纭。Angular2 还是在这个 Javascript 和 web 开发的"未来"中有成功的可能性，但 2016 显然不是 Angular2，特别是它还是在 beta 版本。对于那先不喜欢复杂 react app 需要配置很多东东的开发者来说，Angular2 还是可以选择的。

**Meteor**

Meteor 在 Github 的关注和下载始终是稳固上升中，和 React，Angular 的发展相似。这是一款轻量级的，全栈式的，有鲜明特这的一款 Javascript 框架，很多开发者用它工作能从框架中发现很多新颖有趣的地方。meteor 被认为是一款原型式框架，而且对初级开发者非常友善，能够较快上手。

然而，使用 Meteor 起来又是另一种情况。那些学过 Angular1 或者是一些 Rails 的都需要大量神秘的隐藏配置，而在 Meteor 也是同样的。Meteor 不像 React 和 AngularJS，  企业中可能会有一些专业的开发人员，而 Meteor 没有，这也是不被考虑的因素之一。虽然 AngularJS 有很多问题，但有谷歌的技术团队撑腰，而使用 Meteor 不一样， 无论是前后端开发，都会有很多技术风险。Meteor 要更广泛的被广大开发者使用还是需要解决很多问题。

更别提那些数据库问题，由于 Mongodb 是 Meteor 的默认数据库，而一些开发者对 MongoDB 的开发模式不是很感兴趣(阅后即焚的小型数据库)。Meteor 运行必须要起 SQL，而这点也没有很好的支持。

不用说，Meteor 在 2016 甚至 2017 年能够占到的份额都会比较少。对于构建大型负载的应用，大部分专业开发者对这个技术还是持保留意见。

## ES6 终于要普及了

2016 年，如果你是个 Javascript 开发人员，而你的应用还没有采用 ES2015 开发规范，你要好好问问自己，你到底在干什么？

但为什么用 Babel 和 TypeScript 处理 ES6 app 项目呢？Babel 大部分是转换 ES6 的 ES5，TypeScript 是 可选的静态类型和简单类型的 Javascript 的超集。

Facebook 创造了 Babel，Babel 只支持静态类型检查的 Javascript， 并做转换，所以这 2 者都是以不同目的的方式创造出来，没有可比性。因此这 2 者一般不会同时用。

Babel 是的第一个连接 ES5 和 ES6 项目的语言，而 TypeScript 在 ES6 的支持也快要赶超 ES6 了。在 github 上 Babel 关注度更高，更不用说还有 React 开发者会使用 Babel + Webpack 的组合。

![](https://s3.amazonaws.com/codementor_content/2016-May/babel_vs_typescript.png)

_You Might Also Want to Read: [Setting Up a React Environment Using Npm, Babel, and Webpack](https://www.codementor.io/reactjs/tutorial/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack)_

然而，在最近，如果你看一些 Javascript 的解决方案，那些代码库都是用 TypeScript 做的，TypeScript 也变得越来越火，越多人挑选了。Javascript 之前给人的印象是比较难懂，难调试，不仅仅是它是一门动态语言，而且缺少类型检查的机制。TypeScript 很好的支持了一点，而且 TypeScript 还有一个比 Flow 更大的社区支持。

![](http://p0.qhimg.com/t0178dd66924cd4aa60.png)

除此之外，我们看下在谷歌趋势上对 TypeScript 的关注走势图

![](https://s3.amazonaws.com/codementor_content/2016-May/es6.png)

也许 TypeScript 在受关注程度上低于 Angular2，但随着 Javascript 的应用越来越大，它很有可能因此而被关注。同时，[Redux 较早推出 Javascript 应用测试方案  ]， TypeScript 帮助使其代码更具可维护性(它也能和 React 的 JSX 兼容)。除此之外，微软，谷歌，Facebook[共同致力于]在 Javascript 上添加静态类型，最终生成 ECMAScript 协议。谷歌放弃了 AtScript 而用 TypeScript 在 AngularJS 上，而 Facebook 的 Flow 的社区并没有 TypeScript 那么大。

因此，负责任的说，不仅静态类型的 Javascript 是一种趋势，而且那些不喜欢 Javascript 的开发者也因为 TypeScript 开始接触 JavaScript 了。TypeScript 极有可能是未来的趋势。

## 函数式编程要变成主流

确切的说，大量函数式编程已经[以他们的方式缓慢的](http://prog21.dadgum.com/31.html?1)占据主流的编程领域。但在现在复杂的 web apps 中，"函数式编程"又被重新关注起来了。

![](http://p4.qhimg.com/t01998d3cd86b93b8de.png)

类似 Scala 的后端开发者正慢慢的拥抱函数式编程，Fackbook 的 React 前端开发者也提出了 UI 的函数式看法。随着越来越多的赞扬，函数式开发将会成为主流。

如今，前端开发主要是响应式编程和函数式编程。React+Redux 的开发模式，通常对于新手开发者来说，面向对象的编程是最多的解决方案。另一个角度来说，React 需要开发者用一个函数来处理 UI 而 Redux 用一个函数处理数据。所以基本还是 OOP 的模式。

不管怎样，那些用函数式编程的，仍然纯用 Javascript 并且学一些 RxJS 的技巧。RxJS 是 Javascript 的响应式扩展，用于替代 Flux 框架，可能会在小型项目中会有一些负作用，在一些负责的大型 web 项目中能够发挥很大作用。Netflix 采用 RxJS，因为 Angular2 支持并很好的使用 RxJS。由于 RxJS 是微软生产的，它也很好的集成了 TypeScript，并且在不断的完善中。

但是，RxJS 学起来比较难，不少开发者放弃了做 FRP，而在项目中用函数式开发。

![](https://s3.amazonaws.com/codementor_content/2016-May/frp_gtrend.png)

值得注意的是另外的一些预研，比如 ClojureScript 和 Elm， 但和 React+Redux 的函数式编程比起来还是有些逊色。（然而，Redux 是受了 Elm 启发的，所以有些开发者还是想去关注一下 Elm 的）

![](https://s3.amazonaws.com/codementor_content/2016-May/frp_with_redux.png)

考虑到 Javascript 的庞大的领域，很难说可能会有一些转向 Elm（当初有很多人坚信 Scala 会替代 Java，然而最后并没有）。RxJS， 另一方面，仍然是[入门较难](https://www.reddit.com/r/javascript/comments/4austh/why_isnt_rxjs_more_popular_are_there_bad_parts/)的框架，暂时无法变成主流。

随着函数式编程很好的适应了如今 web 开发的热潮，有一点需要强调，函数式编程已经成为当下 Javascript 开发人员必不可少的技能之一了。

## 桌面应用的对决：Nw.js vs Electron

如今，大量的软件需要同步数据到不同的平台（即，手机和桌面）。大部分都是起源于 web app，之后再创建桌面应用， 而为了更好的用户体验，web app 升级会又快又早。用户什么都不装都可能会卸载你的产品，由于体验不好，所以这是个比较大的考验。

在过去，人们为了那些 web 技术开发前端 UI 的桌面 app 产品，收到了 CEF 技术的验证。这并不容易，而且开发这些技术还无法跨平台。自从 2014 年，Node.js 的出现，桌面应用框架可以很好的使用 web 技术开发，并处理跨平台问题。但之后没有什么更新的东东出来。

如今，这块领域任然还有 2 个技术在做：Nw.js（node-webkit 原身）和 Electron。2 个都是很好的选择而且都有自己的有事，以下文章说明了他们的走势。

我们看下最新的 Github 关注情况：

![nwjs vs electron](https://s3.amazonaws.com/codementor_content/2016-May/js_dsktop_github.png)

from [Star History](http://www.timqian.com/star-history/)

虽然 Nw.js 出道较早而且较为成熟，但看来 Electron 的增长以指数形式增长，而 nw.js 的增长看上去是平稳的线性。

等等！是否 GitHub 的关注公平，Electron 是在 GitHub 诞生的，考虑到这个因素，我们去看下 Google 趋势，但好像或多或少反映同样的情况：

![nw.js vs electron](http://p8.qhimg.com/t01799e1aceb72c1345.png)

Electron 比较新，但已经用在了一些知名公司比如 Slack，微软， WordPress 和 Sencha.（Codementor 也用了 Electron 做了它的桌面应用）。Electron 的简单易用，它的生态系统和社区平台也逐渐壮大。它的火热程度可能会延续到 2017，使用 Electron 框架开发桌面应该用可能是开发者现在最好的选择。

## 手机端框架对比：React Native vs Ionic

自从 React Native 横空出世，人们预测 2016 年，讲是 React Native 年，考虑到跨平台的开发模式，未来将是手机开发和 web 技术的时代。如果你 google 一下 React Native app 性能  ，你会发现很多赞扬，特别是在对比了 HTML5 hybrid app，因为它跑起来更平滑。是否 2016 属于 React Native？有大片的宣扬和关注，看来它是达到了期望：

![react native vs ionic](https://s3.amazonaws.com/codementor_content/2016-May/js_mobiledev.png)

但实际是否是这样呢？当写这篇文章是，React Native 仍然没有到达 1.0 版本（现在是 0.26），所以，如果你现在想用 React Native 需要勇气和耐心去处理一些 app 问题，可能需要重构代码，还会有一些未知的问题（Codementor 也仅仅使用在手机端）。因此，我们再看一下 React Nativc 和 Ionic 在 npm 的下载对比：

![react native vs ionic](http://p0.qhimg.com/t0146ad32f20ec68390.png)

from [npm trends](http://www.npmtrends.com/react-native-vs-ionic)

从这个图可以看出，React Naitve 作为跨平台手机开发工具，正在以它的方式超越 ionic 成为开发者的最佳选择。

在如今的就业市场中，React Native 也变得了比 ionic 更抢手。

[![react native vs ionic](http://p0.qhimg.com/t0115fb9717e4a666cb.png)](http://www.indeed.com/jobtrends/q-react-native-q-ionic.html)

from [indeed.com](http://www.indeed.com/jobtrends/q-react-native-q-ionic.html)

在 AngelList 的招聘列表中我们做了简单的统计，这个结果体现了同样的问题，在 5 月 30 号附近，有 75 个关于 ionic 的招聘，有 65 个关于 react native 的招聘数据。

因此，如果在你的简历中有熟悉 React Native 技术在 2016 年绝对会给你的提供高的薪资。

## webAPI 的未来 ： GraphQL vs REST

2016 年，在 Facebook 宣布开源 GraphQL 之后，这使得大量的 JavaScript 开发人员开始研究。特别是在开源项目上，Facebook 在苹果的 JavaScript 领域做了很多贡献：

![graphql](http://p9.qhimg.com/t017e1dc4408a7b3274.png)

GraphQL 目标是代替 REST API，但 REST API 运用已经过于广泛，这个看上去好像不太可行。

![rest vs graphql](http://p2.qhimg.com/t014b31dc27c7cb2486.png)

GraphQL 做的比 REST API 要好，它虽然努力在做但目前还是没法替代 REST。而且，GraphQL 仍然比较新，还很依赖 Facebook，所以它的好的例子并不多，没有足够的学习资源来让开发者提高。因此，2016 年 看上去对于 GraphQL 来说，还是不足以使引起开发者的足够兴趣。2017 年也许会改变，但 2016 年 5 月 30 号在 AngelList 中可以看到仅仅只有 6 个招聘是对 GraphQL 有需求。

## JavaScript 走势的结论

JavaScript 社区通常都发展比较快，为了保持主流定位，必须有更多的资源，支持等一些相关信息。基于本文的 JavaScript 的趋势总结，如今的开发人员需要学习 React + Redux，需要熟悉函数式编程，学习 TypeScript。此外，还需要关注其他领域，React Native 等，同时有一些 Electron 的经验会更好。（当然，TDD 测试驱动开发，也是一直以来需要关注的）。
