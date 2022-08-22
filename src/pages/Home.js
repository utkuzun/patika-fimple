import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section>
      <button>
        <Link to='/options'>Start Game</Link>
      </button>
    </section>
  )
}

export default Home
