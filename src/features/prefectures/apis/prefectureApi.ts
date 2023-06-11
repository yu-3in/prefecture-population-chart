import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import RESAS_API from '@/consts/api'
import { Prefecture } from '../types/prefecture'

export type FetchPrefecturesResponse = {
  message?: string
  result: Prefecture[]
}

export const prefectureApi = createApi({
  reducerPath: 'prefectureApi',
  baseQuery: fetchBaseQuery({
    baseUrl: RESAS_API.baseURL,
  }),
  endpoints: (builder) => ({
    fetchPrefectures: builder.query<Prefecture[], void>({
      query: () => 'prefectures',
      transformResponse: (response: FetchPrefecturesResponse) => response.result,
    }),
  }),
})

export const { useFetchPrefecturesQuery } = prefectureApi
