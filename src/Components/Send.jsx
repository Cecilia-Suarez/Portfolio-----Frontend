import React from 'react'

const Send = ({name}) => {
  return (
    <div>
        {/*Icono redondo con tick, si se puede con animación. */}
        <h3>Email sent!</h3>
        <h4>I will respond to you as soon as possible, {name}</h4>
    </div>
  )
}

export default Send
