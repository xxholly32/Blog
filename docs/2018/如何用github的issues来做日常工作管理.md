---
title: 如何用 github 的 issues 来做日常工作管理
image: https://cdn.stocksnap.io/img-thumbs/960w/BRHQBEKMEW.jpg
date: 2018-01-01
tags:
  - skill
---

# 如何用 github 的 issues 来做日常工作管理

## 如何理解 Issues

### 起源

Issue 指的是一项待完成的工作，通常与系统的改进相关，中文可以译为"问题"或"事务"

- 一个软件的 bug
- 一项功能建议
- 一项待完成的任务

这些都是 issues 的例子

### 了解 issues 的过程

个人我用的 issues，只是一个提缺陷的地方，或者是建议；我用于一些项目的问题反馈，甚至偷懒一点我直接是当做日记记录的一个地方。

今天我接触到一个事情是在阿里云平台，我注册了开发账号，进行一个智能业务的开发工作；有些问题线上无法解决，我给他们提了一个工单，当时有人就直接给我 call，并帮我处理了问题；

从公司，项目内部，到跨公司，跨语言，等我们都可以采用 issues 的方式去管理问题

### 涉及范围

由于买房危机，有人开始关注买房的 blog，大家纷纷关注。这时候就可以采用 issues 管理办法，采用计划流程的方式给自己提 issues，制定时间点等。

生活处处都可以给自己提需求，然后制定计划并落地，小到看一本书，大到制定长远的计划，都可以制定我们的 issues；看一个有意思的例子[判断 HipHop 歌词韵脚](https://github.com/JimmyLv/jimmylv.github.io/issues/274)

## 实践

### 通过 GitHub Issues 收集需求

在 github 上建立自己的仓库，并在 issues 列表上提出自己的需求，[https://github.com/xxholly32/xxholly32.github.io/issues](https://github.com/xxholly32/xxholly32.github.io/issues) ；我自己的第一条就是开始使用 issues；

**GitHub issues 的进阶用法**

与此同时，新建 issue 还有更高级的用法，也就是通过 ISSUE_TEMPLATE 这样一个模板来新建某个 issue，从而更快地定位问题所在和解析自己的想法，最主要的是能够输出更具体的 TODOs，即下一步行动的具体内容，这个还会在后面详细解释的。

[Creating an issue template for your repository ](https://help.github.com/articles/creating-an-issue-template-for-your-repository/)

- issue 和 issue 之间是可以通过 # 相互连接的，甚至可以跨仓库，被 reference 的 issue 也会出现在另外一边的 issue 里面；
- 而通过 #! 符号是可以在 comments 里面直接新建一个 issue 的，这在思维爆炸的时候来得特别爽快；
- 你还可以随意艾特你的小伙伴们 @ziyi2，互相监督、互相学习或者给出 Constructive Feedback 之类的，😂；

### 计划与执行具体任务

**epic**

基于 GitHub 的项目管理方案 ZenHub 最近创造了“Epics”。这个新工具提供了一个完整的 GitHub 问题和问题管理的返工方案，旨在在 GitHub 中完全管理产品开发过程。

大胆地把 issues 作为你的个人需求列表吧，需要解决的问题可以大到做一个开源项目，或者小到读一本书、写一篇文章。对于比较大的需求，你还可以将其转化为 Epic 然后把拆分过后的小 issues 们加入到这个列表里面来。

**Milestone**

milestone 主要用于定制计划，一个 issues 只能绑定一个 milestone。我自己的工作流[https://github.com/xxholly32/xxholly32.github.io/milestones](https://github.com/xxholly32/xxholly32.github.io/milestones)，关联了我自己的一些 issues，更好的能够跟进我们的项目管理；细分我们的工作流；

### zenhub

而 GitHub (with ZenHub) 强大的 issues 管理能力绝对会让你的迭代工作变得井井有条，使用 GitHub 新出的 Projects 特性或者使用 ZenHub 的 Boards 应该就可以让你瞬间有了日常敏捷工作的感觉了吧！

### 如何协同工作

在项目中可以邀请小伙伴来一起解决你的 issues，邀请他们来之后，可以分配 issues 给他们；也可以让他们参与你的计划，项目等。还有就是之前说的，直接在 issues 里面@艾特他，让他能一起参与进来。

在个人主页的总的 issues 里面[https://github.com/issues](https://github.com/issues) 可以看到 assgined 就是你协助的，Mentioned 就是项目中留言@艾特你的。

## 后话

也许你很喜欢这个解决方案但又不太想公开自己的 issues 列表，那可以试试 GitHub 的 private repo（需要付费），免费的可以试试 GitLab，支持从 GitHub 一键导入，并且已经原生支持了 pipeline 和 kanban 功能。当然咯，不限于工具或软件，这一套方法论其实是可以运用在任何地方的，甚至于我们可以来做一个结合敏捷方法论的个人学习管理软件也不错嘛！

但是于我而言，选择在 GitHub 这样一个公开环境下记录学习的最大一个动机就在于「开源」，很喜欢一句话，大意是「在这个互联网时代，能限制住学习的只有你的求知欲」。当你从互联网这个广阔的知识海洋当中汲取知识的时候，也应当有所输出到即反哺到整个互联网当中去。我会经常写博客/笔记来总结分享自己的所学，但是一篇文章诞生的背后往往还有很多其他知识和经验的相互交融与沉淀。Issues · JimmyLv/jimmylv.github.io 这个列表里面的某个 issues 最终能否演变成一篇文章我不知道，但是基于 GitHub 开放式的学习历程都会被这些 issues 如实地记录着，任何一个想法都能追本溯源被找出最开始的缘由。

出自[https://blog.jimmylv.info/2016-12-04-agile-learning-based-on-github-issues/](https://blog.jimmylv.info/2016-12-04-agile-learning-based-on-github-issues/)

**参考文献**:

- [基于 GitHub 的敏捷学习方法之道与术](https://blog.jimmylv.info/2016-12-04-agile-learning-based-on-github-issues/)
- [熟练使用 Issues](http://blog.csdn.net/github_30605157/article/details/52837864)
- [如何使用 Issue 管理软件项目？](http://www.ruanyifeng.com/blog/2017/08/issue.html)
- [ZenHub Epics 创造了 GitHub 中敏捷 Epics](http://www.infoq.com/cn/news/2016/04/zenhub-epics-github-agile)
