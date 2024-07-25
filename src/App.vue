<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/core/components/TheHeader.vue'
import TheFooter from '@/core/components/TheFooter.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-gray-200">
    <TheHeader />
    <main class="flex-1">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <RouterView />
      </div>
    </main>
    <TheFooter />
  </div>
</template>
