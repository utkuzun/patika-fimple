import { Routes, Route } from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import Options from './pages/Options'
import Game from './pages/Game'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/options' element={<Options />} />
        <Route path='/game' element={<Game />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
