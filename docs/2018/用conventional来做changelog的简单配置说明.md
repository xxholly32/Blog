# 用conventional来做changelog的简单配置说明

## 日志操作相关命令

```
// 全局安装conventional-changelog commitizen
npm install -g conventional-changelog commitizen

// 提交代码
git cz

// 打tag自动生成changelog
npm version [major|minor|patch]

```


以下是在阮一峰基础上的扩展[http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

## [cz-customizable](https://github.com/leonardoanalista/cz-customizable)

分类别添加scope

+ 安装
```
// 之前要安装commitizen
// install
npm install cz-customizable --save-dev
```
+ 添加package.json配置
```
...
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  },
  // 这个默认指向.cz-config.js
  "cz-customizable": {
    "config": "config/path/to/my/config.js"
  }
}
```

+ .cz-config.js 

配置默认有个[example](https://github.com/leonardoanalista/cz-customizable/blob/master/cz-config-EXAMPLE.js)

运行git cz后会让你选择你配置的scopes

## [commitlint](https://github.com/marionebl/commitlint)

在阮一峰的文档里面，validate-commit-msg 官网写着已经废弃，并指向了commitlint

安装步骤就不详细说了，具体见[这里](https://marionebl.github.io/commitlint/#/guides-local-setup)

这里引入了[husky](https://github.com/typicode/husky)，在git commit -m "" 或者直接vscode提交，项目提交都进行hook，并抛出错误

## 思考

运用conventional-changelog官方都是推荐的angular的默认配置，也看过一些别的配置，由于配置项过多没有自己实现一个；后续可以根据项目需要自己去做一个相关的js配置。

比较不喜欢的一点就是angular的配置，只有fix,feature及其他2个可以生成在配置文件中，doc居然不行。

[官方的说法是：](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)

> This will not overwrite any previous changelog. The above generates a changelog based on commits since the last semver tag that match the pattern of a "Feature", "Fix", "Performance Improvement" or "Breaking Changes".

我测试了下还有个Reverts回退，是会记录在changelog上面的；

有一些项目中的merge，打包等，暂时没有选项，可以先写在不被记录的一些选项上，比如doc。

### 附，commit head：用途一览

| 值 | 描述 |
| :--- | :--- |
| feat | 新增一个功能 |
| fix | 修复一个Bug |
| docs | 文档变更 |
| style | 代码风格变更（不影响功能，例如空格、分号等格式修正以及代码`review`缺陷修复等） |
| refactor | 重构（不是修复Bug，也不是新增功能） |
| perf | 改善性能 |
| test | 增加测试 |
| chore | 开发工具变动（构建，脚手架工具等） |
| revert | 代码回退 |

> 相关文献

+ [Commit message 和 Change log 编写指南 阮一峰](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)