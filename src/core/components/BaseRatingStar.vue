<script setup lang="ts">
import { useGuid } from '@/composables/guid'
const props = defineProps<{
  variant: 'filled' | 'empty' | 'half'
}>()

const id = useGuid()

const yellowColor = '#FACC15'
const grayColor = '#C4C4C4'

let c1 = yellowColor
let c2 = yellowColor

if (props.variant === 'empty') {
  c1 = grayColor
  c2 = grayColor
}
if (props.variant === 'half') {
  c1 = yellowColor
  c2 = grayColor
}
</script>
<template>
  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient :id="id">
        <stop offset="50%" :stop-color="c1" />
        <stop offset="50%" :stop-color="c2" stop-opacity="1" />
      </linearGradient>
    </defs>
    <path
      d="M10 0.148438L12.935 6.14144L19.5 7.10844L14.75 11.7704L15.871 18.3564L10 15.2454L4.129 18.3564L5.25 11.7704L0.5 7.10844L7.064 6.14144L10 0.148438Z"
      :fill="`url(#${id})`"
    />
  </svg>
</template>
