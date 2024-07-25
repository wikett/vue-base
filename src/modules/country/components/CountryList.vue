<script setup lang="ts">
import type { Country } from '@/modules/country/services/types'
import CountryListItem from '@/modules/country/components/CountryListItem.vue'

const props = defineProps<{
  countries: Country[]
}>()
</script>
<template>
  <div class="mx-auto mt-12 max-w-7xl overflow-hidden sm:px-6 lg:px-8">
    <TransitionGroup
      tag="ul"
      name="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      role="list"
    >
      <CountryListItem
        v-for="country in props.countries"
        :key="country.name.official"
        :country="country"
      />
    </TransitionGroup>
  </div>
</template>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>
1
