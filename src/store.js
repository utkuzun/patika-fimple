import { configureStore } from '@reduxjs/toolkit'

import boardReducer from './reducers/boardReducer'
import optionsReducer from './reducers/optionsReducer'
import gameReducer from './reducers/gameReducer'

const store = configureStore({
  reducer: {
    board: boardReducer,
    options: optionsReducer,
    game: gameReducer,
  },
})

export default store
