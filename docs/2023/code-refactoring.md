# 一次代码优化记录 --- 代码审核实践（二）

## 背景

这个应该算 代码审核实践（二），这次因为问题太多了，大部分都我自己去改了，这次的记录也是我自己的一次代码优化的记录。

> 以下是我在做大屏页面中遇到的一些代码问题

## 逻辑问题

因为大屏的特殊性，左右侧的数据展示小部件，以及一些弹窗的数据交互会非常多。那大家肯定会用到 `vuex` 去处理，但 `vuex` 会导致代码的可读性变差，而且一旦 `vuex` 的数据定义多了，反而会对整体的数据流的理解造成困难。

一般 vue 数据传输方式有3种：

+ props 主要用于父子组件之间的数据传递
+ provide/inject 主要用于层级较深的组件之间的数据传递，比如父组件 -> 子组件 -> 孙子组件，element-ui 中只有 el-form 和 el-form-item 之间的数据传递才使用了 provide/inject
+ vuex 主要用于跨组件之间的数据传递

我在分析了业务以后，其实感觉大部分都不需要用 `vuex`；所以我使用了`props`、 `provide` 和 `inject` 来进行数据的传递，并采用 `composition-api` 进行了一些封装。只有整个大屏右上角有个区域切换，才加了一个 vuex 的状态管理。

以下是我的一些重构代码：

### 采用一些 composition-api 进行一些封装

```js{1-2}
+ const { visiableRef: alarmSettingDlgVis, toggle: toggleAlarmSetting } = useDialog()
+ const { visiableRef: shelfCellDlgVis } = useDialog()

- const showAlarmSettingDialog = computed({
-   get() {
-     return store.alarmSettingDialogVisible
-   },
-   set(val) {
-     store.toggleAlarmSettingDialog(val)
-   },
- })
- const showShelfCellsDialog = computed({
-   get() {
-     return store.shelfCellsDialogVisible
-   },
-   set(val) {
-     store.toggleShelfCellsDialog(val)
-   },
- })

```

useDialog 的实现的话比较简单，可以看下 内网链接无法访问 

### 尽可能将复杂数据流解构清楚

```js{2,4,6,9-14}
// 所选中的货架格子
const currentCell: Ref<cellType | undefined> = ref()
// 所选中的事件
const currentEvent: Ref<eventType | undefined> = ref()
// 所选中的货架
const currentShelf: Ref<shelfType | undefined> = ref()

// 注入当前选中的货架、事件或者格子
const currentDetail = computed(() => {
  currentCell: currentEvent.value,
  currentEvent: currentShelf.value,
  currentShelf: currentShelf.value,
)
provide('currentDetail', currentDetail)
```

过多的数据传递会导致代码的可读性变差，那我们可以采用 `typescript`，当然你不用也是可以的；但对于数据来说，还是要整理，并描述清楚，这样在后续的维护中，比如这里的 `currentDetail`，会更加的方便。至于是放到 provide 还是放到 vuex 中，这个还是要根据实际情况来定。

这里业务上的梳理会比较重要，理清楚后端和前端的数据传递，以及前端的数据如何解构与存储。切勿后端给的数据，前端就直接用，这样会导致数据的混乱，后续的维护会变得非常困难。还有一个的话就是不要随意定义数据，多定义一个数据就会多一层心智负担。

### 尽可能解耦一些 components 组件

这里的 `components` 指的是我们工程中的 `components` 文件夹，我理解的 `components` 是放一些通用的组件，比如按钮、弹窗、表格等等，这些组件应该是可以复用的，而不是只能在某个页面中使用。那其实大部分情况下，我们做出来的在 `components` 下面的文件，放到其他项目是无法直接使用的，因为它们的数据是和当前项目绑定的，可能会采用了很多 `vuex`。

所以，我个人建议是 `components` 文件夹下面的组件，应该是一个纯粹的组件，尽可能和业务数据解耦，使用 `props` `emits` `methods` 等方法来传递数据，这样在后续的维护中，会更加的方便。

