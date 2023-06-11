import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import RESAS_API from '@/consts/api'
import { PrefecturePopulation } from '../types/Population'
import { ResasResponse } from '@/types/ResasResponse'

export const populationApi = createApi({
  reducerPath: 'populationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: RESAS_API.baseURL,
  }),
  endpoints: (builder) => ({
    fetchPopulation: builder.query<PrefecturePopulation, number>({
      query: (prefCode: number) => ({
        url: 'population',
        params: {
          prefCode,
        },
      }),
      transformResponse: (response: ResasResponse<PrefecturePopulation>) => response.result,
    }),
  }),
})

export const { useFetchPopulationQuery, useLazyFetchPopulationQuery } = populationApi
