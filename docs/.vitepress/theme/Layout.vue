<script setup>
import DefaultTheme from 'vitepress/theme'
import AiSummary from './components/AiSummary.vue'
import Analysis from './components/analysis.vue'
import VPSwitchAppearance from './components/VPSwitchAppearance.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- <template #nav-bar-content-before>
      <Analysis />
    </template> -->
    <template #nav-bar-content-after>
      <VPSwitchAppearance />
    </template>
    <!-- <template #layout-top>
      <AiSummary />
    </template> -->
  </Layout>
</template>
