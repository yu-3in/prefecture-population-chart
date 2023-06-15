import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import { prefectureApi } from '@/features/prefectures/apis/prefectureApi'
import { populationApi } from '@/features/populations/apis/populationApi'
import { selectedPopulationCategoryReducer } from '@/features/populations/stores/SelectedPopulationCategory'

export const store = configureStore({
  reducer: {
    [prefectureApi.reducerPath]: prefectureApi.reducer,
    [populationApi.reducerPath]: populationApi.reducer,
    selectedPopulationCategory: selectedPopulationCategoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([prefectureApi.middleware, populationApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// 型情報付きのuseSelectorをここで宣言
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
