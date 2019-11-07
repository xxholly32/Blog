const path = require('path');

module.exports = {
  title: 'xx 的 blog',
  description: 'Why so serious?',
  base: '/Blog/',
  dest: 'dist/',
  theme: 'ououe',
  themeConfig: {
    cover: './cover.jpg',
    logo: './logo.png',
    search: true,
    pageGroup: 5,
    postTime: {
      createTime: 'Create Time',
      lastUpdated: 'Last Updated',
    },
    nav: [
      {
        text: 'Home',
        link: '/',
      },

      { text: '2019', link: '/2019/' },
      { text: '2018', link: '/2018/' },
      { text: '2016', link: '/2016/' },
      { text: 'Tags', link: '/tag/' },
      { text: 'about', link: '/about' },
      {
        text: 'Github',
        link: 'https://github.com/xxholly32/Blog',
      },
    ],
    sidebar: [
      ['/about', '介绍'],
      {
        title: '2019',
        path: '/2019/',
        collapsable: false,
        children: [
          '/2019/个人年度计划',
          '/2019/everyone can use english',
          '/2019/浏览器选项',
          '/2019/vscode使用心得',
          '/2019/2019 seeconf后记',
          '/2019/2019 vueconf后记',
          '/2019/前方的路',
          '/2019/曾国藩家书',
          '/2019/what-i-learn-from-analysis-vuepress',
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
          '/2018/如何用github的issues来做日常工作管理',
        ],
      },
      {
        title: '2016',
        path: '/2016/',
        collapsable: false,
        children: ['/2016/[翻译]2016年JavaScript开发者需要了解的技能'],
      },
    ],
  },
};
