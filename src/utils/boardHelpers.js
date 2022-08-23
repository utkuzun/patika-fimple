const _ = require('lodash')

export const checkDraw = ({ board }) => {
  return _(board).every('content')
}

export const createBoard = ({ gridsize }) => {
  return _.times(gridsize ** 2, {}).map((item, index) => {
    return { content: '', box: index }
  })
}

// export const checkWin = turn
