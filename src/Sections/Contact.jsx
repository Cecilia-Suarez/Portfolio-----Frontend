import React from 'react'
import Form from '../Components/Form'
import image from '../assets/Diseño sin título (10).png'

const Contact = () => {
  return (
    <div id='contact' className='animate-slideInUp' >
        <h2 className='text-3xl animate-fadeIn'>Contact</h2>
        <div className='grid grid-cols-2'>
          <img src={image} alt="" />
          <Form/>
        </div>
    </div>
  )
}

export default Contact