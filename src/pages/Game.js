import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setBoard, makeMove } from '../reducers/boardReducer'

const Game = () => {
  const board = useSelector((state) => state.board)
  const options = useSelector((state) => state.options)

  const [turn, setTurn] = useState('X')
  const [status, setStatus] = useState('start')

  const toggleTurn = () => {
    const newTurn = turn === 'X' ? 'O' : 'X'
    setTurn(newTurn)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    const gridsize = options.gridsize

    dispatch(setBoard({ gridsize }))
  }, [])

  const pushCard = async (id) => {
    const { statusUpdate } = await dispatch(makeMove({ id, turn }))
    setStatus(statusUpdate)
    toggleTurn()
  }

  return (
    <main>
      <section className='grid'>
        {board.map((item) => (
          <article
            className='card flex'
            key={item.box}
            onClick={
              !item.content && status !== 'finish'
                ? () => pushCard(item.box)
                : null
            }
          >
            {item.content}
          </article>
        ))}
      </section>
    </main>
  )
}

export default Game
