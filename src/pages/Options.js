import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { setOptions } from '../reducers/optionsReducer'

const Options = () => {
  const options = useSelector((state) => state.options)
  const dispatch = useDispatch()

  const [optionForm, setOptionForm] = useState({
    gridsize: 3,
    mode: 'single',
    difficulty: 'easy',
  })

  const handleFormChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    setOptionForm({ ...optionForm, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(optionForm)
    dispatch(setOptions(optionForm))
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='gridsize'>Gridsize</label>
          <select name='gridsize' onChange={handleFormChange}>
            {options.gridOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='difficulty'>Difficulty</label>
          <div>
            <select name='difficulty' onChange={handleFormChange}>
              <option value='easy'>easy</option>
              <option value='hard'>hard</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor='mode'>Mode</label>
          <select name='mode' onChange={handleFormChange}>
            <option value='twoPlayer'>2 Player</option>
            <option value='single'>single</option>
          </select>
        </div>
        <br />
        <button type='submit'>
          <Link to='/game'></Link>
          start game
        </button>
      </form>
    </section>
  )
}

export default Options
