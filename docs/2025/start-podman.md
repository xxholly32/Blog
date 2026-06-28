# Podman 初探

## 背景

由于公司的商业纠纷（😂），最近被通知无法使用 docker，而我们的业务，和一些基础设施建设又必须使用 docker，那么我们只能找替代方案；之前其实就有让同事研究 Podman ，最近自己也尝试了一下，分享一下 window 下的 Podman 的搭建流程；

## 硬件准备

首先由于 Podman 使用了 [WSL](https://baike.baidu.com/item/wsl/20359185) , 你需要最新版本的Windows 10或Windows 11。在x64上，WSL需要构建18362或更高版本，而arm64系统需要构建19041或更高版本。

> 好么，我的电脑不满足，而且还无法升级（因为公司的网络限制😂），如果你的电脑升级不了，不要慌张，像我一样去IT那重装系统吧。

## 安装与使用

### 安装

先安装 WSL （不会就问gpt）

再去 [Podman release](https://github.com/containers/podman/releases) 去找 Podman 对应的安装文件执行安装，个人建议是只装基础版本的 `podman-xxx-setup.exe`

> podman 大部分脚本需要在 powershell 上执行

``` bash
# 测试安装
podman -v
# 初始化
podman machine init 
# 启动
podman machine start
```

> 期间应该会弹出一个html，不要关闭哈，这html会指引你怎么安装

### 配置代理

我们的镜像 pull 和 push 要使用到 http 环境下的，`内网链接无法访问` 和 `内网链接无法访问`，相关文档详见 docker仓库指导手册

所以先要配置代理，操作如下

``` bash
## 进入wsl
wsl
## 编辑配置文件
sudo vi /etc/containers/registries.conf 
## 找到 registry，并修改
[[registry]]
location = "内网链接无法访问"
insecure = true

[[registry]]
location = "内网链接无法访问"
insecure = true
## 保存退出，并重启podman
```

测试是否安装成功

```bash
podman pull 内网链接无法访问
```

### plan B

其实执行命令的时候加个 `--tls-verify=false` 也可以绕过，比如 `podman pull 内网链接无法访问 --tls-verify=false`

## 其他说明

+ podman 和 docker 命令差不多，就把 docker 改成 podman 就可以用了
  + 不过之前 `docker build -t xxx .` 的命令，如果之前你用的是 dockerfile 的话，需要改成 `podman build -f ./dockerfile -t xxx .`；因为 podman 的 build 命令默认不是读取 dockerfile 的，需要指定
  + 还有一些其他脚本改动，还是会有一些复杂的
+ 其他的指令 login 和 push 我也试过，都可以成功，这里就不多说了，更多的内容可以去问gpt
+ podman destop 我没装，等有空了再试试

特别感谢我的同事，朴贤姬，林志成5 的帮助 🌹🌹🌹
