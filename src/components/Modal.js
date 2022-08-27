import React from 'react'

const Modal = ({ status, children }) => {
  return (
    <section className={`modal ${status === 'win' ? 'show' : 'hide'}`}>
      {children}
    </section>
  )
}

export default Modal
