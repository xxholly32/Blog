---
outline: deep
---

# chat anything 来时路

## 背景

最近做了一个工具，算是一个真正意义上 polish 的 `vibe coding` 的产品，我稍微写下我为什么要做的初心吧，大概有几个契机吧

首先是自身工作的需要，频繁在 IDE 中切换 `claude code`，即使存在 cc-switch，也经常会在不同的窗口跳来跳去，即使在一个 IDE 下，还是会存在多个 terminal 切换；我在市面上找了很多工具，比如 `warp`、`cursor agent window`，总感觉解决不了我的痛点

然后就是，其实公司很多研发同事开始能够接受 `claude code` 、`open code` 这类的产品，不过对于一些非研发同事，他们可能需要一个更简单、更直观的工具来使用 `claude code` 、`open code` 甚至去使用 skills；主要有很多产品，项目管理的同事开始找我处理 excel，word 这类的文件。

最后，我感觉公司内一些产品有点在乱起炉灶，没有基于本地优先的理念做一些工具提效，然后又是黑盒，非常局限。

> 其实还有业务的考量，还没发布我就先不写了

所以，chat-anything 就诞生了。不了解的，可以先从 内网链接无法访问 了解和下载。

## 产品阶段

### MVP 阶段

#### 最初原型

最初的 mvp 比较简单，其实当初看到了 https://github.com/nexu-io 下面的 2 款产品，`open design` 和 `html-anything`，然后把这 2 个产品缝合成了一个产品，底层也是缝合的；这里比较好的就是，他们默认会去拿本地所有 harness agent CLI 来判断，我直接抄过来了。

忽悠几个同事一起搞了一下，因为考虑到部分同事没有装任何 cc 或者 oc，那我们默认就帮忙装了个 `open code` 的安装包。这样非技术人员就可用了。

![](http://chat-anything.dev.hikhub.net/images/cli-tools.png)

#### skills 

接着是 skills，那基本没有抄，因为 `nexu-io` 的产品都有一套基于自己设计的体系，我是想大众化的，所以我直接引用了全局的 skills，主要是遵循 [skills 规范](https://agentskills.io/)：必须安装在 `./.agents/skills` 这个目录下的技能才能被主动发现。

### 一些 features 介绍

那后面都是一些打磨，我介绍一些比较重要的更新

#### 对接 lanz 的模型

公司 Lanz 还是主推，那默认可以快速集成 Lanz 的模型。

![](http://chat-anything.dev.hikhub.net/images/model-config.png)

#### 文件与预览

那为了帮助大家更好地理解当前目录的文件，以及方便 @ 文件，我增加了文件与目录的预览功能，顺便 @ 的时候可以一起 @skills。预览也比较方便，就是读取文件内容，然后显示出来。那大家日常可以复制文件的内容，去文本框内提问，比如处理一些日志文件的时候就特别好用。

美中不足的是，HTML 对于展示 Excel 和 Word 还是比较欠缺的，所以这块建议大家在本地打开。

![](http://chat-anything.dev.hikhub.net/images/chat-full.png)

#### skills 市场

skills 默认非研发人员是不会安装的，那我就搞了个市场。安装 skills 的话主要用 AI 的能力来装，没有特别实测过，所有的 skills 都是从 [skills.sh](https://skills.sh/) 这里找的。加了一点我自己的小私心，导入了 [superpowers](https://github.com/obra/superpowers) 这个技能包，可以适用在各个岗位。

![](http://chat-anything.dev.hikhub.net/images/skill-marketplace.png)

> 这块搞得还不是很到位，还需要更多的打磨；其实 skills 应该是实际使用的人才能最清楚。

#### 预览模式

预览文件的话特别要提的就是可以预览 html ，那大家可以打开缺陷单，直接选中里面的内容放到对话框，然后在研发目录里面解决问题。

预览模式还有魔法棒功能，可以直接获取网页 DOM 元素。这个模式的玩法还有很多，大家可以多多尝试。

![](http://chat-anything.dev.hikhub.net/images/defect-import.gif)

## 最后

我在内部内推了一下，收到了一些同事的好评。那我希望有更多的同事能够用起来。有使用上的问题也可以在 这里 提。

感谢下一起维护的同学 贾泽楷、于永琪、唐永杰。
