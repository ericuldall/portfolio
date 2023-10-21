<script setup>
import { useData } from 'vitepress'
import { useSidebar } from 'vitepress/theme'
import Logo from './Logo.vue';

const { isDark } = useData();
const { hasSidebar } = useSidebar();
</script>
<template>
<div class="VPNavBarTitle" :class="{ 'has-sidebar': hasSidebar }">
    <a class="title" href="/">
      <slot name="nav-bar-title-before" />
      <Logo class="logo" :class="{light: !isDark}" />
      <slot name="nav-bar-title-after" />
    </a>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  transition: opacity 0.25s;
}

@media (min-width: 960px) {
  .title {
    flex-shrink: 0;
  }

  .VPNavBarTitle.has-sidebar .title {
    border-bottom-color: var(--vp-c-divider);
  }
}

:deep(.logo) {
  margin: 10px;
  width: 200px;
}
</style>
