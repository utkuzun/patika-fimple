import { createSlice } from '@reduxjs/toolkit'
const _ = require('lodash')

const initialState = []

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoard(state, action) {
      const { gridsize } = action.payload
      const board = _.times(gridsize ** 2, {}).map((item, index) => {
        return { content: '', box: index }
      })

      return board
    },

    setElement(state, action) {
      const { id, turn } = action.payload
      const newState = state.map((item) =>
        item.box === id ? { ...item, content: turn } : item
      )

      return newState
    },
  },
})

export const { setBoard, setElement } = boardSlice.actions

export default boardSlice.reducer
