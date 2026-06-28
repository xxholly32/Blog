# AI 编程在日常工作中的实践 (2025)

## 背景

AI 其实不只是可以程序员用，非程序员也可以使用。我举几个简单的例子来说下我的实践与思考

> 在 通用软件 《AI 编程在日常工作中的实践》 培训，文字版本

## 📊 案例实战 1：Excel 智能分析

根据老板的要求，要将25年的问题清单分析一下，原话如下：

`各业务的软件典型问题需要做分析，包括视频、停车、门禁，测试主管提供了原始的问题列表，和数据统计。`

> 项目地址：内网链接无法访问

### 1. 数据治理 （手动）

+ 一次分析一部分内容，我这里就分析了门禁的，原文 excel 比较长，几w条，上下文吃不消
+ 将 excel 文件去除不必要的列，仅保留需要的内容
+ 存成csv （我认为更适合大模型解析，没有excel那些单元合并等奇怪的内容）

### 2. 问题分析 （大模型）

Q:  

```bash
@excel-analysis\acs\25门禁问题.csv  这个是我们产品某类功能的问题明细
你是一名资深懂技术和产品的产品经理，基于这些问题你帮我从多个维度去分析产品的问题，有以下要求
1. 并列出相对的数据指标
2. 对于重复和高频的问题要特别注意
3. 最后对问题进行总结
4. 给出下一步的行动 计划 
5. 输出你的报告给我，文件格式是 .md 文件

注意：请务必保证数据准确性，不要有造假行为
```

大模型关键步骤

```bash
● Read(excel-analysis\acs\25门禁问题.csv)

● Bash(wc -l "E:\xxworkspace\claude-code-for-business\excel-analysis\acs\25门禁问题.csv")

● 让我创建一个任务列表来系统地分析这份门禁问题数据。

● Bash(head -1 "E:\xxworkspace\claude-code-for-business\excel-analysis\acs\25门禁问题.csv" | tr ',' '\n' | 
      nl)
  ⎿       1     出货年份（度量）
          2     出货月份（度量）
          3     出货时间

● 让我使用Python来分析这个CSV文件，因为数据量较大。

● Write(analyze_access_control.py)

... 这里省略3个脚本

● 在让我更新任务状态并开始生成最终的分析报告。

● 现在我将生成完整的分析报告并保存为Markdown文件。

● Write(门禁产品问题分析报告.md)
```

### 3. 生成报告 html （大模型）

Q:

```bash
@excel-analysis\acs\门禁产品问题分析报告.md 我移动到了这里，帮我在这个目录下把这个文档的内容生成报告做成一个 html ，亮色系，不要用紫色
```

大模型关键步骤

```bash
● 我将为您创建一个亮色系的HTML报告页面。

● Write(excel-analysis\acs\门禁产品问题分析报告.html)
```

### 4. 生成报告 ppt (大模型)

