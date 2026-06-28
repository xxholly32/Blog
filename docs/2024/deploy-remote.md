# 远程部署

## 背景

经常会出现这么一个场景，就是我们需要远程去换前端包；但服务器的用户名密码，端口，包括路径都是需要用脑子记忆，而且需要打开我们的SSH软件，会打断我们的工作思路；

所以我想着需要去写一个脚本，来帮我们去做这些事情。那么在基线开发的时候只需要换一次，后面都可以用脚本的方式解决。减少了我们的 [Yak Shaving](https://antfu.me/posts/about-yak-shaving-zh#yak-shaving)

## 脚本设计与实现

这里有个问题是，我们需要去安装 `sshpass` 这个软件，windows 安装起来比较麻烦，所以我选择用 docker 和 centos7 来做这个事情。

那么我们的步骤就是

+ 做部署到远程服务器的脚本
+ 做部署的容器
+ 串联下整体的流程（package.json 加个指令）

我不太想这个编译改变整体文件夹根目录的内容（根目录的内容应该越少越好），我把脚本都放到 build 的文件夹中，命名语义化一些；这样心智负担会小一点。

```
|-- build
|   |-- deploy-remote.sh
|   |-- deploy-remote-dockerfile
|-- package.json
```

### 远程部署脚本 deploy-remote.sh

```bash
#!/bin/bash

# 环境变量 一般改前三个
REMOTE_HOST=10.33.43.174
REMOTE_PASSWORD=Hik12345+
REMOTE_DIR=/opt/内部服务/web/components/tomcat85linux64.5/webapps/visitor
REMOTE_USER=root
REMOTE_MOVETO=/app/dist/* # 服务器本地的路径
REMOTE_PORT=22 # 如果未设置REMOTE_PORT，则使用默认端口22

# 使用SSH传输文件夹到远程服务器
sshpass -p "${REMOTE_PASSWORD}" scp -o StrictHostKeyChecking=no -P "${REMOTE_PORT}" -r ${REMOTE_MOVETO} ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR}

# 检查传输是否成功
if [ $? -eq 0 ]; then
  echo "Folder successfully uploaded to @${REMOTE_HOST}:${REMOTE_DIR}"
else
  echo "Failed to upload folder"
  exit 1
fi
```

### 部署容器 deploy-remote-dockerfile

> 如果 windows 本身安装了 `sshpass` ，就不用做这个容器了~

```Dockerfile
FROM centos:centos7.9.2009

RUN echo "cd /etc/yum.repos.d/" && \
    sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-* && \
    sed -i 's|#baseurl=内网链接无法访问 /etc/yum.repos.d/CentOS-* && \
    yum update -y && \
    yum install -y openssh-clients sshpass

# 设置工作目录
WORKDIR /app

# 复制脚本和成果物到容器中
COPY ./build/deploy-remote.sh /app/deploy-remote.sh
COPY ./dist /app/dist

# 赋予脚本可执行权限
RUN chmod +x /app/deploy-remote.sh

# 运行上传脚本
CMD ["/app/deploy-remote.sh"]
```

### 最后串联的指令

```json
{
  "scripts": {
    "build:deploy-remote": "npm run build && npm run deploy",
    "deploy-remote": "docker build -t deploy-remote -f build/deploy-remote-dockerfile . && docker run --rm deploy-remote"
  }
}
```

### 尝试执行 
  
```bash
npm run build:deploy-remote
...
# 最终输出这个就代表成功了，如果没成功的话可以去镜像里面调整脚本~
Folder successfully uploaded to @10.33.43.174:/opt/内部服务/web/components/tomcat85linux64.5/webapps/visitor
```

## 总结

这样我们就可以通过 `npm run build:deploy-remote` 来完成我们的部署工作了，这样我们就可以专注于我们的业务代码了，不用去记住服务器的用户名密码，端口，路径等等；

代码可以参考这个commit

## TODO

+ `docker build` 的性能还不是很高，整体速度会有点慢，这个可能后续再优化。
