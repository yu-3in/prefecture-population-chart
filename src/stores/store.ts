import { configureStore } from '@reduxjs/toolkit'
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux'
import { prefectureApi } from '@/features/prefectures/apis/prefectureApi'

export const store = configureStore({
  reducer: {
    [prefectureApi.reducerPath]: prefectureApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([prefectureApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// 型情報付きのuseSelectorをここで宣言
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector
