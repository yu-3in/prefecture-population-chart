import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PopulationLabel } from '../types/Population'

const initialState: { selected: PopulationLabel } = { selected: '総人口' }

const selectedPopulationCategorySlice = createSlice({
  name: 'populationCategories',
  initialState,
  reducers: {
    selectPopulationCategory: (state, action: PayloadAction<PopulationLabel>) => {
      state.selected = action.payload
    },
  },
})

export const { selectPopulationCategory } = selectedPopulationCategorySlice.actions

export const selectedPopulationCategoryReducer = selectedPopulationCategorySlice.reducer
