<script setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  item: Object,
  featured: Boolean
});
</script>

<template>
  <component
    :is="item.link ? 'a' : 'div'"
    :href="item.link"
    :target="item.link ? '_blank' : null"
    :rel="item.link ? 'noreferrer' : null"
    class="eu-card group flex flex-col"
    :class="featured ? 'p-6 md:p-8' : 'p-5 md:p-6'"
  >
    <div class="flex items-start justify-between gap-4 mb-4">
      <div>
        <div class="eu-eyebrow">{{ item.kind }}</div>
        <h2 class="font-bold leading-tight mt-1" :class="featured ? 'text-3xl md:text-4xl' : 'text-2xl'">
          {{ item.title }}
        </h2>
        <div class="text-sm opacity-70 mt-1" v-if="item.role || item.dates">
          <span v-if="item.role">{{ item.role }}</span>
          <span v-if="item.role && item.dates"> &middot; </span>
          <span v-if="item.dates">{{ item.dates }}</span>
        </div>
      </div>
      <ArrowTopRightOnSquareIcon
        v-if="item.link"
        class="w-5 h-5 flex-none mt-1 opacity-40 group-hover:opacity-100 group-hover:text-[var(--vp-c-brand-1)] transition"
      />
    </div>

    <div class="leading-7 opacity-90" :class="featured ? 'md:text-lg' : ''" v-html="item.description"></div>

    <ul class="mt-5 space-y-2 text-sm opacity-90" v-if="item.highlights">
      <li class="flex gap-2" v-for="point in item.highlights" :key="point">
        <span class="text-[var(--vp-c-brand-1)] font-bold flex-none">&rsaquo;</span>
        <span v-html="point"></span>
      </li>
    </ul>

    <div class="flex flex-wrap gap-2 mt-6 pt-5 eu-card-footer" v-if="item.stack">
      <span class="eu-chip" v-for="tech in item.stack" :key="tech">{{ tech }}</span>
    </div>

    <div class="mt-4 text-sm font-bold text-[var(--vp-c-brand-1)]" v-if="item.link">
      {{ item.linkText || item.link }} &rarr;
    </div>
  </component>
</template>
