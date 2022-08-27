import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <section>
        <button>
          <Link to='/game'>Start Game</Link>
        </button>
      </section>
    </main>
  )
}

export default Home
