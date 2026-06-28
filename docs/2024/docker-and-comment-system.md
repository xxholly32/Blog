# docker 实践与评论系统

之前有做过 docker 和 k8s 的简介，有点偏基础；

最近的工作也用到了一些，也想把一些常用的进阶配置记录一下，顺便介绍一下最近的评论系统的设计

> 顺便记录下我自己的一个基础仓库镜像地址，在海康打的镜像基本都存着，如果你有需求制作镜像那么，有些镜像应该可以直接拿去复用 内网链接无法访问

## 一些代理的配置

不仅仅是国内，包括海康网络原因，一些下载内容都需要通过代理，这里记录一下

首先是最基础的 apk 下载的代理配置，比如下面是一个 alpine 的配置

```sh
FROM alpine:3.14

# 需要加入代理配置
RUN echo 'start build' && \
    sed -i 's/https:\/\/dl-cdn.alpinelinux.org/http:\/\/内网链接无法访问' /etc/apk/repositories

# 安装 nodejs 就会快很多
RUN apk update && apk add --no-cache nodejs
```

可以通过海康的镜像地址下载，速度会快很多，而且成功率也高

其实还有一些比如国内的镜像地址，比如 `mirrors.tuna.tsinghua.edu.cn` 都可以通过百度查到

### 其他代理配置

go 代理配置是通过环境变量来配置的，比如下面是一个 go 的配置

```sh
RUN go env -w GOPROXY=https://goproxy.cn
```

这样就可以通过国内的代理来下载 go 的包了

## 有关写镜像的注意事项

由于镜像的构建是通过 Dockerfile 来构建的，但无法通过 docker url 来找到 Dockerfile，所以在命名 docker-url 的时候，需要注意一下

比如下面是一个基础的镜像 的 docker-url : `内网链接无法访问` 一看就是这个镜像是基于 java 8 和 nodejs 14 的，这样就可以很方便的找到这个镜像的 Dockerfile

然后在 dockerfile 的同级目录加入 README.md 文件，里面写一些关于这个镜像的说明，比如下面是一个基础的 README.md

```md
# java_8_nodejs_14:lastest

## 部署与发布

+ `docker build -f ./dockerfile -t 内网链接无法访问 .`
+ `docker push 内网链接无法访问`
```

我个人建议是做镜像的人可以把镜像放在同一个仓库或者地方方便大家查找，或者fork 我的仓库进行修改，内网链接无法访问

## 评论系统设计

其实并没有做什么设计，仅仅是参考 https://github.com/ArtalkJS/Artalk，然后调整了下 Dockerfile (处理了下代理问题)，最终部署到 ezsvs 上面；

现在还有几个问题：

### 数据问题

就是artalk 的数据库是在docker 容器内部，每次重启容器都会丢失数据，这个问题我还没有解决，这个的话我的想法是把 sqlite 数据库挂载到宿主机上，这样就可以保证数据不会丢失；官方文档的话在这里，https://artalk.js.org/guide/backend/config.html#sqlite 

这个我有空再研究一下，有兴趣的同事也可以研究下，或者联系下我，我可以提供宿主机。

### 选型问题

如果集成 vitepress 的话其实也可以用其他方案比如 disqus 或者 gitalk 等，https://github.com/vuejs/vitepress/discussions/3464

artalk的界面效果，我个人不太喜欢，而且后端是 GO 写的，不太懂

### vitepress 的插件问题

artalk-plugin 我简单写了下，但在 vitepress 中一些特定语法中会出现问题，这个可能需要看下最佳实践是什么

:::tip
这是bug展示
:::

### 其他问题

比如邮件发送，emoji 表情包等优化工作