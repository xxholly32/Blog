// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue';
import mediumZoom from 'medium-zoom'
import 'uno.css'
import './index.css';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx)
  },
  setup() {
    onMounted(() => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
    });
  },
}