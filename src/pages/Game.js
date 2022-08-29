import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setBoard, makeMove, makePcMove } from '../reducers/boardReducer'
import { resetGame } from '../reducers/gameReducer'

import Card from '../components/Card'
import Modal from '../components/Modal'

const Game = () => {
  const board = useSelector((state) => state.board)
  const options = useSelector((state) => state.options)
  const game = useSelector((state) => state.game)

  const dispatch = useDispatch()

  const { turn, lock, status } = game
  const { gridsize } = options

  useEffect(() => {
    dispatch(setBoard({ gridsize }))
    dispatch(resetGame())
  }, [])

  const pcMoveButton = useRef(null)

  const pcMove = async () => {
    setTimeout(async () => {
      await dispatch(makePcMove({ turn }))
    }, 1000)
  }

  const pushCard = async (id) => {
    await dispatch(makeMove({ id, turn }))
    pcMoveButton.current.click()
  }

  return (
    <main>
      <section className='grid'>
        {board.map((item) => (
          <Card
            box={item}
            key={item.box}
            pushCard={
              !item.content && status !== 'win' && !lock ? pushCard : null
            }
          />
        ))}
        <button
          className='pc-button'
          ref={pcMoveButton}
          onClick={status === 'continue' ? pcMove : null}
        >
          Click
        </button>
      </section>
      <Modal status={status}>
        {status === 'win' ? <h4>{turn} won the game</h4> : <h4>draw</h4>}

        <button
          onClick={() => {
            dispatch(setBoard({ gridsize }))
            dispatch(resetGame())
          }}
        >
          New game
        </button>
      </Modal>
    </main>
  )
}

export default Game
