import type { ApiResponse } from '@/core/services/types'

/**
 * Function to standarize the response from the API
 * @return {ApiResponse<null>}
 */
function getResponse(response: ApiResponse<any>): ApiResponse<null> {
  if (response.success) {
    return {
      success: true,
      data: null,
      message: 'OK'
    }
  } else {
    return {
      success: false,
      message: response.message,
      data: null
    }
  }
}

export { getResponse }
