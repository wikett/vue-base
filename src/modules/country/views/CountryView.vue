<script setup lang="ts">
import CountrySystem from '@/modules/country/components/CountrySystem.vue'
</script>

<template>
  <Suspense>
    <CountrySystem />
    <template #fallback>Loading...</template>
  </Suspense>
</template>
