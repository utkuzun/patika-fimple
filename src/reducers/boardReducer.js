import { createSlice } from '@reduxjs/toolkit'

import { checkDraw, createBoard } from '../utils/boardHelpers'
const initialState = []

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoard(state, action) {
      const { gridsize } = action.payload
      const board = createBoard({ gridsize })

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

export const makeMove = ({ id, turn }) => {
  return async (dispatch, getState) => {
    dispatch(setElement({ id, turn }))

    const board = getState().board

    const isDraw = checkDraw({ board })

    if (isDraw) {
      return { statusUpdate: 'draw' }
    }

    return { statusUpdate: 'continue' }
  }
}

export const { setBoard, setElement } = boardSlice.actions

export default boardSlice.reducer
