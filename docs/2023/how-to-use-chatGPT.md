# chatGPT 使用指南（一）

> 本文严谨转载 🚫🚫🚫

## 背景

最近由 openAI 发布的人工智能工具席卷全球，随着人工智能技术的不断发展，它已经变得越来越普及和实用。ChatGPT是一种基于GPT-3.5架构的大型语言模型，它可以在各种应用场景中进行文本生成、问答、语义理解等任务。相比于人类，ChatGPT可以在几乎瞬间完成大量的数据分析和处理工作，使得它在许多领域中具有巨大的优势。

但是，随着ChatGPT等人工智能工具的普及，很多人担心人工智能会逐渐取代人类的工作，让我们变成无用的“工具人”。这种担忧虽然不无道理，但我们也不能否认人工智能工具在许多方面的重要作用。因此，我们应该积极拥抱人工智能工具，将其作为我们的帮手，用好它们，而不是被它们所替代。

为了更好地利用ChatGPT这样的人工智能工具，我们需要了解它们的特点和优势，掌握它们的使用方法和技巧。这就是本使用指南的目的：为您提供一些实用的建议和技巧，帮助您更好地利用ChatGPT等人工智能工具，提高您的工作效率和创造力。

### 本文主攻前端

由于 chatGPT 能做的事情超多，那我本文主要还是讲下 chatGPT 在前端领域能做的一些事情。但我觉得用下来，我已经不再是个前端开发工程师了，我可以涉及到各个领域了。之前开了很多系列文章，我相信这个肯定会有二的。

## 安全 🚫🚫🚫

2023的人大一直在强调关于创建有中国特色的硬件与智能大模型底座，也在讨论现有开源体系建设的短板。也有一些言论说是要求年轻人重视chatGPT，也有企业家在中国企业家的讨论年会中提到：`企业家如果没玩过ChatGPT，没资格谈高科技发展`，虽然都没明说，但是都是在鼓励大家去拥抱科技的发展，去使用和了解chatGPT。这里会涉及到中国网络无法访问等问题，这个我觉得和疫情封锁是一个道理，可能总有一天会放开的，但我不想在这里讨论它（不符合中国网络安全）；解决这个事情的方法有很多种，如果你不会或者做不了，那接下去的内容就不适合你了。或者你可以考虑去了解下文心一言。

> 我这里不说文心一言是因为我还没拿到内测资格；非常希望中国的物理芯片厂商能够快速追赶上美国。

有关 chatGPT 的安全性，其实不能叫安全性，这个已经上升到人类与计算机的伦理性问题了。由于 openAI 是人训练出来的，因此它可能会反映出一些人类偏见和刻板印象。如果这些偏见和刻板印象被不当利用，可能会对人类造成歧视和伤害。因此，在使用ChatGPT时，我们需要审慎考虑其潜在影响，并努力减少可能的负面影响。openAI 公司也在不断改进和优化ChatGPT，以减少其可能造成的伤害。其实没有绝对的安全，只有不断完善的防御系统。

## 初步了解 chatGPT

