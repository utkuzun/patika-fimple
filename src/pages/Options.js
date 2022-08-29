import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { setOptions } from '../reducers/optionsReducer'

const Options = () => {
  const options = useSelector((state) => state.options)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [optionForm, setOptionForm] = useState({
    gridsize: 3,
    mode: 'single',
    difficulty: 'easy',
  })

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setOptionForm({ ...optionForm, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setOptions(optionForm))
    navigate('/game')
  }

  return (
    <section>
      <form className='form-section' onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor='gridsize'>Gridsize</label>
          <select name='gridsize' onChange={handleFormChange}>
            {options.gridOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className='input-container'>
          <label htmlFor='difficulty'>Difficulty</label>
          <div>
            <select name='difficulty' onChange={handleFormChange}>
              <option value='easy'>easy</option>
              <option value='hard'>hard</option>
            </select>
          </div>
        </div>
        <div className='input-container'>
          <label htmlFor='mode'>Mode</label>
          <select name='mode' onChange={handleFormChange}>
            <option value='twoPlayer'>two player</option>
            <option value='single'>single</option>
          </select>
        </div>
        <button type='submit'>
          <Link to='/game'></Link>
          Start game
        </button>
      </form>
    </section>
  )
}

export default Options
