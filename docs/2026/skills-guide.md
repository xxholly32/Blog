---
outline: deep
---

# Skills 实战指南：让 AI 拥有专属技能

> 前置阅读：[Claude Code 初步上手体验](/2025/claude-code)

Skills 是 Anthropic 公司在 2024 年 8 月推出的一个特性。如今，Anthropic 已将其完善并开源，更名为 [Agent Skills](https://agentskills.io/)。类似的技术方案还有 Codex、最近备受关注的 OpenCode，以及 GitHub Copilot 等，都在采用这一特性。

在 Skills 刚推出时，我就非常看好它的发展前景，也写过一些教程，之前的文章中也多次提及。今天想分享下我个人是如何使用 Skills 的。

## 🎯 什么是 Skills？

简单来说，Skill 就是一个包含 `SKILL.md` 文件的文件夹。该文件包含元数据（至少包含 `name` 和 `description`）以及指导 Agent 如何执行特定任务的指令。Skill 还可以捆绑脚本、模板和参考资料。

```
my-skill/
├── SKILL.md          # 必须：指令 + 元数据
├── scripts/          # 可选：可执行代码
├── references/       # 可选：参考文档
└── assets/           # 可选：模板、资源文件
```

### Skills 的工作原理

Skills 在 AI Agent 中的工作流程如下：

1. **发现阶段**：启动时，Agent 仅加载每个可用技能的标题与简要说明，以初步判断何时可能适用该技能
2. **激活阶段**：当任务与技能描述匹配时，Agent 会将完整的 `SKILL.md` 操作说明载入上下文
3. **执行阶段**：Agent 遵循指令，根据需求选择性地加载引用的文件或执行捆绑的代码

想了解更多 Skills 的内容，可以查看官方文档：[Agent Skills](https://agentskills.io/)

## Skills 实战

Skills 的核心优势在于：**可复制、可分享、可复用**。正如管理学中所说的"最高境界是培养另一个自己"，Skills 正好提供了这种可能性。

接下来，我将介绍一些社区中优秀的 Skills 资源以及实用的 Skills 合集。

### Skills 合集推荐

我个人最常用的是 Vercel 的 [skills.sh](https://skills.sh/)，这里展示了 Skills 的使用情况以及创建的 Skills 指令。

> 有时间我也想在公司内部做一个 Skills 的指令与合集平台。

对于初学者，我建议先从 Anthropic 官方的 Skills 合集仓库入手：[anthropics/skills](https://github.com/anthropics/skills)。无论是学习 Skills 的编写，还是了解 Anthropic 的 Marketplace 机制，这都是一个非常好的起点。

### 推荐使用的 Skills

以下是一些我推荐的 Skills：

- **skill-creator**：用于创建新的 Skill
- **docx**：处理 Word 文档
- **xlsx**：处理 Excel 表格

> 💡 建议配合 [Excel 智能分析](/2025/ai-coding-practices-2025#📊-案例实战-1-excel-智能分析) 一起阅读，效果更佳。

此外，还有一些我和团队创建的 Skills，可以参考这个仓库：team-prompts，其中包含：

- **code-commit**：代码提交规范化
- **hui-plus-helper**：HUI-Plus 组件库开发助手
- **vue2-to-vue3-migration**：Vue 2 到 Vue 3 迁移工具

### 实战应用一：code-commit

首先介绍我自己创建的 Skill：**code-commit**。这里有一个很实用的技巧——Skills 可以封装成 claude code command。安装完上面的仓库后，在 Claude Code 中输入 `/` 即可看到提示：

![Skills 命令提示](/imgs/skills/skills-1.png)

实际提交效果如下：

![代码提交结果](/imgs/skills/skills-2.png)

看上去舒舒又服服

::: warning 最佳实践
建议大家不要一次性提交太多代码，而是每次提交一个小的功能点或 Bug 修复。这样可以更方便地 Review 代码，也更容易回滚。
:::

::: tip 更多 Git 相关 Prompt
这个 Skill 主要利用 Bash 和 Git 的功能。以下是一些其他好用的 Git 相关 Prompt：

- 帮我迁移某个 Git Commit 到另一个分支
- 帮我审核某个 Git Commit
- 帮我审核某人在最近 2 天提交的代码
:::

我还创建了 `/code-review` 指令用于代码审核。不过目前社区中还没有特别成熟的 code-review 方案，我建议还是以人工审核为主，AI 的建议仅供参考。

---

### 实战应用二：skill-creator 与 vue2-to-vue3-migration

接下来介绍 Anthropic 官方的 [skill-creator](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md)。

**场景背景**：我有一个业务需要从 Vue 2 迁移到 Vue 3，涉及组件库切换、典型页面迁移、脚手架升级等工作，工作量非常大。如果一开始就编写 Skill，很难一次性定义完整。

**我的做法**：先不急着创建 Skill，而是用 Claude Code 在两个仓库之间来回调试。Prompt 大概有：

- "有个老的功能是 xxx，代码在 `/yyy`，我现在的仓库是 aaa，帮我迁移到 `/bbb`"
- "之前我们请求接口都在 `/api` 下，我现在用的都是 `useAxios`，不需要单独的 api 文件，可以直接写到代码里"
- "老的组件比如 `el-row`、`el-col` 我都不需要了，我现在都用 UnoCSS 实现，你可以参考 `/xxx` 这里的实现逻辑"

经过多次调试后，AI 能够帮我完成迁移工作。这时，我只需要说一句：

> "用 skill-creator 帮我把上面的内容封装成一个 Skill"

**Skill 的使用**：有了这个 Skill 后，下次迁移时就可以这样问：

> "有个老的功能是 xxx2，代码在 `/yyy2`，我现在的仓库是 aaa2，帮我迁移到 `/bbb2`，请使用 vue2-to-vue3-migration 这个 Skill"

我发现第二个页面的迁移时间大大减少。当然，还是会有一些需要调整的地方，调整完成后，下一个 Prompt 就是：

> "帮我把之前的内容更新到 vue2-to-vue3-migration 这个 Skill 中"

最终的 Skill 如下：vue2-to-vue3-migration

> ⚠️ 免责声明：这个 Skill 请谨慎使用。另外，很多 Skill 其实是"阅后即焚"的，不一定都能提炼成通用方案。

这就是 AI 时代的"举一反三"。

## 其他编辑器中使用 Skills

如果你使用其他编辑器（如 Cursor），可以参考我同事的文档：Cursor Agent 里使用 Claude Code Skills

## 一些思考与困惑

在使用 Skills 的过程中，我也遇到了一些困惑：

1. **多 Skill 协作**：很多复杂的业务功能需要多个 Skills 协同工作，这可能需要较长的 Prompt，或者使用 Plan Mode 模式。这块我还没有深入研究。

2. **Skill 的粒度难以把握**：比如某些项目需要多语言支持，有些又不需要，那么在代码审核的 Skill 中，应该如何处理这种差异？

3. **Skills 的分发方式**：Anthony Fu 提出了 [skills-npm](https://github.com/antfu/skills-npm) 的理念——将每个技能封装成 npm 包，需要时直接安装到项目中。不过我对这种方式的实用性持观望态度，过度抽象可能会影响易用性。

## 总结

AI 和基础设施建设正处于"双向奔赴"的阶段，中间还有很多可以探索的空间，与人相处其乐无穷，和 AI 相处何尝也不是，需要我们不断尝试。2025 年必将是 Skills 爆发的一年，建议大家多去尝试编写自己的 Skills！

