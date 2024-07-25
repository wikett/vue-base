<script setup lang="ts">
import type { Country } from '@/modules/country/services/types'
import { GlobeEuropeAfricaIcon, UserGroupIcon } from '@heroicons/vue/20/solid'
const props = defineProps<{
  country: Country
}>()
</script>
<template>
  <li
    :key="props.country.name.official"
    class="col-span-1 my-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-transparent text-center shadow shadow-cyan-700 transition-opacity duration-100 ease-out"
  >
    <div class="flex flex-1 flex-col px-8 pt-8">
      <img
        class="mx-auto h-32 w-full flex-shrink-0 rounded-md object-contain"
        :src="props.country.flags.svg"
        :alt="props.country.flags.alt"
      />
      <h3 class="mt-6 text-sm font-semibold text-secondary-800">
        {{ props.country.name.official }}
      </h3>
      <dl class="mt-1 flex flex-grow flex-col justify-between">
        <dd v-if="props.country.capital" class="mt-3">
          <span
            class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
            >{{ props.country.capital[0] }}</span
          >
        </dd>
      </dl>
    </div>
    <div>
      <div class="-mt-px flex divide-x divide-gray-200">
        <div class="flex w-0 flex-1">
          <div
            class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
          >
            <div class="flex flex-col items-center">
              <GlobeEuropeAfricaIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              <p class="text-sm font-semibold">{{ props.country.continents[0] }}</p>
            </div>
          </div>
        </div>
        <div class="-ml-px flex w-0 flex-1">
          <div
            class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
          >
            <div class="flex flex-col items-center">
              <UserGroupIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              <p>{{ props.country.population.toLocaleString() }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
