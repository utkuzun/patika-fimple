import React from 'react'

const Card = ({ box, pushCard }) => {
  return (
    <article
      className='card flex'
      onClick={pushCard ? () => pushCard(box.box) : null}
    >
      <span className='card-text'>{box.content}</span>
    </article>
  )
}

export default Card