> 当然判断是否要放到 components 文件夹下面，还是要根据实际情况来定，如果有被复用了，我觉得就要提出来了。如果觉得好还可以提炼到code-fun中，比如 内网链接无法访问

### 采用一些辅助变量去维护复杂的数据流

经常会出现这种场景，某一个值等于xx的时候，页面要展示xx的样式，这个时候我们可以采用一些辅助变量去维护这些数据，这样在后续的维护中，会更加的方便。当业务场景比较复杂的时候，这些魔鬼变量反而会提高代码的可读性，也能够让我们整理理清楚业务逻辑。

> 有点像以前解图形算法的辅助线。

```js{14,15}
+ // TODO: 3D货架状态，应该可以再优化成2个字段
+ const { NORMAL_STATE, ALARM_STATE, NORMAL_ACTIVE_STATE, ALARM_ACTIVE_STATE } = {
+   NORMAL_STATE: { color: '#02B1FF', text: '正常', key: 'status', value: 1 },
+   ALARM_STATE: { color: '#FF000B', text: '报警', key: 'status', value: 2 },
+   NORMAL_ACTIVE_STATE: { color: '#00C3aa', text: '正常高亮', key: 'active', value: true },
+   ALARM_ACTIVE_STATE: { color: '#FF000B', text: '报警高亮', key: 'active', value: false },
+ }
...

# 大家都不喜欢写注释
- shelve.active = shelve.status === 1
- shelve.status = 2

+ shelve.active = shelve.status === NORMAL_STATE.value
+ shelve.status = ALARM_ACTIVE_STATE.value
```

再秀一波 `chatGPT` 的肌肉，它帮我重构了一下，思路也是类似

```js
- data.forEach((grid) => {

+ // 定义渐变色的数组
+ const colors = [
+   '#008DFF', // 蓝色
+   '#389e0d', // 绿色
+   'linear-gradient(180deg, #ffc53d 0%, #389e0d 50%, #008DFF 100%)', // 黄色到蓝色的渐变
+   'linear-gradient(180deg, #ffa940 0%, #ffc53d 33%, #389e0d 66%, #008DFF 100%)', // 橙色到蓝色的渐变
+   'linear-gradient(180deg, #f5222d 0%, #ffa940 25%, #ffc53d 50%, #389e0d 75%, #008DFF 100%)', // 红色到蓝色的渐变
+ ]

+ // 将温度数据转换成带高度和渐变色的对象数组
+ const result = data.map((grid) => {
+   // 将温度值限制在最小值和最大值之间
    const temp = Math.min(Math.max(grid.temperatureValue, minLine), maxLine)
-   if (temp === minLine) {
-     grid.height = 0
-     grid.color = `${template}(180deg, #008DFF 0%, #008DFF 100%)`
-     return
-   }
-   grid.height = Math.round(((temp - minLine) / section) * 100)
+   // 根据温度值计算出所在区间的索引
    const index = Math.ceil((temp - minLine) / lineHeight)
-   grid.color = index === 1
-     ? `${template}(180deg, #008DFF 0%, #008DFF 100%)`
-     : index === 2
-       ? `${template}(180deg, #389e0d 0%, #008DFF 100%)`
-       : index === 3
-         ? `${template}(180deg, #ffc53d 0%, #389e0d 50%, #008DFF 100%)`
-         : index === 4
-           ? `${template}(180deg, #ffa940 0%, #ffc53d 33%, #389e0d 66%, #008DFF 100%)`
-           : `${template}(180deg, #f5222d 0%, #ffa940 25%, #ffc53d 50%, #389e0d 75%, #008DFF 100%)`
+   // 根据索引选择对应的渐变色
+   const color = colors[Math.min(index - 1, colors.length - 1)]
+   // 根据高度计算出格子的高度百分比
+   const height = Math.round(((temp - minLine) / section) * 100)
+   return { ...grid, height, color }
  })
- return data

+ // 返回带高度和渐变色的对象数组
+ return result

