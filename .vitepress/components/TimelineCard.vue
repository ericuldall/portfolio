<script setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid';
const props = defineProps({
  item: Object
});
</script>

<template>
  <div class="rounded-xl bg-[var(--vp-c-default-soft)] mb-8">
    <div class="p-2 rounded-t-xl" :style="{ backgroundColor: item.color }">
      <small class="font-bold text-white">{{item.date}}</small>
    </div>
    <div class="p-4">
      <div class="text-2xl font-bold">{{ item.title }}</div>
      <div class="text-xl font-semibold">{{ item.subtitle }}</div>
      <div class="mt-8" v-html="item.description"></div>
      <a class="flex justify-between items-center bg-white text-black p-2 text-center rounded shadow hover:animate-pulse mt-4 block font-bold" :href="item.link" v-if="item.link" target="_blank">{{ item.linkText || item.link }} <ArrowTopRightOnSquareIcon class="w-4 h-4 text-black" /></a>
    </div>
  </div>
</template>
