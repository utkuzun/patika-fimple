import React from 'react'

const Card = ({ box, pushCard }) => {
  return (
    <article className='card flex' onClick={() => pushCard(box.box)}>
      {box.content}
    </article>
  )
}

export default Card
