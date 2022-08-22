import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'twoPlayer',
  difficulty: 'easy',
  gridOptions: [3, 4, 5, 6],
  gridsize: 3,
}

const optionSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setOptions(state, action) {
      const { gridsize, mode, difficulty } = action.payload
      return { ...state, gridsize, mode, difficulty }
    },
  },
})

export const { setOptions } = optionSlice.actions
export default optionSlice.reducer
