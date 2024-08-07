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
				text: "2024 年",
				items: [
					{
						text: "与囧克斯（jiongks）面谈",
						link: "/2024/a-talk-with-jiongks",
					},
					{
						text: "vueconf 2024 后记",
						link: "/2024/vueconf-2024",
					},
					// {
					// 	text: "2024 Flag 🏳‍🌈🏳‍🌈🏳‍🌈",
					// 	link: "/2024/flag",
					// },
				]
			},
			{
				text: "2023 年",
				items: [
					// {
					// 	text: "2023 Flag 🚩🚩🚩与总结",
					// 	link: "/2023/flag",
					// },
					{
						text: "与托尼（antfu）面谈",
						link: "/2023/meeting-antfu",
					},
					{
						text: "chatGPT 使用指南（一）",
						link: "/2023/how-to-use-chatGPT",
					},
					{
						text: "最佳实践与心智负担",
						link: "/2023/best-practice-and-mental-burden",
					},
					{
						text: "为什么说塞尔达是天",
						link: "/2023/other/why-is-zelda-the-best"
					}
				],
			},
		],
	},
};
