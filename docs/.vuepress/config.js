const path = require("path");

module.exports = {
  title: "xx 的 blog",
  description: "Why so serious?",
  base: "/Blog/",
  dest: "dist/",
  theme: "ououe",
  themeConfig: {
    cover: "./cover.jpg",
    logo: "./logo.png",
    backgroundImage: false,
    search: true,
    pageGroup: 5,
    postTime: {
      createTime: "Create Time",
      lastUpdated: "Last Updated",
    },
    nav: [
      {
        text: "Home",
        link: "/",
      },
      { text: "2021", link: "/2021/" },
      { text: "2020", link: "/2020/" },
      { text: "2019", link: "/2019/" },
      { text: "2018", link: "/2018/" },
      { text: "2016", link: "/2016/" },
      { text: "Tags", link: "/tag/" },
      { text: "about", link: "/about" },
      {
        text: "Github",
        link: "https://github.com/xxholly32/Blog",
      },
    ],
  },
};
