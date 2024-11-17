import React from 'react'
import Form from '../Components/Form'
import image from '../assets/Diseño sin título (10).png'

const Contact = () => {
  return (
    <div id='contact' >
        <h1>Contact</h1>
        <div className='grid grid-cols-2'>
          <img src={image} alt="" />
          <Form/>
        </div>
    </div>
  )
}

export default Contact