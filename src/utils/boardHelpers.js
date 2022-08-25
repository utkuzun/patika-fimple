const _ = require('lodash')
// import { mod } from 'mathjs'

const getRow = (id, nthRow, gridsize) => {
  const diff = id - nthRow * gridsize
  console.log('diff', diff)
  if (diff <= 0) {
    console.log('left')
    return [id, id + 1, id + 2]
  }

  if (diff >= gridsize - 1) {
    console.log('right')
    return [id - 2, id - 1, id]
  }

  console.log('middle')
  return [id - 1, id, id + 1]
}

export const checkDraw = ({ board }) => {
  return _(board).every('content')
}

export const createBoard = ({ gridsize }) => {
  return _.times(gridsize ** 2, {}).map((item, index) => {
    return { content: '', box: index }
  })
}

export const checkWin = ({ board, turn, id }) => {
  const boardLen = board.length
  const gridsize = Math.sqrt(boardLen)

  const nthRow = Math.floor(id / gridsize)
  //   const nthCol = mod(id, gridsize)

  const row = getRow(id, nthRow, gridsize)

  console.log(row, nthRow, turn, id)
}
