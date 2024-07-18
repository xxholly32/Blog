import DefaultTheme from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { onMounted, toRefs } from 'vue';
import { useData, useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom'
import 'virtual:uno.css'
import './index.css';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx)
  },
  setup() {
    // 获取前言和路由
    const { frontmatter } = toRefs(useData());
    const route = useRoute();
    
    // 评论组件 - https://giscus.app/
    giscusTalk({
        repo: 'xxholly32/Blog',
        repoId: 'MDEwOlJlcG9zaXRvcnk0ODA5NDkyMw==',
        categoryId: 'DIC_kwDOAt3ey84Cg4U9',
        mapping: 'pathname', // 默认: `pathname`
    }, {
        frontmatter, route
    },
        // 是否全部页面启动评论区。
        // 默认为 true，表示启用，此参数可忽略；
        // 如果为 false，表示不启用。
        // 可以在页面使用 `comment: true` 前言单独启用
        true
    );

    onMounted(() => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
    });
  },
}