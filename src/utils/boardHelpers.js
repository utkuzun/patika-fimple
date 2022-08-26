const _ = require('lodash')
import { mod, subset, index } from 'mathjs'

const getRow = (id, nthCol, gridsize) => {
  console.log('nthCol', nthCol)
  if (nthCol === 0) {
    return [id, id + 1, id + 2]
  }

  if (nthCol === gridsize - 1) {
    return [id - 2, id - 1, id]
  }

  return [id - 1, id, id + 1]
}

const getCol = (id, nthRow, gridsize) => {
  if (nthRow === 0) {
    return [id, id + gridsize, id + gridsize * 2]
  }

  if (nthRow === gridsize - 1) {
    return [id - 2 * gridsize, id - gridsize, id]
  }

  return [id - gridsize, id, id + gridsize]
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
  const nthCol = mod(id, gridsize)

  const row = getRow(id, nthCol, gridsize)
  const col = getCol(id, nthRow, gridsize)

  const dial1 = [0, 4, 8]
  const dial2 = [2, 4, 6]

  const checks = { row, col, dial1, dial2 }
  const boardArray = board.map((item) => item.content)

  const checkResults = Object.entries(checks).map((check) => {
    const [name, subsetAr] = check
    const boxes = subset(boardArray, index(subsetAr))
    const isWin = boxes.every((item) => item === turn)
    return { [name]: isWin }
  })

  const isWin = checkResults.find((item) => Object.values(item)[0] === true)

  return isWin
}
