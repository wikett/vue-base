interface ApiError {
  success: boolean
  data: null
  message: string
}

interface ApiSuccess<T> {
  success: boolean
  data: T
  message: string
}

export type ApiResponse<T> = ApiError | ApiSuccess<T>
