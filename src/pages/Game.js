import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setBoard, makeMove, makePcMove } from '../reducers/boardReducer'

const Game = () => {
  const board = useSelector((state) => state.board)
  const options = useSelector((state) => state.options)
  const game = useSelector((state) => state.game)

  const dispatch = useDispatch()

  const { turn, lock, status } = game

  useEffect(() => {
    const gridsize = options.gridsize

    dispatch(setBoard({ gridsize }))
  }, [])

  const pcButton = useRef(null)

  const pcMove = async () => {
    setTimeout(async () => {
      await dispatch(makePcMove({ turn }))
    }, 2000)
  }

  const pushCard = async (id) => {
    await dispatch(makeMove({ id, turn }))
    pcButton.current.click()
  }

  return (
    <main>
      <section className='grid'>
        {board.map((item) => (
          <article
            className='card flex'
            key={item.box}
            onClick={
              !item.content && status !== 'win' && !lock
                ? () => pushCard(item.box)
                : null
            }
          >
            {item.content}
          </article>
        ))}
        <button
          className='pc-button'
          ref={pcButton}
          onClick={status === 'continue' ? pcMove : null}
        >
          Click
        </button>
      </section>
    </main>
  )
}

export default Game