大模型其实无法生成 ppt ，那可以通过 [anthropics/skills](https://github.com/anthropics/skills/blob/main/skills/pptx/SKILL.md) 它的思路是先做成html，然后再转成ppt

+ Q:

```bash
@excel-analysis\acs\门禁产品问题分析报告.md                                                              
我移动到了这里，帮我在这个目录下把这个文档的内容生成报告做成一个ppt，请使用你的ppt skills来实现
```

大模型关键步骤

```bash
● 我将使用PPT技能为您生成门禁产品分析报告的演示文稿。
● Skill(pptx)
● 我将使用PPT技能为您创建门禁产品分析报告的演示文稿。根据您的门禁产品分析报告内容，我将创建一个专业、清晰的PPT。
● Write(excel-analysis\acs\slide1.html)
● Write(excel-analysis\acs\slide2.html)
...
● 现在我需要安装必要的依赖并运行脚本生成PPT。
● Bash(cd "E:\xxworkspace\claude-code-for-business\excel-analysis\acs" && npm install pptxgenjs)
● Bash(cd "E:\xxworkspace\claude-code-for-business\excel-analysis\acs" && node create_ppt.js)
... 中间它自己调整了n次
● 完成！我已经成功使用PPT技能为您创建了门禁产品问题分析报告的PowerPoint演示文稿。
```

这个只是一个思路，但效果不是很好，另外我还放了2个ppt 一个是lanz 基于模板生成的，还有一个是 notebookllm 生成的，大家可以参考下，有些垂直领域的工具确实也有存在的价值。

### claude code 介绍

以上的功能我都是使用 claude code 实现的。

如果不会装，可以参考 [Claude Code 使用指南与实践](/blog/2025/claude-code.html)，claude code 只是一个命令行终端工具，这个谁都可以用

它的优势 ：

+ 非程序员友好：不需要懂代码也能开发应用
+ 文件操作能力 📂：可以读到本地文件并编写脚本实现需求
+ 语言无障碍：无论你是前端后端，其实都可以使用

### skill 介绍

上面有一个 prompt 我强调了必须调用某个 skill，那它就会按照我的步骤去调用，那如何安装和使用可以参考 [这个文档](https://apifox.com/apiskills/claude-skills/)

![](/imgs/ai-coding-practices-2025/1.png)

skill 相对于 mcp 的优势还是本地化，而且它不是黑盒，很容易定制化。

> 其实 mcp 和 skill 都是 anthropics 公司创造的

当然 [anthropics skills](https://github.com/anthropics/skills) 还有很多好的skill 我介绍下

+ 创建编辑分析 word 的 [skill](https://github.com/anthropics/skills/blob/main/skills/docx/SKILL.md)
+ 前端设计师的 [skill](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)
+ 一句话创建skill 的 [skill](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md)
+ 颜色工厂 [skill](https://github.com/anthropics/skills/blob/main/skills/theme-factory/SKILL.md)

## 📱 案例实战 2：一句话生成灵光 app 应用

这个的话，其实需要先分析一下，这个应用的原理，其实就是简单生成一个html，然后再给 html 包装一下。这个我之前其实有预研过的。具体可以看 [用 AI 复刻 v0.app](./v-1-app.md)

> 项目地址：内网链接无法访问

Q:

```bash
我想在这个目录下单独开个文件夹，项目名称是 v-100，里面是一个app的应用，
包含功能有：
1. 设置通用大模型的url和token，大模型名称，并需要缓存在前端localstorage中
2. 可以实现简单的问答，问答的时候传入大模型的url和token，大模型名称  给后端，后端调用并返回信息
3.前端存储历史对话与新建对话。历史对话也存在 localstorage里
4. 前端展示 用 h5的方式
5. 对于对话有一个要求，就是如果用户希望做一个应用的时候，比如写一个简单的贪吃蛇，那模型需要调整提示词，并返回html代码，在前端渲染这个html代码
注意：
1. 你实现任何步骤都需要总结在 readme中
2. 前端技术栈使用vue3，大模型接口用openai的库，其他技术栈你自己选
3. 要用亮色，不要用暗色
```

> 以上需要懂一些工程化的技术，不过你问了粗一些估计也能生成

这里我用的是 trae 的 solo 里面的 builder plan 模式，可以看到它在写代码之前都**对需求和设计做了归档，等明确完这块内容后在开始开发**

+ 产品需求文档
+ 架构与设计文档

![](/imgs/ai-coding-practices-2025/2.png)

其实 claude code 也有 plan 模式 

![](/imgs/ai-coding-practices-2025/3.png)

那我最后用的 trae ，基本上上面一个prompt 就可以，搞定了，而且对于非程序员也比较友好，只需要简单点击运行就可以跑起服务了：

![](/imgs/ai-coding-practices-2025/4.png)

最终效果

![](/imgs/ai-coding-practices-2025/5.png)

这里如果想一个prompt就完美生成的话，需要用到 Gemini-3-Pro-Preview（我写这篇博客时最好的编码模型），那我 claude code 一般用 GLM 4.6 ，需要多步才能完成

> 现在 trae 国际版的付费玩家可以试用 Gemini

当然这个只是灵光 app 部分功能，但确实可以简单就复刻了

## 📖 Spec Coding（规范驱动开发）和 Vibe Coding（氛围编程）区别

案例一 就是 Vibe Coding， 案例二 就是 Spec Coding

| 对比维度 | Spec Coding (规范驱动开发) | Vibe Coding (氛围编程) |
| :--- | :--- | :--- |
| **核心哲学** | **工程化与可控**，先规划再实施 | **直觉驱动与探索**，跳过规划 |
| **开发流程** | **多步骤、有文档**：需求→设计→任务→代码→测试 | **单步骤、对话式**：自然语言提示 |
| **开发者角色** | **架构师与审查者**，掌控全局 | **产品经理与测试员**，描述意图 |
| **代码质量** | **高**，利于团队协作 | **较低且不稳定**，易积累“技术债” |

## 🎯 实战建议

**🎯 多去尝试** 多尝试工具，多尝试使用 AI 解决日常问题，不要只会有 lanz 来问问题，这对我们真正理解大模型非常不利。

**📝 从简单项目开始** 先尝试数据分析、自动化脚本等基础项目，不要一下子那复杂的内容入手；从简入繁，逐步深入。

**📚 持续学习和迭代** 关注一些厉害的人，不断优化提示词和开发流程。

## 📚 总结

<div class="text-xl mt-8 leading-relaxed max-w-2xl mx-auto">
AI编程革命已来！从Excel分析到APP生成，AI正在重塑工作方式。<br><br>
拥抱 <span class="text-blue-500 font-bold">Vibe Coding</span> 的直觉驱动<br>
掌握 <span class="text-green-500 font-bold">Spec Coding</span> 的规范方法<br><br>
开启你的AI编程之旅！
</div>
