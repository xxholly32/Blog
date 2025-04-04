# 最佳实践与心智负担

## 背景

最近几年内卷严重，不少工具，流程都会导致我们的心智负担增加，而与之对应的就是最佳实践；而社区，特别是国内社区对于它们的讨论比较少，我想在这里谈下我对于它们的理解，以及述说一下我在以前犯下的错误，以及从个人的角度总结下如何做到最佳实践而尽可能减少心智负担的一些建议。

先说结论：只有在不断学习`最佳实践`的情况下才能减少`心智负担`

## 还是先让 chatGPT 先来说两句

以下内容是由 chatGPT 生成的

### 最佳实践的定义

"最佳实践" 指的是在特定领域中被证明是最有效、最可靠或最实用的方法、技巧、策略等。在不同的领域中，最佳实践可能不同，但它们通常是根据经验、研究和试验得出的，以帮助人们在其工作或生活中更好地解决问题、实现目标、提高效率或获得其他优势。

例如，在软件开发中，最佳实践可以包括使用测试驱动开发（TDD）、代码重构，以及使用版本控制系统。在投资领域中，最佳实践可以包括制定明确的投资策略、经常监测市场动向，以及分散投资。

最佳实践不是固定不变的，随着新技术、新方法和新知识的出现，它们可能会随时间而改变。因此，专业人员必须保持对当前最佳实践的了解，并随时评估它们的适用性和可行性。

### 心智负担的定义

心智负担（mental burden）指的是一种精神压力，当一个人感到自己需要处理太多的任务或信息时，他们的大脑就会受到压力。这种压力可以导致疲劳、焦虑、沮喪和其他心理健康问题。

心智负担通常是因为一个人的工作量或生活任务过多，以至于他们难以应对所需的信息处理量。它也可能是因为工作或生活压力过大，以至于一个人感到难以掌握。在这种情况下，人们可能需要采取措施来减少心智负担，例如改变工作流程、制定计划、学会更好地分配时间和精力，或寻求专业帮助。

### 如何才能输出最佳实践

要输出最佳实践，您需要从以下步骤开始：

1. 确定您要输出最佳实践的领域：您可以选择您感兴趣的领域，例如软件开发、教育、商业管理等。
2. 了解当前的最佳实践：您可以通过阅读有关书籍、文章和博客、参加培训课程或者参加专业社区来了解当前的最佳实践。
3. 评估最佳实践的适用性：根据您的特定需求和环境，评估最佳实践的适用性和可行性。
4. 结合您的实际情况：根据您的特定需求和环境，结合最佳实践，以创建适合您的实践。
5. 实施并评估：实施您的最佳实践，并评估其实际效果，以确保它们是有效的。
6. 持续改进：随着时间的推移，不断改进和更新您的最佳实践，以适应新的情况和需求。

这些步骤可以帮助您找到适合您的最佳实践，并确保您的实践是有效的。

个人觉得，心智负担的解释对于程序员来说少了点意思，我个人的理解是这样的：`学习或理解某些事物时，需要付出的额外意志努力以及时间。`

### 我产生的心智负担

其实在一直以来的 公司内部基建库 开发与维护过程中，我发现我给很多开发者带来很多心智负担。比如，

+ 这个 element-ui 有但我们没有。
+ 这个 npm 包的这个功能不支持，怎么办？
+ 这个 基建 没有，我做不了。

举个实际的例子，当我认为业务可能会产生一些通用的需求的时候，那我会封装一些通用的东西，比如公司内部某个 `utils` 包有个功能是专门做正则表达式的；当时的需求确实是因为大家都需要做校验。而这个功能刚好适用于当下的所有前端项目。

但是，今天我回头再看这个功能，会产生几个问题：

1. 首先不知道的业务同学要理解这个概念，他要学习我封装所有的 api，这个本身就是一层心智负担，甚至有些 api 几乎在别的项目中用不到；甚至我看过一些同学基于我的 api，封装了一些 mixin ，又多了一层心智负担。
2. 同学们在使用的时候，无脑的去调用，不会知道为什么这个正则要这么写，当初我们为什么定义这个规则的。他们可能会忽略这层业务理解。比如我们的设备名称，为什么只能选这些，其他的为什么不行？（其实当初我们是和设备端一个一个对过的）如果错他认为也不是他的错，是做这个 `npm` 包的人的错。
3. 大家不知道技术实现原理，说明白点就是大家忘记了如何使用原始的api (regExg)；现在即使我们组，不会写正则的也大有人在。

而我封装的库没有几十应该也有上百，这样的心智负担，是非常可怕的`伪财富`；上面这个例子其实也适用于工具，流程，规范等等

当然不仅仅是我，其他人也会产生心智负担给我，比如：我最早来公司的时候，某个流程单，必选项只有一个。而现在必选项茫茫多。

`vue` 也是，它的封装其实也导致了一些问题，不需要让我关注底层 `MVVM` 的实现，甚至不让我去关注一些先进的 api 。比如我现在理解 `Vue.computed` 其实比 `Proxy` 要更深入。

### 解题思路

我觉得 chatGPT 说的如何才能输出最佳实践是对的，但我要补充一些有关它说的 `根据您的特定需求和环境`；因为我们的工作是不可能完全自由的，我们需要遵循一些规范，遵守一些纪律，而中国这种体制的大环境下，任何组织的腐朽是一种必然，需要站出来去奋起反抗一些不合理的组件，工具，流程，规范等等。有些人有些事可能当时是对的，但不一定一直对。

> 但很难，我光去 IE 就去的身心疲惫，有时候做成一些事需要天时地利人和，不能靠着满腔热血

### 一些技术上的建议

回到技术层面，随着IE的移除，那我们对于浏览器跟随时代的浪潮已经可以跟得上时代了。那么最新的api我们可以第一手用到，甚至用到项目中，就在昨天一个新的功能来了 webContainer <https://juejin.cn/post/7201464975722332216> ，是一个跨时代的变革了；对我们的要求是时刻关注最新的技术，不要被固化的思维所束缚。有可能下个风口就在一次浏览器或者系统的更新上。

> btw 还有一点那就是基础，如果尤雨溪没有强大的前端基础，那么 vite 可能就是其他人做出来的了。

另一个建议，不要过度封装，尽可能原子化；所以我做了 [vue2-sfc](hhttps://vue2-sfc-playground.vercel.app/)，当然社区也有很多好的实践，比如 [codepen](https://codepen.io/)， [vue-playground](https://sfc.vuejs.org/) 等。如果一定要做一些 `npm` 或者工具的封装，尽可能保持解耦，也可以考虑下 `tailwindcss` 的实现，他的好处就是当你使用它的时候，其实你就在学习真正的 css 了，而不是仅仅在学习它的 API。

> 尽可能的少做一些封装，来减少后人的心智负担；打工人何苦为难打工人

### 最后我的一点小想法

经过 vue2 和 vue3 的事情以后，我发现，也许，vue3 也不一定是对的。也许，有个 `js+css` 的组件库也不一定是对的，我们的组件库是否应该更加轻量化，比如使用原生的 `DOM`。

## 总结

其实写这篇文献的目的还是说以我个人的经历告诉大家，我在以前的工作中犯下的错误，我在以后的工作中如何避免这些错误；以及我结合 chatGPT 总结的一些个人经验。

由于现阶段内卷严重，我不太希望在基建上非常卷；在公司内部出现各种心智负担的组件，工具，流程，规范；
