import { setActivePinia, createPinia } from 'pinia'
import { useCountryStore } from '@/modules/country/store'
import { describe, beforeEach, it, expect } from 'vitest'

describe('Country Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('gets the country list', async () => {
    const countryStore = useCountryStore()
    await countryStore.dispatchGetCountries()
    expect(countryStore.countryList.length).greaterThan(0)
  })
})
