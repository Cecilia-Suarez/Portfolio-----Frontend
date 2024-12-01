import React from 'react'
import Form from '../Components/Form'
import '../Styles/prueba.css'

const Contact = () => {
  return (
    <div>
      <div className='shapedividers_com-5462 h-48 bg-[#94e1fe] -mt-12'>

      </div>
      <div id='contact' className='animate-slideInUp items-center text-center  bg-[#5bc9fe] '>
        <h2 className='text-3xl animate-fadeIn mb-6'>Contact</h2>
        <Form />
      </div>
      
    </div>

  )
}

export default Contact