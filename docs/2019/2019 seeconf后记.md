---
title: 2019 seeconf 后记
display: home
# image: https://user-images.githubusercontent.com/6063358/67394223-681c4380-f5d6-11e9-92b6-a9463b1ce81a.png
image: /Blog/seeconf2.jpeg
date: 2019-01-13
tags:
  - seeconf
  - ui
---

2019 年初蚂蚁 Z 空间

# 2019 seeconf 后记

原文地址: [https://www.yuque.com/xiangxiao/fenw6n/udr5gs](https://www.yuque.com/xiangxiao/fenw6n/udr5gs)

作为一个重度拖延症来说，为什么不能当天写后记呢....这个习惯真的得改改了

## 第二届 seeconf 后记

### 写在前面

首先说下玉伯开始在语雀更新文章了，非常激动；要去 seeconf 要写什么内容，很简单，我写了 n 变我想见玉伯！！！

### 玉伯的开场 --  体验科技与好的社会

[https://www.yuque.com/yubo/words/tcaywl](https://www.yuque.com/yubo/words/tcaywl)

![微信图片_20190113091426.jpg](https://cdn.nlark.com/yuque/0/2019/jpeg/127166/1547342101910-343594ab-ba5e-44f7-990f-2d58b3a268db.jpeg#align=left&display=inline&height=560&linkTarget=_blank&name=%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190113091426.jpg&originHeight=1080&originWidth=1440&size=115316&width=746)

大概第 10 还是 11 届 D2 的时候还没有 seeconf，我第一次见到玉伯；是在 D2 做的开场，有一句说一句，当时想想怎么这么一个娃娃脸，说话还有些结巴的是玉伯；虽然之前他就是我技术上的标杆了；这次 seeconf 好像没有什么改善.....比起听他说，我更愿意看他的文章，所以能经常更新真是太好了；

他说了 3 点想做的：<br />体验群体发展计划：非常需要，希望大家都能有意愿的投入到设计圈的工作中；真的要提高下圈内的总体认知了，否则开发真的要被搞死了；<br />体验的普惠：可以理解为理念的普惠，也是蚂蚁金服一直再做的开源精神；<br />体验的创新：用娄院长的话说就是，技术的创新加上体验的创新，会引导集群式行为改变；关注技术创新的同时，必须关注体验的创新；

就像玉伯说的，他做的，致力于让社会变得更美好；

### 科技创新 -- Ant Design 情感化设计

紧接科技创新，周姮和梓义的情感话设计，我是给了满心的；

喜欢来蚂蚁金服的一点是，他们总会用一些数学建模，将复杂问题简单化；并带有很多理论依据，第一届的它山带我们展示了自然的魅力，这届的 antd，情感确实让人耳目一新；

**格子衫程序员漫画**<br />总结的 10 个情绪化漫画，包括后面 Datago 的拟人程序员；眼睛跟随的方式移动，都是会给使用者一定的惊喜；其实 antd 的圣诞节彩蛋，电影里面的彩蛋，让人们在看完电影久久不能离去；这体现了惊喜和兴奋的情绪；<br />之前 blibli 也有用过输入密码，漫画人物遮掩的操作；而且 blibli 的漫画人物会出现在 APP 的各个角落；这都是将情感元素具象化系统性的理念；真香~

**真实场景的情感化设计**<br />举得真实运维的实例，从用户着手，讲述优化一个流程的详细过程；真实的问题不断的优化，我影响最深的就是半夜的温馨提示，也有点类似彩蛋的概念；也会让人感受到惊喜和兴奋；之前主要关注如何使用，好用的情况下，让用户使用感觉愉悦也是很重要的；

![微信图片_201901130914261.jpg](https://cdn.nlark.com/yuque/0/2019/jpeg/127166/1547342119221-f9198822-a3b6-4331-be8c-943aa4580ebd.jpeg#align=left&display=inline&height=560&linkTarget=_blank&name=%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_201901130914261.jpg&originHeight=1080&originWidth=1440&size=103999&width=746)

### 蚂蚁金服前端框架探索之路

首先说下 umi 和云谦，就在前不久还在 YouTube 上看云谦的教学视频；也是关于 umi 的；不过当时对 umi 的理解是，一个 react 版的 vuepress，不过当时是因为研究 antd 的一个问题找到的；想研究一下打包方法（最终定位是一个 webpack 的插件）；之后公司也有人关注他，但不是因为 umi；

这次见到本尊了

![微信图片_201901130914262.jpg](https://cdn.nlark.com/yuque/0/2019/jpeg/127166/1547342132687-75b75563-e189-417f-b1a3-9f825b57094b.jpeg#align=left&display=inline&height=560&linkTarget=_blank&name=%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_201901130914262.jpg&originHeight=1080&originWidth=1440&size=94202&width=746)

要开始吐槽 umi 了，不喜勿喷，umi 有点像 vue-cli3，但又不完全是，功能没有 vue-cli3 强大，甚至有些地方的耦合性还比较大；还有一个飞开源的叫 bigfish；感觉是 vue-cli3 里面 preset 的本地文件方式，vue-cli3preset 支持远程，本地还有一个在用户文件夹.vuerc 的方式；但感觉大部分还是一样，还想做一些 umi 的 cli 集合，就像 vue-cli-plugin 一样；还有 umi-ui，感觉大神思路都是接近的；

其实我之前去 vueconf 深有体会，在说 vue 的时候，都会拿 react 做对比，比如 vue-cli 借鉴 react create app；尤大讲 vue3 也会说到 react 的 hook 功能，而我在听 react 课堂的时候，D2 也是，不过说起一点 vue；why？

### 总结

在说下会场，阿里 Z 园区的造型不错，据说从上往下看是个 Z；场馆布置的也相当 OK；主办方还有情感化设计粘纸和一些粘纸来给我们，D2 和 vueconf 好像都没有；最重要的是免费~

其实喜欢去 conf 系列比较重要一点是，比较有专业性，而不是 D2 那样，特别发散(最近几年的 D2 说实话有点飘)；而 seeconf 专注于用户体验，带给我们新的思路和灵感；虽然我是名开发，但只要心中有产品梦，用户体验是大家永远要讲究的话题；希望普惠和开源精神能够和 seeconf 一直走下去；