当然是从官网去了解了，[openAI](https://openai.com/)，这个网站是英文的，但是我觉得不用翻译，因为英文的网站更加专业，更加有权威感。这个网站上有很多关于 chatGPT 的介绍，我就不一一介绍了，你可以自己去看。我只从它的 example 着手，带你们去了解 chatGPT。

## 官方的 [example](https://platform.openai.com/examples)

虽说大家都知道chatGPT的强大之处，但官方的demo总是一种最佳实践，它也提供了 [playground](https://platform.openai.com/playground)，我拿它其中一个例子看下。

![](/imgs/chatGPT/example.png){data-zoomable}

这是一个 JavaScript 的聊天机器人，你可以咨询它 JavaScript 的一些问；cursor 和 github compilot 的一些功能应该就是基于这个逻辑去做的。

以下内容截止2023年3月28日，都是官网 example 的 demo，我大致分了下类

### 和前端密切相关的

+ Calculate Time Complexity 求函数的时间复杂度
+ Translate programming languages 转化语言
+ Explain code 解释代码
+ JavaScript helper chatbot （JavaScript 助手聊天机器人）
+ JavaScript to Python 
+ JavaScript one line function JavaScript 单行函数
+ Create study notes 提供学习计划

### 其他相关

+ Natural language to OpenAI API 使用自然语言指令创建调用 OpenAI API 的代码。
+ SQL translate，SQL request 将自然语言转换为 SQL 查询。
+ Parse unstructured data 解析非结构化数据
+ Classification 分类（包含情绪）
+ Python to natural language 从 Python 到自然语言
+ Movie to Emoji 电影到 emoji（看故事说内容）
+ Ad from product description 编写文案
+ Product name generator 起名
+ python bug fixer （python 代码修复）
+ Mood to color 根据情绪选择颜色
+ Notes to summary 从会议纪要到总结

可以看到一些后端或者算法工程师能做的事情，前端开发也是可以做了。

> 更多 [ChatGPT 中文调教指南](https://github.com/PlexPt/awesome-chatgpt-prompts-zh)

## prompt 工程师

其实可以看到要用好 chatGPT，就是要学会写 prompt，其实就是提出一个正确的对话或者问题，这个是最重要的。所以我觉得 prompt 工程师是一个很好的职业方向，我也会在这里介绍一下 prompt 工程师的工作内容。

"Prompt 工程师"通常指的是一种职业角色，主要负责编写和优化使用 GPT 等大型语言模型的文本生成算法和系统。这些算法和系统可以应用于多个领域，例如自然语言处理、智能客服、智能写作等。

Prompt 工程师需要具备一定的编程和机器学习知识，能够使用 Python 等编程语言进行开发和调试。同时，他们还需要了解自然语言处理、计算机视觉等相关领域的知识，以便在算法设计和优化时能够充分考虑这些因素。

Prompt 工程师还需要具备良好的沟通能力，能够与其他团队成员进行有效的协作，例如产品经理、数据科学家等。他们需要理解业务需求，根据需求设计并优化相应的文本生成算法，从而提高系统的效率和准确性。

## prompt 的分享

现在业界对于 prompt 的分享是比较少的 openAI 也只是对独立账号进行了预置上下文。所以我这里分享一个开源的 prompt，<https://github.com/rockbenben/ChatGPT-Shortcut>，业界对于 openAI 的底层 api 调用，预置上文，进行二次创作的工具也层出不穷我就不介绍了，这里我分享下我个人觉得能够提高我们（前端开发工程师）工作效率的一些 prompt，以及实际案例。

> 由于 chatGPT 4 的回复较慢，所以我都是用 chatGPT 3.5 进行测试的，但已经完全满足我的需求了。

## 我的 prompt 分享

### 1. 生成代码

生成一个 3D 珍珠奶茶：<https://mp.weixin.qq.com/s/VWwY0ZnyoK-h6NbpzdQjZw>

这篇文章写了非常详细了，对于不懂three.js的同学，可以看看这篇文章，我觉得非常不错。

### 2. 查找资源

但我对于 3D 模型的生成，还是比较感兴趣的，有时候又不想自己写，那我自己又提了个 prompt。

![](/imgs/chatGPT/find-model.png){data-zoomable}

那其实不仅限与技术文档，这种资源类的都非常多，市面上现在最火的比如 MidJourney，但可能我们不太用得到。

### 3. 调整代码

对于代码审核来说，可能我们在我们的知识范围内并不知道这个是不是最优解，我这里有个 prompt：

![](/imgs/chatGPT/fix-code.png){data-zoomable}

可以看到，对于源代码 `if(value < 0) value = 0; if(value >= 100) value = 100;` 我看的时候就觉得别扭，但想了很久也没什么好的方案😢，这里它给出了一个更优的解法，就是`Math.min(Math.max(0, 1), 2)`这个解法。

ok 这里还有一个点，其实我给它输入同一段demo代码，它给出的结果是不一样的，有些答案是不带 `Math.min(Math.max(0, 1), 2)`，而是用了比较复杂的三元去解。所以，我感觉 chatGPT 是不会记录我们给它的问题，它更多的只是负责回答。（这个对于信息泄漏来说非常重要）

### 4. 生成文案

我们比较重要的工作内容是写需求和设计文档，这里我分享一个生成文案的 prompt。多图警告：

![](/imgs/chatGPT/workorder-1.png){data-zoomable}
![](/imgs/chatGPT/workorder-2.png){data-zoomable}
![](/imgs/chatGPT/workorder-3.png){data-zoomable}
![](/imgs/chatGPT/workorder-4.png){data-zoomable}

ok，虽然我问的点不是很多，但可以看得出来，它里面的内容已经实现了很好了。特别是 DFX 需求，以及表结构设计，让人眼前一亮。在问题的选择上我们的前置条件给的不够充足，但他们还是给了一些技术选型方案，这个是非常棒的。所以如果我们的前置prompt写的好，那么它的回答也会更好。

需求变更记录，这块我不理解为什么它给的是未来的时间，有种骗人的感觉，体验不太好。

🤔🤔🤔 我们继续问它，看看它能不能给我们更多的内容：

上面是对于设计，那对于产品端我们能不能问一些呢？比如我比较诟病我们的产品经理不会看别的产品，那我们可以问它：

![](/imgs/chatGPT/workorder-5.png){data-zoomable}

😘😘😘 amazing，看来前端做产品应该不难了。

🤔🤔🤔 那我们继续问下，能不能生成交互稿呢？

![](/imgs/chatGPT/workorder-6.png){data-zoomable}

🤣🤣🤣 ，看来我们变成设计师还有一段路要走。

### 5. 奇技淫巧

![](/imgs/chatGPT/find-emoji.png){data-zoomable}

🤣🤣🤣 说实话这个功能，我自己都不知道，平时我都是浏览器存了一堆emoji的网页链接，去复制黏贴的。

## 总结

chatGPT 的 prompt 还是非常强大的，它能够帮助我们提高工作效率，本文主要还是讲了一个入门（因为我自己也才入门）。但可以感受到它的强大已经可以帮助我们提高工作效率。就像 openAI 创始人 Sam Altman 说的那样，一个能够流行的成功的工具，是在于你用过以后非常分享给别人。这也是我写本文的目的。😉😉😉

未来还有一些计划与打算，比如生成交互稿，生成代码等，可能要结合它底层的api，以及一些开源的工具做结合。包括市面上同类产品的对比与分析。如果有兴趣一起研究的话可以联系我，我个人感觉 二 应该很快会问世。

## 参考文摘

+ [openai官网](https://openai.com)
+ [ChatGPT 中文调教指南](https://github.com/PlexPt/awesome-chatgpt-prompts-zh)
+ [一个 prompts demo：3D Bubble Tea created by GPT-4](https://mp.weixin.qq.com/s/VWwY0ZnyoK-h6NbpzdQjZw)
+ [一键轻松查看、分享和执行您的 Prompt](https://github.com/prompt-engineering/click-prompt)

## 后话

> 能看出来本文那些内容是chatGPT生成的吗？

想要了解 chatGPT 的核心原理，B站有个up主 叫 YJango，本身他也是研究人工智能的，他有个视频讲解了 chatGPT 的原理，以及我们如何应对接下来可能带来的冲击，我觉得非常不错，可以去看看，可能在一定程度上解决您的焦虑。

最近在看《人类简史》，里面序言就提到了 chatGPT-3；

![](/imgs/chatGPT/人类简史.jpg){data-zoomable}

人类文明在不同文明之前转变都是一个新的工具所带来的，庆幸活在这个时代，因为有了 chatGPT。