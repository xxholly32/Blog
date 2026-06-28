# Claude Code 使用指南与实践

## 🎯 背景介绍

Claude Code 是 Anthropic 官方推出的命令行界面工具，专为软件工程任务设计。它可以帮助开发者完成代码编写、重构、调试等多种任务。

在国内使用 Claude Code 时，由于网络限制，通常需要通过代理服务来访问 Claude 模型。目前有多种代理方案可供选择，包括阿里云百炼、月之暗面等平台提供的服务。

## 🚀 快速安装指南

前提条件：

+ 您需要安装 [Node.js 18 或更新版本环境](https://nodejs.org/en/download/)
+ Windows 用户还需安装 [Git for Windows](https://git-scm.com/install/windows)

### 1. 安装 Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

### 2. 国内用户代理配置

由于网络限制，国内用户需要通过代理访问。：

#### 配置文件路径

`C:\Users\{username}\.claude\settings.json`

> 如果文件不存在，先执行 `claude` 命令初始化

#### 代理配置示例

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "your-api-key",
    "ANTHROPIC_BASE_URL": "https://api.moonshot.cn/anthropic/",
    "ANTHROPIC_MODEL": "model-name",
    "CLAUDE_CODE_GIT_BASH_PATH": "C:\\Program Files\\Git\\bin\\bash.exe"
  }
}
```

这里有几个方式可以连：

- lanz 的代理服务，推荐使用编码模型，key 的话必须是 `Anthropic` 的key 而不是用 openAI 的，现在免费，推荐使用
- [智谱AI开发平台](https://bigmodel.cn/) 的 GLM 4.6 可以试用，它也提供了对接 [claude code 方案](https://docs.bigmodel.cn/cn/guide/develop/claude#%E6%8E%A8%E8%8D%90%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F)
- [月之暗面](https://platform.moonshot.cn/docs/introduction) 的代理服务，不写 `ANTHROPIC_MODEL` 的话默认是 `claude4` ，如果要配置 kimi k2 可以看[官方文档](https://platform.moonshot.cn/docs/guide/agent-support#%E5%9C%A8-claude-code-%E4%B8%AD%E4%BD%BF%E7%94%A8-kimi-k2-%E6%A8%A1%E5%9E%8B)
- [阿里云百炼](https://bailian.console.aliyun.com/) 的代理服务，推荐是 qwen3-coder 模型；但这里的 `ANTHROPIC_BASE_URL` 需要配置为：https://dashscope.aliyuncs.com/api/v2/apps/claude-code-proxy

:::tip 快速切换模型
如果你担心公司数据安全，那可以用 lanz，但 lanz 在白天极其不稳定，基本没办法试用。已向有关部门反馈，但得不到解决。

当然上面的国内大模型厂商也是可以用的，我自己会使用一个工具快速切换，[cc-switch](https://github.com/farion1231/cc-switch)

下载地址：https://github.com/farion1231/cc-switch/releases
:::

### 3. 启动使用

```bash
claude
```

## 🛠️ 实战案例：卡片列表开发

以 vessel-vite-template 项目为例，实现卡片列表功能。

### 项目初始化

1. **生成项目理解文件**
   ```bash
   claude init
   ```
   生成 CLAUDE.md 帮助 AI 理解项目结构

2. **配置开发规范**

  由于我第一次提问的时候，他用了 `acro` 的组件库帮我写的，我就加上了 `hui-vue3` 的说明，`prompt `如下： `我想在claude.md文件中加入 一个规则，就是ui库只能使用我们自己开发的  hui-vue3： 文档在：内网链接无法访问

### 开发过程记录

#### Prompt 1：基础卡片实现

`在list文件夹加入一个卡片模式的代码，和列表模式（/list/basic.vue）内容差不多，只是展示使用卡片，单个卡片使用原生html去写`

**AI 表现：**
- ✅ 自动生成 todo list 并逐步完成
- ✅ 贴心添加悬浮效果样式
- ✅ 正在下发加入了标签样式
- ❌ 未使用 grid 布局
- ❌ 卡片内容过于冗余
- ❌ 未使用 UnoCSS

![实现过程1](/imgs/claude-code/claude-code-1.png)
![实现过程2](/imgs/claude-code/claude-code-2.png)

#### Prompt 2：布局优化

`这里的卡片是按照一行铺满展示的，你帮我实现一行放4个卡片，采用grid布局；卡片内容移除工号，组织，年龄，性别；style中的样式如果能用 unocss都用uncss实现；`

**优化结果：**
- ✅ 完美实现 4 列 grid 布局
- ✅ 精简卡片内容
- ✅ 全面使用 UnoCSS

![优化过程1](/imgs/claude-code/claude-code-3.png)
![优化过程2](/imgs/claude-code/claude-code-4.png)

### 最终效果

查看最终代码提交

**成本：** 约 1.5 元（3-4 个 prompt）

> 多使用 /clear 否则要亏死

## 📊 使用体验总结

### ✅ 优势
- **todo list 机制**：任务拆解清晰，执行有条理
- **控制台独立运行**：与编辑器解耦，灵活性高
- **上下文理解**：能准确理解项目结构和需求
- **样式细节**：自动添加交互效果，提升用户体验

### ⚠️ 注意事项
- **成本考量**：新建任务时成本较高，建议用于复杂功能开发
- **需求明确**：需要清晰描述布局、样式等细节要求
- **网络依赖**：国内用户需要配置代理







