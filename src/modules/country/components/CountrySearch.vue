<script setup lang="ts">
import { MagnifyingGlassIcon, RocketLaunchIcon } from '@heroicons/vue/20/solid'
const userFilter = defineModel()
</script>
<template>
  <div class="mx-auto mt-12 max-w-7xl overflow-hidden sm:px-6 lg:px-8">
    <label for="country" class="block text-sm font-medium leading-6 text-gray-900"
      >Search country:</label
    >
    <div class="mt-2 flex rounded-md shadow-sm">
      <div class="relative flex flex-grow items-stretch focus-within:z-10">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <RocketLaunchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="text"
          v-model="userFilter"
          name="country"
          id="country"
          class="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-200 sm:text-sm sm:leading-6"
          placeholder="Search by Country Name"
        />
      </div>
      <button
        type="button"
        class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <MagnifyingGlassIcon class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
        Search
      </button>
    </div>
  </div>
</template>