```

代码有点复杂，也是因为太复杂了，所以我让它帮帮忙，但看得出它的思路也是类似，定义了一个 colors 来解构复杂的业务逻辑；效果的话应该是这个 内网链接无法访问

> BTW，注意下它的注释，写的可真全；而且它里面用了map 并没有用forEach，不管在解耦和复用程度都是最佳的。妙啊

## 样式问题

样式有个通用的问题，就是只要hui没有的，大家就喜欢问设计要切片，虽然这样是最快，但这里会存在一个问题，由于资源问题会导致加载过慢。所以我们需要尽量的使用 纯css样式，但不一定所有都可以实现，所以我们有时候需要和设计再拉扯一下，让他们尽量的使用纯css样式，这样我们的代码会更加的简洁，也会更加的好维护与复用，最重要还是性能最好。

> 特别是大的图片，一定要少用，如果非要有背景图片也最好说服交互用那种可以背景重复的图片；再抠细一点的话可以用雪碧图。

### 用纯css的方式实现按钮的背景

```css
.status-btn-container button {
- background-image: url('@/assets/images/status-btn-nor.png');
  width: 70px;
  cursor: pointer;
  color: #a2a2a2;
+ border: 1px solid #a2a2a2;
+ border-radius: 15px / 15px;
+ background: #01172a;
  &:hover {
-   background-image: url('@/assets/images/status-btn-hover.png');
+   box-shadow: inset 0 0 4px #fff;
  }
  &.active {
-   background-image: url('@/assets/images/status-btn-active.png');
+   border-color: #4a99d9;
+   box-shadow: inset 0 0 10px #4a99d9;
    color: #4a99d9;
  }
}
```

可以看到这里去掉了3个图片了，用纯边框的形式来实现，这样就可以减少资源的加载。

其实按钮和文字的展示是可视化领域的难点，并不一定可以复用，在按钮这块我找了一些资料，可以参考下：

+ https://codepen.io/yuhomyan/pen/OJMejWJ
+ https://github.com/chokcoco/iCSS/issues/152
+ https://css-tricks.com/css-ing-candy-ghost-buttons/

其实改改颜色，改改边框，改改阴影，改改字体发光，就可以实现很多不同的按钮样式，这里我就不一一列举了。顺便列下我做 code-fun 的按钮，后续也会不断维护和迭代，可以参考下：

内网链接无法访问

### 尽量采用 flex 布局

我发现我们的同学布局代码特别的爱用 `absolute` ，因为这样也是最快的，但是这样会导致很多问题，比如说我们的布局会很难维护；响应式也会做的比较差，所以我推荐尽量使用 flex 布局，这样我们的代码会更加的简洁，也会更加的好维护。flex 里面的很多属性都很有用，比如说 align-items ，justify-content ，flex-direction，gap 等等，这里我就不一一列举了；主要还是重点说下 gap，能够减少很多 padding 和 margin 的设置。

### 奇技淫巧

多关注 [chokcoco](https://github.com/chokcoco/iCSS) 的文章，我不懂都那里找，我也推荐一些，可能在大屏中能用到的方案：

+ ::before 和 ::after
+ border-image
+ transform + translate：很多设计可能不会在交互稿体现，但是可视化很多地方都能加动画
+ clip-path
+ 灵活使用svg，这里有好多图标：<https://icones.js.org/>，可以直接复制代码，也可以下载svg文件

## 总结

其实能代码解决的问题都不是问题，更多的是我们前端开发工程师对事情的精益求精的态度；当然有很多同事和我说时间紧来不及，将就就可以了；确实有些定制或者项目，你爱怎么写怎么写，但一些关键的基线代码，我希望大家能拿出精益求精的态度；

还有一种情况是时间很急，我先用一种方案，但我后续会优化这块代码，这一种我推荐的形式是说我们在代码中加入TODO: 这样的注释，在后续有时间可以回溯这些 TODO: 的地方，进行优化，可以看到前面有个 demo 我就加了 TODO。当然我们组的也可以在对应的 commit 中艾特我，一起解决这一些疑难问题。

最后，讲个笑话：程序员 2 大烦恼，不想写注释和别人代码没有注释。所以，一定要写注释。