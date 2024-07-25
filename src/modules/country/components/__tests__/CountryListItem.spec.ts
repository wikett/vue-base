import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CountryListItem from '@/modules/country/components/CountryListItem.vue'
import { countryOne } from '@/modules/country/components/__tests__/fakeCountry'

describe('CountryListItem', () => {
  it('should render correctly', () => {
    const wrapper = mount(CountryListItem, {
      props: {
        country: countryOne
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
