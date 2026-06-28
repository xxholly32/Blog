---
title: AI 编码闲谈 2
date: 2026-04-02
tags:
  - AI
  - Coding
---

# AI 编码闲谈 2

## 背景

最近给部门的一部分前后端做了个分享，然后有一些比较好的点再用文字记录下，分享内容参考 ：内网链接无法访问

下面是一些分享时候的编程小技巧

## 终端更快的打开 claude code 

在用 vscode 系的用户，往配置文件加入这行内容，就会在新增终端的地方多一个选项，这样就不用每次找 `--dangerously-skip-permissions` 这个配置了

```json
"terminal.integrated.profiles.windows": {
  "Git Bash with Claude": {
    "path": "C:\\Program Files\\Git\\bin\\bash.exe",
    "args": [
        "-c",
        "claude --dangerously-skip-permissions; exec bash"
    ],
    "icon": "terminal-bash",
    "overrideName": true
  }
}
```

## chrome devtools mcp 插件

那 Chrome 146 上加了个远程调试开关，在地址栏输入 `chrome://inspect/#remote-debugging`，打开远程调试开关。然后给 Claude Code 加一行 MCP 配置：

```bash
claude mcp add chrome-devtools -- npx chrome-devtools-mcp@latest --autoConnect
```

重启 session，Claude 就直接接管你当前的 Chrome 了。

比如这个万能 prompt：`用chrome mcp看下这个缺陷并解决 内网链接无法访问

> 唯一的缺点是，经常需要你手动确认

## 复杂场景的实战技巧

有一种 AI 的 prompt 技巧，就是如果你要做一件不是很明确的事情，或者一个复杂场景的时候，你大概描述一下需求以后，让 ai 来给你做提问，然后开启 plan 模式 这样的话它会帮你拆解~

![](/imgs/ai-coding-experience-2026/1.png)

> 这个在做 skill 的时候也非常好用，算是之前做 skills 的补充

## 安装 skills 的技巧

因为大家可能会用到不同的 编辑器，那可以试用 `npx skills add <owner/repo>` 这个命令来安装 skills ，支持 npm / 远程开源仓库

支持大部分主流编辑器 （ cursor 的话选 claude code ），也支持放在 openclaw 中

> 综合安防前端团队技能合集

## [cc-switch](https://github.com/farion1231/cc-switch)

这个是 claude code 的助手，建议安装和打开，最大的好处就是，完成任务以后会及时的通知你。

下载地址：https://github.com/farion1231/cc-switch/releases

> 有了 AI 以后可以多线程开发，此时这个功能尤为重要

## vue2 + claude code

如果是 vue2 开发的话，如果切换成老的 nodejs 版本，可能会出现兼容性问题，那可以这么改启动命令

```json
"scripts": {
  "dev": "set NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve"
}
```

> 不过 `npm install` 的话可能还是要用老的
