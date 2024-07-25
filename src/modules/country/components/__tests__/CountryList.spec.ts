import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CountryList from '@/modules/country/components/CountryList.vue'
import CountryListItem from '@/modules/country/components/CountryListItem.vue'
import { countryOne, countryTwo } from '@/modules/country/components/__tests__/fakeCountry'

describe('CountryList', () => {
  it('should render correctly', () => {
    const wrapper = mount(CountryList)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have a CountryListItems', () => {
    const testContries = []
    testContries.push(countryOne)
    const wrapper = mount(CountryList, {
      props: {
        countries: testContries
      }
    })

    expect(wrapper.findComponent(CountryListItem).exists()).toBe(true)
  })

  it('should have more than 1 CountryListItems', () => {
    const testContries = []
    testContries.push(countryOne, countryTwo)
    const wrapper = mount(CountryList, {
      props: {
        countries: testContries
      }
    })

    expect(wrapper.findAllComponents(CountryListItem).length).greaterThan(1)
  })
})
