import { configureStore } from '@reduxjs/toolkit'

import boardReducer from './reducers/boardReducer'
import optionsReducer from './reducers/optionsReducer'

const store = configureStore({
  reducer: {
    board: boardReducer,
    options: optionsReducer,
  },
})

export default store
