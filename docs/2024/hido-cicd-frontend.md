# hido 前后端构建任务分离方案

## 背景

综合安防部门的组件，以往的项目在 hido构建时，前端和后端是放在一起构建的，这里会存在以下几个问题：

+ 构建报错不知道是谁的责任，通常都是找后端，后端需要翻翻翻翻日志才能定位到具体是谁的问题
+ 前端的执行脚本在 pom.xml 里面，这块前端不想改 xml ，后端不会改前端构建脚本，责任分不清楚
+ 构建时间长不知道是谁的问题，又要翻翻翻翻日志去看

其实我最近做一个区域的项目发现他们是分多个任务的，我借鉴了一下。找同事拿自己的组件改了下，最终效果如下，这块看起来就清晰很多，一旦有报错，或者具体哪个任务超时也一目了然。

![](/imgs/hido/hido.png){data-zoomable}

ok我们看下怎么配置：

> 建议最好先新建个测试的构建分支~

## 1 修改全局配置 - 代码仓库配置

开启代码仓库集中下载，填写代码仓库路径（这里的目的是只拉取一次代码，如果不加就会拉多次，而且无法将成果物合并在一起，所以这个是必须调整）

![](/imgs/hido/hido1.png){data-zoomable}

## 2 在原本的编译流程前，新增一条配置流程

如果有多段的话，也可以建多个配置，并做好通俗易懂的命名；比如前端 段A给web端用，段B 给移动端用。（当然后端有多段也可以拆分开）

![](/imgs/hido/hido2.png){data-zoomable}

![](/imgs/hido/hido3.png){data-zoomable}

## 3 前端构建相关指令

之前其实写在 `pom.xml` 文件里面的，现在需要移除，并新增到上述配置中。

+ 项目使用的是 vue-cli：

``` bash
# 注意这里的路径，需要根据实际情况调整
cd ./vms-frontend
npm install
# 注意这里的路径，需要根据实际情况调整 --no clean表示不清除该路径下已经存在的内容
# 注意这里前提是package.json，build 的最后而定指令是 "build": "vue-cli-service build"
npm run build -- --dest ../vms-start/src/main/webapp  --no-clean
```
![](/imgs/hido/hido4.png){data-zoomable}

+ 项目使用的是 vite：

vite 由于没有 --dest 参数，需要手动去代码加命令

（1）项目中增加 .env.hido 文件，配置打包文件的输出路径（前端成果物最终存放的目录）

``` bash
MODE = 'hido'

# 注意这里的路径，需要根据实际情况调整
VITE_APP_OUTPUT=../../bcrms-start/src/main/resources/static/board
```

（2）项目中vite.config.ts文件中增加构建配置项


```ts
// vite.config.ts
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    build: {
      outDir: env.VITE_APP_OUTPUT || 'dist',
    },
  }
})
```

（3）项目 package.json 中新增命令 "build:hido": "vite build --mode hido"

（4）hido 构建配置命令：

``` bash
# 注意这里的路径，需要根据实际情况调整
cd ./vms-frontend
npm install
npm run build:hido
```

![](/imgs/hido/hido5.png){data-zoomable}

## 4 修改后端编译调整

只改代码仓库路径，构建指令不用改。

![](/imgs/hido/hido6.png){data-zoomable}

## 5 其他操作 - 切换为容器化 （可选）

> 最近有遇到项目，本地构建ok，但线上不行，使用了容器化构建也好了 -_-!! 

> 为什么需要容器化

找到合适的镜像源：内网链接无法访问

![](/imgs/hido/hido8.png){data-zoomable}

将hido构建调整为镜像构建，注意这个文本框是可以输入的

![](/imgs/hido/hido9.png){data-zoomable}

这个容器化过程几乎是无痛的~

## 6 执行测试

上述完成后，点击“构建”，从构建详情可以看到，前后端编译分步执行，具体哪方出现问题一目了然，做到了在构建层面的前后端分离。

![](/imgs/hido/hido7.png){data-zoomable}

## 7 pom.xml文件修改 

如果是老项目的话，还得移除一下残存在pom.xml 的相关命令，包括且不限于：

+ npm install
+ npm run build
+ remove-node-modules
+ clean-webapps
+ copy-dist

> 养成擦屁股的好习惯，否则就真变屎山了~

## 后记

并不是强制修改，只是推荐和建议，也是我个人觉得的最佳实践。我已经发给我们组的同事都看过。也内部试行过一段时间，我使用在线文档的形式，比较方便，但感觉还是需要在博客上再记录分享一下。

最后感谢下文档的部分内容是由我的同事徐子龙和于永琪编写的；如果有好的意见也可以单独和我交流。
