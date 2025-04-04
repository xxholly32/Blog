<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { useData } from 'vitepress/dist/client/theme-default/composables/data'
import { APPEARANCE_KEY } from 'vitepress/dist/client/shared'
import VPSwitch from 'vitepress/dist/client/theme-default/components/VPSwitch.vue'

const { site, isDark } = useData()
const checked = ref(false)
const toggle = typeof localStorage !== 'undefined' ? useAppearance() : () => { }

onMounted(() => {
  checked.value = document.documentElement.classList.contains('dark')
})

// @ts-expect-error: Transition API
const isAppearanceTransition = document.startViewTransition &&
  !window.matchMedia(`(prefers-reduced-motion: reduce)`).matches

function useAppearance() {
  const query = window.matchMedia('(prefers-color-scheme: dark)')
  const classList = document.documentElement.classList

  let userPreference = localStorage.getItem(APPEARANCE_KEY)

  let isDark =
    (site.value.appearance === 'dark' && userPreference == null) ||
    (userPreference === 'auto' || userPreference == null
      ? query.matches
      : userPreference === 'dark')

  query.onchange = (e) => {
    if (userPreference === 'auto') {
      setClass((isDark = e.matches))
    }
  }

  function toggle(event: MouseEvent) {
    if (!isAppearanceTransition) {
      setClass((isDark = !isDark))

      userPreference = isDark
        ? query.matches ? 'auto' : 'dark'
        : query.matches ? 'light' : 'auto'

      localStorage.setItem(APPEARANCE_KEY, userPreference)

      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )

    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(() => {
      setClass((isDark = !isDark))

      userPreference = isDark
        ? query.matches ? 'auto' : 'dark'
        : query.matches ? 'light' : 'auto'

      localStorage.setItem(APPEARANCE_KEY, userPreference)
    })

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]

      document.documentElement.animate(
        {
          clipPath: isDark ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 300,
          easing: 'ease-in',
          pseudoElement: isDark ? '::view-transition-old(root)' : '::view-transition-new(root)',
        },
      )
    })
  }

  function setClass(dark: boolean): void {
    const css = document.createElement('style')
    css.type = 'text/css'
    css.appendChild(
      document.createTextNode(
        `:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`
      )
    )
    document.head.appendChild(css)

    checked.value = dark
    classList[dark ? 'add' : 'remove']('dark')

    // @ts-expect-error keep unused declaration, used to force the browser to redraw
    const _ = window.getComputedStyle(css).opacity
    document.head.removeChild(css)
  }

  return toggle
}

watch(checked, (newIsDark) => {
  isDark.value = newIsDark
})
</script>

<template>
  <label title="toggle dark mode" class="pl-4">
    <VPSwitch class="VPSwitchAppearance" :class="{ 'VPSwitchAppearanceTransition': isAppearanceTransition }"
      :aria-checked="checked" @click="toggle">
      <span class="vpi-sun sun" />
      <span class="vpi-moon moon" />
    </VPSwitch>
  </label>
</template>

<style scoped>
.sun {
  opacity: 1;
}

.moon {
  opacity: 0;
}

.dark .sun {
  opacity: 0;
}

.dark .moon {
  opacity: 1;
}

.VPSwitchAppearance.VPSwitchAppearanceTransition {
  width: 22px;
}

.dark .VPSwitchAppearance:not(.VPSwitchAppearanceTransition) :deep(.check) {
  /*rtl:ignore*/
  transform: translateX(18px);
}
</style>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 9999;
}

.dark::view-transition-old(root) {
  z-index: 9999;
}

.dark::view-transition-new(root) {
  z-index: 1;
}
</style>