import { configureStore } from '@reduxjs/toolkit'
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
  reducer: {},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// 型情報付きのuseSelectorをここで宣言
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector
