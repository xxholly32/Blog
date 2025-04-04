# 与托尼（antfu）面谈

> 本文严禁转载

## 怎么有这个机会的

首先可能大家不知道托尼 Anthony，可以通过他的官网：[https://antfu.me/](https://antfu.me/) 了解到他。他是 vue、vite、nuxt 的核心成员；他做过VueUse，Vue Demi，Vitest，Vitesse，UnoCss 等等

大概在某次直播中 [一起来看《开源软件指南》](https://www.bilibili.com/video/BV1ds4y1c7dV/?spm_id_from=333.999.0.0)，他提到了有这次机会，然后我就咨询了一下。

> 当然要支付一定的费用的

由于托尼都是在法国，我们基本都是在 discord 中聊天，然后用的是腾讯会议，（其实他还提供了Around 和 Zoom，但是我都没有用过，所以就用了腾讯会议）

## 会谈内容

在会议前10分钟他问我: `如果你有准备好问题可以先发给我，不然我们轻松聊天也可以。待会见！` 我提前一天准备了下，发给了他；然后就正式开始了

先做了自我介绍了，主要是公司以及我们现在工作的情况。然后就开始问了，他一开始回答第一个问题的时候也感谢了我多年的 sponsor；

### 1. 如何教大家做开源，或者教大家一些开源的理念

我的问题大概这么写的：

> + 我在公司内部做了很多内源，我自己负责组件库，脚手架等，但无法号召大家来做
> + 我最近在做校招培训和校招面试，我想把开源的理念，或者说开源的做事风格传递给他们；我们搞了很多培训和面试题，比如vue的，js的，但我都不是很满意，因为 chatGPT 其实都知道；我写了第一章 如何提问好第一个问题，但是我不知道如何继续下去；
> + 我曾经带过一些有开源能力的同事，但当我不传达管理命令的时候他们就不去做了，比如维护 vue-cli 的缺陷等，但是仅仅是我的命令或者安排；当我不安排的时候，他们就几乎没有什么贡献了；
> + 还有一些就是有意愿，可能没能力的人，提不出问题的人，我想帮助他们，但是我不知道如何帮助他们；
> 我个人希望的是，在有限的能力范围内，尽可能的帮助，校招生，新人，能够从应试教育的那种理念中抽离出来；你觉得我应该做哪些培训或者写哪些博客？
> 比如做个 opensource-chanllenage ？

这个问题我们大概交流了 20 分钟，其实他并没有完全解决我的问题，但是他说了一些很有意思的东西：

他其实自己有一个观念就是，用到了再学，就比如当他做 vitest 的时候，其实他根本不会如何写测试用例。就还是用到什么，发现用的不爽的地方去改进它。

需要反馈 feedback，其实他会想说做出一些 idea 的时候会发在 twitter，他原话就是：就我会去要糖吃，等着你们来夸我。这就是一些正向的反馈。当然对于我们公司来说可能暂时没有这样的平台。或者说有，但其实知道的人不多。

对于开源（或者我们是内源），你需要去宣传，其实feedback就是一种，但其实不仅仅是这个，你还需要更多的维护的东西，让更多的人使用。也需要自我宣传。

问：做开源的人需要具备哪些特质？

答：功利心（找工作），沟通，宣传，比较耐心（很认真），需要被别人看到，不要妄自菲薄，但没有人时候完全准备好，迈出第一步

> 我个人觉得感恩的心也比较重要

### 2. 有关 vue3 和 vue2 的一些问题

> + 有关组件库，我司主要是spa么
> > + 最早我是基于 element-ui 1.4.7 版本拉的，一直用到现在；但现在慢慢转到了 vue 3 么；
> > + 我现在选的是 element-plus ，一方面是可能会兼容一些；但感觉上现在 element-plus 有点大，而且维护情况感觉并不如容乐观。但现在它的组件解耦做的还可以，但还不是完全monorepo，现在除了交互完全不兼容的，我基本都试复用 element-plus 改改样式解决的；
> + 对于组件库来说，比如 组件Z，其中某个 props 值 有A,B，默认是A，但其实在我司，默认应该是B；现在市面上的组件库好像都没办法实现这样的功能，这就可能会导致，我会把这个组件完全重写，或者再把它包一层；
> + 其实vue 2 到 vue 3还是蛮伤的，比如组件库肯定不兼容，即使有 vue-demi ，可能也无法做到比较平滑的迁移，那么 vue 组件库这件事情是不是不对的，或者选用 vue 是否也会存在问题，比如现在solidjs也比较火只是生态不行。其他 headless ui、 web components；
> 我司开源能力弱，还是希望开源的组件库和底层能够切换尽可能少，以免每几年出一次血。

首先他其实说，vue 其实并没有官方推荐的组件库，所以选啥都行，如果你觉得ok 可以参与他们的贡献，如果不ok，可以自己写，或者改造。这块他并没有接触那么多。但对于开发者来说，其实不用等着社区来做，如果有需求，你自己做就可以了。对于选择来说，尽可能选择一些侵入性比较弱的工具，这样可选择或者能走的路会更长一点。

其实可以看下[vue-macros](https://github.com/sxzz/vue-macros)，vue 做不到的功能其实它就可以做，并不需要完全依赖与 vue，能够和 vue 共存，并且反哺到vue中，部分已经在 vue 3.3 落地了。

然后对于我提的props 这点，其实我和他聊完我们觉得可以做，回头我就做了这个 <https://github.com/xxholly32/vite-plugin-custom-attr>

### 3 聊了一些开源的工具

> + 类似与 playground 的集合，有点像 codepen。但不确定有没有价值；
> > + 如果有是否可以 vue3 搞个好一点的，感觉 vue3 的 组件库 ，vueuse 的playground 都不一样
> + 博客与 wiki 我们都有，包括 内网的简易版 vercel，是否要搞个 类似 algolia ？如何看待 AI 自动回复机器人，这块有什么思路吗？
> + vueuse 有点长了，我曾经也做过类似的，就存在一个问题就是如果我有一个包，里面有n多工具库，我只能看到总的npm包的下载量，但我看不到每个工具的使用情况，导致我无法判断某个工具是否值得去维护。

对于 playground 的事情，可能因为尤大比较忙，他没精力管这个，而且社区也没有比较好的方案，或者说社区推进这块共建的意愿没有那么强烈，所有还是各自做各自的 playground 。如果有兴趣的话，他也是建议我可以提出一些建设性的意见。

对于自动回复机器是，nuxt 团队也在观望中，等到社区有比较好的方案再跟进。

对于 vueuse 这块，他其实有对开源包进行检测，具体哪些包使用的频率是多少。不过对于内源的包建议做好 monorepo，然后再用一些钩子来做统计，这样就可以看到每个包的使用情况了。

我听下来，开源工具来说，也是一块比较大的事情。要做好确实不容易；当然设计非常重要，其次就是把前面，`问：做开源的人需要具备哪些特质？`的答案做好。

## 后续

后面还和他约了一下，如果海康有一些培训，邀请他参与一下，他也是很乐意的。
