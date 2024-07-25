import http from '@/core/services/api'
import { type ApiResponse } from '@/core/services/types'
import { type AxiosResponse } from 'axios'

/**
 * Asynchronous function to call the API to get the Countries
 * @return {Promise<ApiResponse<any>>}
 */
async function getCountries(): Promise<ApiResponse<any>> {
  const queryString = `all`

  try {
    const response: AxiosResponse = await http.get<any>(queryString)
    return {
      success: true,
      data: response.data,
      message: 'OK'
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      message: `Error fetching data: ${error}`
    }
  }
}

export default {
  getCountries
}
