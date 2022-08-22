import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setBoard, setElement } from '../reducers/boardReducer'

const Game = () => {
  const board = useSelector((state) => state.board)
  const options = useSelector((state) => state.options)

  const [turn, setTurn] = useState('X')

  const toggleTurn = () => {
    const newTurn = turn === 'X' ? 'O' : 'X'
    setTurn(newTurn)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    const gridsize = options.gridsize

    dispatch(setBoard({ gridsize }))
  }, [])

  const pushCard = (id) => {
    dispatch(setElement({ id, turn }))
    toggleTurn()
  }

  return (
    <section className='grid'>
      {board.map((item) => (
        <article
          className='card flex'
          key={item.box}
          onClick={!item.content ? () => pushCard(item.box) : null}
        >
          {item.content}
        </article>
      ))}
    </section>
  )
}

export default Game
