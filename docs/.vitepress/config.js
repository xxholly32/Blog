export default {
	title: "xx 的博客",
	description: "前端",
	themeConfig: {
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/xxholly32/Blog",
			},
		],
		sidebar: [
			{
				text: "介绍",
				items: [
					{ text: "介绍", link: "/index" },
				],
			},
			{
				text: "2023 年",
				items: [
					{
						text: "chatGPT 使用指南（一） 🔥🔥",
						link: "/2023/how-to-use-chatGPT",
					},
					{
						text: "最佳实践与心智负担",
						link: "/2023/best-practice-and-mental-burden",
					},
					{
						text: "2023 Flag 🚩🚩🚩",
						link: "/2023/flag",
					},
				],
			},
		],
	},
};
