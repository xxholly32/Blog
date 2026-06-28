# 如何给 HUI 贡献

## 背景

最近和同事做了一个小项目，关于 内网徽章 的，可以看到HUI 和 本网站的头部都有了专属徽章。我看到一个数据是 HUI 的贡献人数已经达到了 80 个人。

为了避免在公司内部内卷，我还是希望有更多的前端同事能够参与到 HUI 的开发中来，所以我打算写一篇文章来讲述下如何给 HUI 做出贡献。

## 提出你的意见

俗称"提 issues"，这是最简单的方式；其实你只要有想法，不一定是bug，文档不全有歧义等，都可以提出您的意见，如果是合理的，我们会考虑采纳以及回复。提 issues 的地址在这： hui-vue-issues

在提出问题前，我也建议您看下以下2点：

+ 如何提出一个好的问题
+ 如果是一个缺陷，尽可能的「请提供最小重现」，这样我们才能更快的定位问题。

hui 我们提供了 在线工具 ，可以在修改完代码后，通过url分享给我们，并把缺陷描述清楚，我们就可以快速的定位问题。

## 如何提交代码

> 如果您不想参与，觉得这个并不在职责范围内，可以跳过后续的章节

### 1. fork 项目

每个仓库都有 fork 按钮，可以 fork HUI 仓库 到你自己的仓库。

### 2. 拉取并创建分支

拉取（clone） fork 完的仓库，并提交到自己的仓库中，然后创建一个分支，分支名字可以自己定义，比如 `fix/xxx`，`feature/xxx` 等。

> 每个分支的 README.md 文件都有写如何安装并启动项目的命令，可以参考。

在修改完代码后可以提交到自己的仓库中，然后在自己的仓库中创建一个 merge request，这样我们就可以看到您的代码了。

### 3. code review

我们会对您的代码进行 code review，如果有问题，我们会在 merge request 中进行回复，如果没有问题，我们会合并到对应分支中。

以上就完成了一次代码提交了

OK 看完以上的内容，您基本已经会了如何给 HUI 贡献了，如果您还想了解更多社区，可以继续往下看。

## 社区是如何做的

一般来说成熟的社区在 README 中都会有一个 CONTRIBUTING.md；我们先来看看vue 的 [CONTRIBUTING.md](https://github.com/vuejs/core/blob/main/.github/contributing.md)

成熟的社区对于每个feature有需要有自己的测试用例，对于 git commit 需要加入类似 (fix #xxxx[,#xxxx]) 的标题；

但 vue 对于功能引入会比较特殊，它还有一个仓库叫做 [vue rfcs](https://github.com/vuejs/rfcs)，它也有对应完整的生命周期，就对于一些提案，会先在 rfcs 中提出，然后在社区中进行讨论，最后会有一个决议，然后在 vue 中实现。当然每个体验背后需要澄清相关的理由以及设计思路。

这里也可以看下社区的个人维护的 vue 提案库 [vue-macros](https://vue-macros.sxzz.moe/guide/getting-started.html)，比如 defineProps，defineModels 都已经在 vue 3.3 中加入到了 vue 中了。

> 可以看到即使不改动 vue 的源码，也可以魔改 vue 的源码。并最终被官方给收录。

还有一个著名的组织是 tc39，也就是 ECMAScript 语法诞生的组织的地方，也是有严格的审查制度，往往一个 api 的落地需要经过 1~n 年的时间，比如这个 [JSON modules](https://github.com/tc39/proposal-json-modules) 的提案，现在在stage 3。可能不久的将来就会在浏览器中看到了。

## 提供最小实现

如果可以科学上网，可以看下这个实现：<https://antfu.me/posts/why-reproductions-are-required-zh>

## 总结

最近我在 hui 问卷调查中看到大家对 hui 的各种问题，但是我们的资源有限，所以我们需要更多的人参与到 hui 的开发中来，这样才能更好的服务于业务。只要能提出合理的问题，最好能带来解决方案，我们都会考虑采纳。