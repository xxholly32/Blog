# ISC 体验优化

## 背景

我们最近在 isc 2.1 和大华最近的综合安防产品进行体验上的对比，发现了一些体验上的问题：

具体可以先看下我们的改动方案 ISC视觉通用问题及优化方案

这里我想简单聊下优化方案如何去实现，后续我们会在组件迭代以及 isc 2.2 中落地

## 1.1.1 列表纵向滚动条

嗯之前设计外部滚动条的话，有一些历史原因，都是一些技术债，我就不在这里提了，现在要解决这个问题，主要还是需要 el-table 在适当的布局中自适应。而 hui 的 el-table 需要动态调整 height 的值；

方案一：外层包一个容器，动态计算高度，并抛出给外层的hui 的 table，

demo 如下：

方案一 helloworld

这里我寻找外层容器离顶部的距离，以及固定的分页滚动条，那么 tableHeight = 浏览器视口高度 - 容器离顶部的高度 - 底部分页器的高度

缺点是，业务层需要引入一些额外的代码，定义一个变量 tableHeight

```vue
<Comp @resize="e => tableHeight = e">
  <el-table :data="tableData" :height="tableHeight">
    ...
  </el-table>
</Comp>
```

业务中的实现 demo：

在典型页面的应用场景 结合hui-pro

方案二：由徐子龙提供

还是由外部容器去提供，tableHeight 的计算，但是通过找到里面的el-table，并利用el-table的layout方法去设置高度。

方案二 helloworld

这里的优点是相对方案一业务代码改动量最小，有个hui 有个显示的逻辑，需要再加入一个参数复，就是现在必须在el-table中加入 maxheight="number"， 这里number可以设置成一个最大值

> 这个hui的缺陷在 2.42.4 版本已解决 ：内网链接无法访问

在典型页面的应用场景 结合hui-pro

这里要注意的是：我加入了 resize 防抖机制避免频繁调用：

不过加了防抖在缩放的时候会出现短暂的滚动条，这个就建议业务中在父容器上隐藏纵向滚动体

### 其他需要解决的问题

+ Comp 抽离成 hui-pro控件
+ hui 2.50 demo
+ Comp 抽离成 hui-pro-next

## 1.1.2 表单页面纵向滚动条

纵向滚动条的话，需要在容器上加入el-scrollbar , 我也写了一个demo：

表单页面纵向滚动条

这里我个人觉得以下这段代码还是放在业务中，就不封装到某个组件中了，因为有些不超过高度的不需要这个滚动条，而且这个wrap-class不同页面的值可能也不一样，所以还是放在业务中比较好

```
<el-scrollbar wrap-class="demo-scrollbar-wrap">
  <h-page-content>业务代码</h-page-content>
</el-scrollbar>
```

这里要处理的话是 h-page-container 的 `style="height:auto;"` 以前样式 是写死 height:100vh 感觉不太合适，可能需要h-pro改一下