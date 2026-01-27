---
outline: deep
---

# 【翻译】 Claude 学习日历：Claude Code 31 天实战技巧

> 原文 [Advent of Claude: 31 Days of Claude Code](https://adocomplete.com/advent-of-claude-2025/)

> 原文中有视频，但公司内部无法访问，我也就不粘到视频中，可以看b站视频一起搭配学习 [不会编程也能用！Claude Code 31 个隐藏技巧，第 17 个太实用了](https://www.bilibili.com/video/BV1sGkMBvEvf)

Claude Code 最强大功能的综合指南，从快速快捷键到高级 Agent 模式。

在 12 月份，我每天都在 X/Twitter 和 LinkedIn 上分享一个 Claude Code 的技巧。这原本只是一个简单的学习日历，最终却变成了一张功能地图，这些功能从根本上改变了我编写软件的方式。这篇文章将这 31 个技巧汇编成一份综合指南，从入门必备到高级模式重新进行了整理，并增加了 280 个字符无法涵盖的额外背景信息。

无论你是刚刚开始使用，还是想提升 Claude Code 的使用水平，这里都有适合你的内容。

## 入门指南

在深入了解功能之前，先设置 Claude Code 以了解你的项目。

### ⭐⭐⭐ /init — 让 Claude 自动入驻你的项目

每个人都需要入驻文档。使用 `/init`，Claude 会自己编写。

Claude 会读取你的代码库并生成一个 `CLAUDE.md` 文件，其中包含：

- 构建和测试命令
- 关键目录及其用途
- 代码规范和模式
- 重要的架构决策

这是我在任何新项目中运行的第一件事。

对于较大的项目，你还可以创建一个 `.claude/rules/` 目录，用于存放模块化、特定主题的说明。该目录中的每个 `.md` 文件都会作为项目记忆与 `CLAUDE.md` 一起自动加载。你甚至可以使用 YAML frontmatter 根据文件路径有条件地应用规则：

```yaml
---
paths: src/api/**/*.ts
---
# API 开发规则
- 所有 API 端点必须包含输入验证
```

把 `CLAUDE.md` 看作是你的通用项目指南，而 `.claude/rules/` 则是针对测试、安全、API 设计或其他任何值得单独列出的内容的重点补充。

### ⭐⭐⭐ 记忆更新

想在不手动编辑 `CLAUDE.md` 的情况下将某些内容保存到 Claude 的记忆中吗？过去，你可以用 `#` 开头，后面跟上任何内容，Claude 会将其追加到 `Claude.md` 文件的末尾。从 Claude Code 2.0.70 开始，情况不再如此，现在你只需告诉 Claude 为你更新 `Claude.md` 文件。

只需告诉 Claude 记住它：

“更新 Claude.md：在这个项目中始终使用 bun 而不是 npm”

继续编码，不要打断你的心流。

### ⭐⭐⭐ @ 提及 — 即时添加上下文

`@` 提及是给 Claude 提供上下文的最快方式：

- `@src/auth.ts` — 即时将文件添加到上下文
- `@src/components/` — 引用整个目录
- `@mcp:github` — 启用/禁用 MCP 服务器

文件建议在 git 仓库中快约 3 倍，并支持模糊匹配。`@` 是从“我需要上下文”到“Claude 已有上下文”的最快路径。

## 必备快捷键

这些是你经常使用的命令。让它们成为你的肌肉记忆。

### ⭐⭐⭐  ! 前缀 — 即时运行 Bash

不要浪费 Token 问“你能运行 git status 吗？”

只需输入 `!` 后跟你的 bash 命令：

```bash
! git status
! npm test
! ls -la src/
```

`!` 前缀会立即执行 bash 并将输出注入到上下文中。没有模型处理。没有延迟。没有浪费的 Token。不需要多个终端窗口。

这看起来很微不足道，直到你意识到你每天要使用它五十次。

### ⭐⭐ 双击 Esc — 倒带

想尝试一种“如果我们……会怎样”的方法而不承诺它吗？

尽管去试。如果情况变得奇怪，按两次 `Esc` 键跳回一个干净的检查点。

你可以回退对话、代码更改，或两者兼而有之。这里需要注意的一点是，运行的 Bash 命令无法撤销。

### ⭐⭐⭐ Ctrl + R — 搜索过去提示词

你过去的提示是可搜索的：

| 按键 | 动作 |
| :--- | :--- |
| Ctrl+R | 搜索过去提示词 |
| Ctrl+R (再次) | 循环浏览匹配项 |
| Enter | 运行它 |
| Tab | 先编辑 |

不要重新输入。回想一下。这也与斜杠命令无缝配合。

### ⭐ Prompt Stashing (提示暂存)

就像 git stash，但是针对你的提示词。

`Ctrl+S` 保存你的草稿。发送其他内容。当你准备好时，你的草稿会自动恢复。

不再需要复制到便笺簿。不再在对话中途打断思路。

### ⭐⭐ Prompt Suggestions (提示建议)

Claude 可以预测你接下来会问什么。

完成一项任务，有时你会看到一个灰色的后续建议出现：

| 按键 | 动作 |
| :--- | :--- |
| Tab | 接受并编辑 |
| Enter | 接受并立即运行 |

Tab 过去用于自动完成你的代码。现在它自动完成你的工作流。通过 `/config` 切换此功能。

## 会话管理

Claude Code 是一个持久的开发环境，根据你的工作流优化它可以让你做更多事情。

### ⭐⭐⭐ 从上次中断的地方继续

不小心关闭了终端？笔记本电脑在任务中途没电了？没问题。

```bash
claude --continue    # 立即接上你上次的对话
claude --resume      # 显示选择器以选择任何过去的会话
```

上下文得以保留。对话得以恢复。你的工作永远不会丢失。你还可以通过 `cleanupPeriodDays` 设置自定义会话保留的时间。默认是 30 天，但你可以将其设置为任意时长，如果你不想保留 Claude Code 会话，甚至可以设置为 0。

### ⭐⭐ 命名会话

你的 git 分支有名字。你的 Claude 会话也应该有。

```bash
/rename api-migration       # 命名你当前的会话
/resume api-migration       # 按名称恢复
claude --resume api-migration  # 也可以从命令行工作
```

`/resume` 屏幕会对分叉的会话进行分组，并支持键盘快捷键：`P` 预览，`R` 重命名。

### Claude Code Remote （用不了）

在 Web 上开始任务，在终端中完成：

```bash
# 在 claude.ai/code 上，启动一个 Claude Code 会话
# 当你离开时它会在后台运行

# 稍后，从你的终端：
claude --teleport session_abc123
```

这会在本地拉取并恢复会话。无论在家还是在旅途中都能使用 Claude。也可以通过 iOS 和 Android 的 Claude 移动应用以及 Claude 桌面应用工作。

### ⭐⭐⭐ /export — 获取记录

有时你需要记录发生了什么。

`/export` 将你的整个对话转储为 markdown：

- 你发送的每一个提示
- Claude 给出的每一个回复
- 每一个工具调用及其输出

非常适合文档、培训，或者向过去的自己证明，是的，你确实已经尝试过那种方法。

## 生产力功能

这些功能消除了摩擦，帮助你更高效的工作。

### ⭐ Vim 模式

厌倦了伸手去拿鼠标来编辑你的提示？

输入 `/vim` 并解锁全套 vim 风格的编辑：

| 命令 | 动作 |
| :--- | :--- |
| h j k l | 导航 |
| ciw | 更改单词 |
| dd | 删除行 |
| w b | 按单词跳转 |
| A | 在行尾追加 |

以思维的速度编辑提示。你几十年的 vim 使用形成的肌肉记忆终于在一个 AI 工具中得到了回报。而且退出 vim 模式从未如此简单，只需再次输入 `/vim`。

### ⭐ /statusline — 自定义你的视图

Claude Code 在你的终端底部有一个可自定义的状态栏。

`/statusline` 让你配置那里显示什么：

- Git 分支和状态
- 当前模型
- Token 使用情况
- 上下文窗口百分比
- 自定义脚本

一目了然的信息意味着更少的中断去手动检查事情。

### /context — Token 消耗统计 （用不了）

有没有想过是什么在消耗你的上下文窗口？

输入 `/context` 确切查看是什么在消耗你的 Token：

- 系统提示大小
- MCP 服务器提示
- 记忆文件 (CLAUDE.md)
- 加载的技能和 Agent
- 对话历史

当你的上下文开始填满时，这就是你弄清楚它去向的方法。

### /stats — 你的使用仪表板 （用不了）

```
2023: "看看我的 GitHub 贡献图"
2025: "看看我的 Claude Code 统计数据"
```

输入 `/stats` 查看你的使用模式、最喜欢的模型、使用连续记录等。

橙色是新的绿色。

### /usage — 了解你的限制

“我快达到限制了吗？”

```
/usage        → 通过可视进度条检查你当前的使用情况
/extra-usage  → 购买额外容量
```

了解你的限制。然后超越它们。

## 思考与规划

控制 Claude 如何处理问题。

### ⭐⭐ Ultrathink (深度思考)

通过单个关键字按需触发扩展思考：

```
> ultrathink: 为我们的 API 设计一个缓存层
```

当你在提示中包含 `ultrathink` 时，Claude 会在响应之前分配最多 32k token 用于内部推理。对于复杂的架构决策或棘手的调试会话，这可能是肤浅答案与真正洞察力之间的区别。

过去你可以指定 `think`、`think harder` 和 `ultrathink` 来分配不同数量的思考 Token，但我们后来将其简化为单一的思考预算。`ultrathink` 关键字仅在未设置 `MAX_THINKING_TOKENS` 时有效。当配置了 `MAX_THINKING_TOKENS` 时，它具有优先权并控制所有请求的思考预算。

### ⭐⭐⭐ Plan Mode (计划模式)

先清除战争迷雾。

按两次 `Shift+Tab` 进入计划模式。Claude 可以：

- 阅读和搜索你的代码库
- 分析架构
- 探索依赖关系
- 起草实施计划

但在你批准计划之前，它不会编辑任何内容。三思而后行。一次执行。

我 90% 的时间默认使用计划模式。最新版本允许你在拒绝计划时提供反馈，使迭代更快。

### ⭐ Extended Thinking (API)

直接使用 Claude API 时，你可以启用扩展思考以查看 Claude 的逐步推理：

```javascript
thinking: { type: "enabled", budget_tokens: 5000 }
```

Claude 在响应之前会在思考块中显示其推理。对于调试复杂逻辑或理解 Claude 的决策非常有用。

## 权限与安全

没有控制的权力只是混乱。这些功能让你设定界限。

### ⭐ Sandbox Mode (沙盒模式)

```
"我可以运行 npm install 吗？" [允许]
"我可以运行 npm test 吗？" [允许]
"我可以 cat 这个文件吗？" [允许]
"我可以摸那只狗吗？" [允许]
×100
```

`/sandbox` 让你定义一次界限。Claude 在其中自由工作。

你获得了速度和实际的安全性。最新版本支持通配符语法，如 `mcp__server__*`，用于允许整个 MCP 服务器。

### ⭐⭐⭐ YOLO Mode

厌倦了 Claude Code 对每件事都请求许可？

```bash
claude --dangerously-skip-permissions
```

这个标志对一切都说是。名字里有“danger（危险）”是有原因的——请明智地使用它，最好在隔离环境或用于受信任的操作。

### ⭐ Hooks (钩子)

Hooks 是在预定生命周期事件中运行的 shell 命令：

- `PreToolUse` / `PostToolUse`: 工具执行前后
- `PermissionRequest`: 自动批准或拒绝权限请求
- `Notification`: 对 Claude 的通知做出反应
- `SubagentStart` / `SubagentStop`: 监控 Agent 生成

通过 `/hooks` 或在 `.claude/settings.json` 中配置它们。

使用 hooks 来阻止危险命令、发送通知、记录操作或与外部系统集成。这是对概率性 AI 的确定性控制。

## 自动化 & CI/CD

Claude Code 的工作不仅仅是在交互式会话中。

### ⭐ Headless Mode (无头模式)

你可以将 Claude Code 用作脚本和自动化的强大 CLI 工具：

```bash
claude -p "修复 lint 错误"
claude -p "列出所有函数" | grep "async"
git diff | claude -p "解释这些更改"
echo "审查此 PR" | claude -p --json
```

管道中的 AI。`-p` 标志以非交互方式运行 Claude 并直接输出到 stdout。

### ⭐ Commands — 可重用提示

将任何提示保存为可重用命令：

创建一个 markdown 文件，它就变成了一个斜杠命令，还可以接受参数：

```
/daily-standup              → 运行你的早晨例行提示
/explain $ARGUMENTS         → /explain src/auth.ts
```

不要重复自己。你最好的提示值得被重用。

## 浏览器集成

Claude Code 可以看到并与你的浏览器交互。

### Claude Code + Chrome （用不了）

Claude 现在可以直接与 Chrome 交互：

- 导航页面
- 点击按钮并填写表单
- 读取控制台错误
- 检查 DOM
- 截图

“修复错误并验证它是否工作”现在是一个提示。从 claude.ai/chrome 安装 Chrome 扩展。

## 高级：Agent 与可扩展性

这是 Claude Code 真正变得强大的地方。

### ⭐⭐⭐ Subagents (子 Agent)

圣诞老人不是自己包装每一份礼物的。他有精灵。

子 Agent 是 Claude 的精灵。每一个都：

- 拥有自己的 200k 上下文窗口
- 执行专门的任务
- 与其他并行运行
- 将输出合并回主 Agent

像圣诞老人一样委派。子 Agent 可以在你继续工作的同时在后台运行，并且它们拥有访问 MCP 工具的完全权限。

### ⭐⭐⭐ Agent Skills (Agent 技能)

技能是指令、脚本和资源的文件夹，用于教 Claude 专门的任务。

它们打包一次，随处可用。而且由于 Agent Skills 现在是一个开放标准，它们可以在任何支持它们的工具中工作。

把技能看作是按需给予 Claude 专业知识。无论是你公司的特定部署流程、测试方法，还是文档标准。

### ⭐⭐⭐ Plugins (插件)

还记得分享你的 Claude Code 设置意味着要在 12 个目录中发送 47 个文件吗？

那个时代结束了。

```bash
/plugin install my-setup
```

插件将命令、Agent、技能、Hooks 和 MCP 服务器捆绑到一个包中。通过市场发现新的工作流，其中包括搜索过滤以便于发现。

### ⭐ Language Server Protocol (LSP) Integration

语言服务器协议 (LSP) 支持为 Claude 提供了 IDE 级别的代码智能：

LSP 集成提供：

- 即时诊断：Claude 在每次编辑后立即看到错误和警告
- 代码导航：转到定义、查找引用和悬停信息
- 语言感知：代码符号的类型信息和文档

Claude Code 现在像你的 IDE 一样理解你的代码。

### ⭐ Claude Agent SDK

驱动 Claude Code 的相同 Agent 循环、工具和上下文管理现在作为 SDK 提供。只需 10 行代码即可构建像 Claude Code 一样工作的 Agent：

```typescript
import { query } from '@anthropic-ai/claude-agent-sdk';

for await (const msg of query({
  prompt: "为 src/ 中的所有公共函数生成 markdown API 文档",
  options: {
    allowedTools: ["Read", "Write", "Glob"],
    permissionMode: "acceptEdits"
  }
})) {
  if (msg.type === 'result') console.log("文档已生成:", msg.result);
}
```

这仅仅是个开始。

## 快速参考

### ⭐⭐⭐ 键盘快捷键

> 直接在claude code 中输入 ? 就可以看到

| 快捷键 | 动作 |
| :--- | :--- |
| !command | 立即执行 bash |
| Esc Esc | 倒带对话/代码 |
| Ctrl+R | 反向搜索历史 |
| Ctrl+S | 暂存当前提示 |
| Shift+Tab (×2) | 切换计划模式 |
| Alt+P / Option+P | 切换模型 |
| Ctrl+O | 切换详细模式 |
| Tab / Enter | 接受提示建议 |

### ⭐⭐⭐ 基本命令

| 命令 | 用途 |
| :--- | :--- |
| /init | 为你的项目生成 CLAUDE.md |
| /context | 查看 Token 消耗 |
| /stats | 查看你的使用统计 |
| /usage | 检查速率限制 |
| /vim | 启用 vim 模式 |
| /config | 打开配置 |
| /hooks | 配置生命周期钩子 |
| /sandbox | 设置权限边界 |
| /export | 导出对话到 markdown |
| /resume | 恢复过去的会话 |
| /rename | 命名当前会话 |
| /theme | 打开主题选择器 |
| /terminal-setup | 配置终端集成 |

### ⭐⭐⭐ CLI 标志

| 标志 | 用途 |
| :--- | :--- |
| -p "prompt" | 无头/打印模式 |
| --continue | 恢复上次会话 |
| --resume | 选择要恢复的会话 |
| --resume name | 按名称恢复会话 |
| --teleport id | 恢复 Web 会话 |
| --dangerously-skip-permissions | YOLO 模式 |

## 结束语

当我开始这个学习日历时，我以为我只是在分享技巧。但回顾这 31 天，我看到了更多的东西：一种关于人与 AI 协作的哲学。

Claude Code 最好的功能是关于给你控制权。计划模式、Agent 技能、Hooks、sandbox、会话管理。这些都是用于与 AI 协作的工具，而不是向其屈服。

从 Claude Code 中获得最大收益的开发者不是那些输入“为我做所有事情”的人。而是那些学会了何时使用计划模式，如何构建提示，何时调用 ultrathink，以及如何设置 hooks 以在错误发生前捕获它们的人。

AI 是一个杠杆。这些功能帮助你找到正确的抓手。

2026，敬未来。
