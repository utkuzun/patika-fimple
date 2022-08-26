import { createSlice } from '@reduxjs/toolkit'

import { checkDraw, createBoard, checkWin } from '../utils/boardHelpers'

import { setStatus, toggleTurn, toggleLock } from '../reducers/gameReducer'

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
      dispatch(setStatus('draw'))
      return
    }

    const isWin = checkWin({ board, turn, id })

    if (isWin) {
      dispatch(setStatus('win'))
      return
    }

    dispatch(setStatus('continue'))
    dispatch(toggleTurn())
    dispatch(toggleLock())
  }
}

export const makePcMove = ({ turn }) => {
  return async (dispatch, getState) => {
    const board = getState().board
    const emptyBox = board.find((item) => item.content === '')

    dispatch(makeMove({ id: emptyBox.box, turn }))
  }
}

export const { setBoard, setElement } = boardSlice.actions

export default boardSlice.reducer
