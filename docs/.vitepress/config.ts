export default {
	title: "xx 的博客",
	description: "前端",
	appearance: false,
	themeConfig: {
		search: {
			provider: 'local'
		},
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
						text: "谈谈黑神话悟空",
						link: "/2024/talk-about-black-myth-wukong",
					},
					{
						text: "与囧克斯（jiongks）面谈",
						link: "/2024/a-talk-with-jiongks",
					},
					{
						text: "vueconf 2024 后记",
						link: "/2024/vueconf-2024",
					},
					{
						text: "我推荐的 up 主 📽️📽️📽️",
						link: "/2024/my-favourite-up",
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
			{
				text: "翻译",
				items: [

					{
						text: "【翻译】版本控制规范",
						link: "/2025/epoch-semver-zh",
					},
					{
						text: "【翻译】GTP 最佳实践",
						link: "/2023/gpt-best-practices",
					},
					{
						text: "【翻译】前端开发的终点",
						link: "/2023/the-end-of-frontend-development",
					},
				],
			},
		],
	},
};
