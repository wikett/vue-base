<script setup lang="ts">
import { useCountryStore } from '@/modules/country/store'
import CountrySearch from '@/modules/country/components/CountrySearch.vue'
import CountryList from '@/modules/country/components/CountryList.vue'

const countryStore = useCountryStore()
const { success, message } = await countryStore.dispatchGetCountries()

if (!success) {
  console.error(message)
}
</script>

<template>
  <CountrySearch v-model="countryStore.userFilter" />

  <CountryList :countries="countryStore.filteredCountries()" />
</template>
