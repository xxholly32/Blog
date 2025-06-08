---
title: 整理你的依赖
date: 2025-04-28T14:00:00Z
lang: en
duration: 8min
---

# 【翻译】整理你的依赖

> [原文地址](https://antfu.me/posts/categorize-deps)

当构建一个项目时，我们很可能会从 npm 安装第三方包来完成一些功能。关于这个话题，我们知道有两种主要的依赖类型：`dependencies` (prod) 和 `devDependencies` (dev)。在我们的 `package.json` 中，它可能看起来像这样：

```json
{
  "name": "my-cool-vue-components",
  "dependencies": {
    "vue": "^3.5.15"
  },
  "devDependencies": {
    "eslint": "^9.15.0"
  }
}
```

主要区别在于 [`devDependencies`](https://github.com/npm/npm/blob/2e3776bf5676bc24fec6239a3420f377fe98acde/doc/files/package.json.md#devdependencies) 仅在构建或开发阶段需要，而 [`dependencies`](https://github.com/npm/npm/blob/2e3776bf5676bc24fec6239a3420f377fe98acde/doc/files/package.json.md#dependencies) 是项目运行所必需的。例如，上面的 `eslint` 仅用于 lint 我们的源代码；当我们发布项目或部署到生产环境时不再需要它。

最初是为了 **编写 Node.js 库**（那些发布到 npm 的库）而引入的。当你安装一个像 `vite` 这样的包时，npm 会自动安装它的 `dependencies` 但不会安装它的 `devDependencies`。这是因为你将 `vite` 作为依赖使用，而不需要它的开发工具。因此，即使 `vite` 在开发过程中使用 `prettier`，但你的项目中并不会使用它。

随着生态系统的发展，我们现在可以构建比以往更复杂的项目。我们有用于构建全栈网站的元框架，用于转译和打包代码及依赖的打包工具等。Node.js 已经远不止在服务器端运行 JavaScript 代码和包那么简单。

我大致将项目分为三类：

1. **应用程序**：网站、Electron 应用、移动应用等。这里的 `package.json` 主要用于跟踪依赖信息，应用本身永远不会发布到 npm。
2. **库**：设计用于发布到 npm，然后被其他项目安装和使用的包。
3. **内部包**：在 monorepo 中使用但从不发布的包。

从根本上说，`dependencies` 和 `devDependencies` 的区别**仅**对打算发布到 npm 的库真正有意义。然而，由于不同的场景和使用模式，它们的含义已经远远超出了最初的目的。

工具经常**重载** `dependencies` 和 `devDependencies` 的含义以适应各种场景，目的是为了提供合理的默认值和更好的开发者体验。

例如，[`Vite`](https://vite.dev/) 将 `dependencies` 视为"客户端包"，并自动对其进行预优化。像 [`tsup`](https://github.com/egoist/tsup)、[`unbuild`](https://github.com/unjs/unbuild) 和 [`tsdown`](https://github.com/rolldown/tsdown) 这样的构建工具将 `dependencies` 视为打包时需要外部化的包，自动内联（打包）任何未在 `dependencies` 中列出的内容。

虽然这些约定在大多数情况下确实简化了事情，但它们也迫使 `dependencies` 和 `devDependencies` 承担多重角色，使得理解每个包的用途变得更加困难。

如果我们看到 `vue` 列在 `devDependencies` 中，它可能意味着几种情况：

- 我们正在内联/打包它
- 我们只是引用它的类型
- 我们仅在测试中使用它
- 我们有它是为了启用 IDE 智能提示
- 或者完全是其他原因

仅仅将包分类为 `dependencies` 或 `devDependencies` 并不能在没有外部文档的情况下完整地展示该包的用途（另外请注意 `package.json` 不支持注释）。

### 对依赖进行分类

让我们暂时忘记 `dependencies` 和 `devDependencies`，我们该如何对依赖进行分类？以下是我能想到的一些粗略想法：

- <code important-text-lime>test</code>：用于测试的包（例如 `vitest`、`playwright`、`msw`）
- <code important-text-purple>lint</code>：用于代码检查/格式化的包（例如 `eslint`、`knip`）
- <code important-text-cyan>build</code>：用于构建项目的包（例如 `vite`、`rolldown`）
- <code important-text-orange>script</code>：用于脚本任务的包（例如 `tsx`、`tinyglobby`、`cpx`）
- <code important-text-green>frontend</code>：用于前端开发的包（例如 `vue`、`pinia`）
- <code important-text-yellow>backend</code>：用于后端服务器的包
- <code important-text-blue>types</code>：用于类型检查和定义的包
- <code important-text-amber>inlined</code>：直接包含在最终打包中的包
- <code important-text-red>prod</code>：运行时生产依赖
- ...

不同项目之间的分类可能会有所不同。但关键是 `dependencies` 和 `devDependencies` 缺乏灵活性来捕捉这种级别的细节。

这个问题一直困扰着我，虽然感觉不是需要立即解决的关键问题。直到 pnpm 引入了 [catalogs](https://pnpm.io/catalogs)，为我们提供了前所未有的依赖分类可能性。

### PNPM Catalogs

[PNPM Catalogs](https://pnpm.io/catalogs) 是一个允许 monorepo 工作空间通过集中管理位置在不同包之间共享依赖版本的功能。

基本上，你在 `pnpm-workspace.yaml` 文件中添加 `catalog` 或 `catalogs` 字段，然后在 `package.json` 中使用 `catalog:<name>` 引用它们。

```yaml
# pnpm-workspace.yaml
catalog:
  vue: ^3.5.15
  pinia: ^2.2.6
  cac: ^6.7.14
```

```json
// package.json
{
  "dependencies": {
    "vue": "catalog:",
    "pinia": "catalog:",
    "cac": "catalog:"
  }
}
```

或使用[**命名目录**](https://pnpm.io/catalogs#named-catalogs)：

```yaml
# pnpm-workspace.yaml
catalogs:
  frontend:
    vue: ^3.5.15
    # We locked the version for some reason, etc.
    pinia: 2.2.6
  prod:
    cac: ^6.7.14
```

```json
// package.json
{
  "dependencies": {
    "vue": "catalog:frontend",
    "pinia": "catalog:frontend",
    "cac": "catalog:prod"
  }
}
```

在安装和发布期间，pnpm 会自动将依赖解析为目录中指定的版本。虽然它最初是为了管理 monorepo 中的版本一致性而设计的，但我发现[命名目录](https://pnpm.io/catalogs#named-catalogs)也是对依赖进行分类的好方法。如上所示，我们可以将 `vue` 和 `cac` 分类到不同的目录中，即使它们都出现在 `dependencies` 中。这些信息使版本升级更容易，并有助于审查依赖更改。

> 一个不错的额外好处：你可以在 `pnpm-workspace.yaml` 中使用注释来与团队分享额外的上下文。

### 工具支持

考虑到目录仍然相当新，这种转变需要更好的工具支持。对我来说，一个重要的痛点是在使用 `catalog:<name>` 时失去了在 `package.json` 中一眼就能看到依赖版本的能力。

为了解决这个问题，我创建了一个 VS Code 插件，[PNPM Catalog Lens](https://marketplace.visualstudio.com/items?itemName=antfu.pnpm-catalog-lens)，它在 `package.json` 中内联显示解析后的版本。

![PNPM Catalog Lens 扩展的截图](https://antfu.me/images/pnpm-catalogs-vscode.png)

它还为每个命名类别添加了不同的颜色以便于识别。这让我们在不显著影响开发体验的情况下实现了分类和集中版本控制。

由于版本移动到了 `pnpm-workspace.yaml`，CLI 工具需要进行一些集成来支持这一点。到目前为止，我们已经适配了以下工具：

- [`taze`](https://github.com/antfu/taze)：检查和更新依赖版本，现在支持从目录中读取和更新版本。
- [`eslint-plugin-pnpm`](https://github.com/antfu/pnpm-workspace-utils/tree/main/packages/eslint-plugin-pnpm)：强制在 `package.json` 中为所有依赖使用目录，并提供自动修复。
  - 如果你使用 [`@antfu/eslint-config`](https://github.com/antfu/eslint-config)，通过设置 `pnpm: true` 启用此功能。
- [`pnpm-workspace-yaml`](https://github.com/antfu/pnpm-workspace-utils/tree/main/packages/pnpm-workspace-yaml)：一个用于读写 `pnpm-workspace.yaml` 的实用库，同时保留注释和格式。
- [`node-modules-inspector`](https://github.com/antfu/node-modules-inspector)：可视化你的 `node_modules`，现在用目录名标记依赖，以更好地概览它们的来源。
- [`nip`](https://github.com/antfu/nip)：交互式 CLI，用于将包安装到目录中。

### 展望未来

目前，我认为对依赖进行分类的价值主要在于更好的理解和更容易的版本升级审查。然而，随着这种约定获得更广泛的采用和工具支持的改进，我们可以将这些信息更深入地集成到我们的工具中。

例如，在 Vite 中，我们可以获得对依赖优化更明确的控制，将其与 `dependencies` 和 `devDependencies` 字段解耦：

```ts
// vite.config.ts
import { readWorkspaceYaml } from 'pnpm-workspace-yaml'
import { defineConfig } from 'vite'

const yaml = await readWorkspaceYaml('pnpm-workspace.yaml') // pseudo-API

export default defineConfig({
  optimizeDeps: {
    include: Object.keys(yaml.catalogs.frontend)
  }
})
```

同样，对于 [`unbuild`](https://github.com/unjs/unbuild)，我们可以显式控制外部化和内联，而不需要手动维护多个地方的列表：


```ts
// build.config.ts
import { readWorkspaceYaml } from 'pnpm-workspace-yaml'
import { defineBuildConfig } from 'unbuild'

const yaml = await readWorkspaceYaml('pnpm-workspace.yaml')

export default defineBuildConfig({
  externals: Object.keys(yaml.catalogs.prod),
  rollup: {
    inlineDependencies: Object.keys(yaml.catalogs.inlined)
  }
})
```

我已经开始将我的许多项目迁移到使用命名目录（例如 [`node-modules-inspector`](https://github.com/antfu/node-modules-inspector)）。即使在 monorepo 之外，对依赖进行分类的能力也是采用 pnpm 目录的一个令人信服的理由。我认为这是一个探索阶段，我们仍在发现最佳实践并改进工具支持。

所以，这就是我写这篇文章的原因：邀请你考虑这种方法并尝试一下。我们很想听听你的想法以及你会如何使用它。我期待看到更多这样的模式出现，帮助我们构建更易维护的项目，并获得更好的开发体验。感谢阅读！
