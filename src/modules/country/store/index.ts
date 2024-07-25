import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type Country } from '@/modules/country/services/types'
import countryController from '@/modules/country/services'
import { getResponse } from '@/core/services/utils'

export const useCountryStore = defineStore('countryStore', () => {
  const countryList = ref<Country[]>([])
  const userFilter = ref('')

  const filteredCountries = (): Country[] => {
    return countryList.value.filter((item) =>
      item?.name?.official
        .toString()
        .toLocaleLowerCase()
        .includes(userFilter.value.toLocaleLowerCase())
    )
  }

  /**
   * Asynchronous function to get all the Countries
   * @return {ApiResponse<null>}
   */
  async function dispatchGetCountries() {
    const response = await countryController.getCountries()
    if (response.success && response.data) {
      // const prueba: Partial<Country[]> = response.data
      // console.log(prueba)
      countryList.value = <Country[]>response.data
      //const newCountries = response.data.map((country: any) => new Country(country))
      // console.log(newCountries)
    }
    return getResponse(response)
  }
  return {
    countryList,
    userFilter,
    filteredCountries,
    dispatchGetCountries
  }
})
