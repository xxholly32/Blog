const path = require('path');

module.exports = {
  title: 'xx 的 blog',
  description: 'Just playing around',
  base: '/blog/',
  // TODO: 看下host的配置
  host: 'localhost',
  themeConfig: {
    nav: [{
      text: 'Home',
      link: '/',
    }, ],
    sidebar: [
      ["/", "介绍"],
      {
        title: '2019',
        path: '/2019/',
        collapsable: false,
        children: [
          '/2019/个人年度计划',
          '/2019/浏览器选项',
          '/2019/vscode使用心得',
          '/2019/2019 seeconf后记',
        ],
      },
      {
        title: '2018',  
        path: '/2018/',
        collapsable: false,
        children: [
          '/2018/用conventional来做changelog的简单配置说明',
          '/2018/第二届vueconf后记',
          '/2018/如何用worktile做工作协作',
          '/2018/vue 单元测试心得总结',
          '/2018/如何用github的issues来做日常工作管理'
        ],
      },
      {
        title: '2016',
        path: '/2016/',
        collapsable: false,
        children: [
          '/2016/[翻译]2016年JavaScript开发者需要了解的技能'
        ],
      },
    ],
  },
};