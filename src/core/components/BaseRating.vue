<script setup lang="ts">
import BaseRatingStar from '@/core/components/BaseRatingStar.vue'
const props = defineProps<{
  rating: number
}>()

const max = 5
const threshold = 0.2
const half = +(props.rating - Math.floor(props.rating) - 0.5).toFixed(2)
const top = max - Math.ceil(props.rating)

function isHalf() {
  if (half >= threshold * -1 && half <= threshold) {
    return 'half'
  }

  if (half <= threshold * -1) {
    return 'empty'
  }

  return 'filled'
}
</script>
<template>
  <div className="flex items-center bg-white">
    <BaseRatingStar variant="filled" v-for="n in Math.floor(props.rating)" :key="n" />
    <BaseRatingStar :variant="isHalf()" />
    <BaseRatingStar variant="empty" v-for="n in top" :key="n" />
  </div>
</template>
