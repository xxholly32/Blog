const path = require('path');

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/blog/',
  // TODO: 看下host的配置
  host: 'localhost',
  themeConfig: {
    nav: [{
      text: 'Home',
      link: '/2019/',
    }, ],
    sidebar: [
      ["/", "介绍"],
      {
        title: '2019',
        path: '/2019/',
        collapsable: false,
        children: [
          '/2019/vscode使用心得'
        ],
      },
      {
        title: '2018',
        path: '/2018/',
        collapsable: false,
        children: ['如何用github的issues来做日常工作管理'],
      }
    ],
  },
};