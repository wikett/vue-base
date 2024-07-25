<script setup lang="ts">
import { ref } from 'vue'
import { Bars4Icon, XMarkIcon } from '@heroicons/vue/20/solid'

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="bg-gray-700">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <img class="h-16 w-auto" src="/img/logo.svg" alt="logo" />
        </RouterLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open</span>
          <Bars4Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <RouterLink
          to="/readme"
          class="text-sm font-semibold leading-6 text-white"
          activeClass="border-b-2 border-primary-400"
          >Readme <span aria-hidden="true">&rarr;</span></RouterLink
        >
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div
      class="lg:hidden"
      role="dialog"
      aria-modal="true"
      @close="mobileMenuOpen = false"
      v-show="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10"></div>
      <div
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="-m-1.5 p-1.5">
            <img class="h-8 w-auto" src="/img/logo.svg" alt="logo" />
          </RouterLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="py-6">
              <RouterLink
                to="/readme"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                activeClass="bg-gray-200"
                >Readme</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
