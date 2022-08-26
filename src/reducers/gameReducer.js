import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  turn: 'X',
  lock: false,
  status: 'start',
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    toggleTurn(state) {
      return { ...state, turn: state.turn === 'X' ? 'O' : 'X' }
    },
    toggleLock(state) {
      return { ...state, lock: !state.lock }
    },
    setStatus(state, action) {
      return { ...state, status: action.payload }
    },
  },
})

export const { toggleTurn, toggleLock, setStatus } = gameSlice.actions
export default gameSlice.reducer
