import { createSlice } from '@reduxjs/toolkit'
// const _ = require('lodash')

const initialState = []

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoard(state, action) {
      return action
    },

    setElement(state, action) {
      const { id, turn } = action.payload
      return state.map(
        (item) => (item.id = id ? { ...item, content: turn } : item)
      )
    },
  },
})

export default boardSlice.reducer
