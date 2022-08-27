import React from 'react'

const Modal = ({ status, children }) => {
  return (
    <div
      className={`modal ${
        status === 'win' || status === 'draw' ? 'show' : 'hide'
      }`}
    >
      <article className='modal-content'>{children}</article>
    </div>
  )
}

export default Modal
