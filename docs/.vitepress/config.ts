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
				text: "2026 年",
				items: [
					{ text: "chat anything 来时路 ⭐⭐⭐", link: "/2026/chat-anything" },
					{ text: "LLM 术语", link: "/2026/llm-word" },
					{ text: "面向 AI 的设计", link: "/2026/ai-oriented-design" },
					{ text: "AI 编码闲谈 2", link: "/2026/ai-coding-experience-2" },
					{ text: "AI 编码闲谈 1", link: "/2026/ai-coding-experience" },
					{ text: "Skills 实战指南 ⭐⭐⭐", link: "/2026/skills-guide" },
					{ text: "【翻译】Claude Code 31 天实战技巧", link: "/2026/advent-of-claude-2025-zh" },
					{ text: "AI 2025 年度回顾与 2026 展望", link: "/2026/ai-2025-review-and-2026-outlook" },
				]
			},
			{
				text: "2025 年",
				items: [
					{ text: "AI 编程在日常工作中的实践 2025版 ⭐⭐⭐", link: "/2025/ai-coding-practices-2025" },
					{ text: "【翻译】上下文工程最佳实践", link: "/2025/effective-context-engineering-for-ai-agents" },
					{ text: "用 AI 复刻 v0.app (1) ⭐⭐⭐", link: "/2025/v-1-app" },
					{ text: "用 AI 复刻 bolt.new ⭐⭐", link: "/2025/minimal-bolts" },
					{ text: "如何写好代码：从团队协作到个人习惯", link: "/2025/code-optimization" },
					{ text: "Claude Code 初步上手体验 ⭐⭐", link: "/2025/claude-code" },
					{ text: "【转载】阿里元安离职感言", link: "/2025/yuanan-article" },
					{ text: "【翻译】Cursor 的 12 个技巧", link: "/2025/cursor-12-tips" },
					{ text: "【翻译】整理你的依赖", link: "/2025/categorize-deps-zh" },
					{ text: "2025 个人学习资源 ⭐⭐⭐", link: "/2025/learning-resource" },
					{ text: "【翻译】版本控制规范", link: "/2025/epoch-semver-zh" },
					{ text: "isc 220 开发笔记", link: "/2025/isc-write-note" },
					{ text: "vessel-vite 最佳实践", link: "/2025/vessel-vite-best-practice" },
					{ text: "podman 初探", link: "/2025/start-podman" },
				]
			},
			{
				text: "2024 年",
				items: [
					{ text: "技术分享探讨 ⭐⭐⭐", link: "/2024/tech-sharing" },
					{ text: "SVG 最佳实践", link: "/2024/svg-best-practices" },
					{ text: "vueconf 2024 后记", link: "/2024/vueconf-2024" },
					{ text: "谈谈上热搜这事", link: "/2024/talk-about-trending" },
					{ text: "谈谈黑神话悟空", link: "/2024/talk-about-black-myth-wukong" },
					{ text: "与囧克斯（jiongks）面谈 ⭐⭐⭐", link: "/2024/a-talk-with-jiongks" },
					{ text: "减少内耗 ⭐⭐⭐", link: "/2024/no-more-rules" },
					{ text: "如何快速的结缺陷单", link: "/2024/how-to-fast-close-issues" },
					{ text: "我推荐的 up 主 📽️📽️📽️", link: "/2024/my-favourite-up" },
					{ text: "2024 Flag 🏳‍🌈🏳‍🌈🏳‍🌈", link: "/2024/flag" },
					{ text: "docker 实践与评论系统", link: "/2024/docker-and-comment-system" },
					{ text: "国际化软件开发的最佳实践", link: "/2024/i18n-best-practices" },
				]
			},
			{
				text: "2023 年",
				items: [
					{ text: "2023 Flag 🚩🚩🚩与总结", link: "/2023/flag" },
					{ text: "HUI-VUE & Vessel 现状与未来 ⭐⭐", link: "/2023/hui-2023" },
					{ text: "vue 3 技术选型 ⭐⭐", link: "/2023/hui-vue-3" },
					{ text: "线性代码可读性更好 ？", link: "/2023/linear-code" },
					{ text: "如何给 HUI 贡献 ⭐", link: "/2023/how-to-contribut-to-hui" },
					{ text: "2023 ISC 体验优化", link: "/2023/isc-big-change" },
					{ text: "web前端个人最佳实践", link: "/2023/my-best-practice" },
					{ text: "2023 多语言规范调整", link: "/2023/language-specification-adjustments" },
					{ text: "与托尼（antfu）面谈 ⭐⭐", link: "/2023/meeting-with-antfu" },
					{ text: "记一次重大线上事故 ⭐", link: "/2023/major-online-accident" },
					{ text: "一次代码优化记录", link: "/2023/code-refactoring" },
					{ text: "chatGPT 使用指南（一） ⭐⭐⭐", link: "/2023/how-to-use-chatGPT" },
					{ text: "hui-vue 的故事 ⭐⭐", link: "/2023/hui-story" },
					{ text: "最佳实践与心智负担 ⭐⭐", link: "/2023/best-practice-and-mental-burden" },
					{ text: "前端知识图谱 ⭐⭐⭐", link: "/2023/roadmap" },
					{ text: "如何写好一个 prompt", link: "/2023/how-to-write-a-prompt" },
					{ text: "Q1 成都", link: "/2023/Q1-chengdu" },
					{ text: "吐槽", link: "/2023/talk-about-other" },
				]
			},
			{
				text: "翻译",
				collapsed: true,
				items: [
					{ text: "【翻译】整理你的依赖", link: "/2025/categorize-deps-zh" },
					{ text: "【翻译】版本控制规范", link: "/2025/epoch-semver-zh" },
					{ text: "【翻译】GTP 最佳实践", link: "/2023/gpt-best-practices" },
					{ text: "【翻译】前端开发的终点", link: "/2023/the-end-of-frontend-development" },
				],
			},
			{
				text: "非技术相关",
				collapsed: true,
				items: [
					{ text: "谈谈上热搜这事", link: "/2024/talk-about-trending" },
					{ text: "谈谈黑神话悟空", link: "/2024/talk-about-black-myth-wukong" },
					{ text: "为什么说塞尔达是天", link: "/2023/other/why-is-zelda-the-best" },
				]
			},
		],
	},
};
