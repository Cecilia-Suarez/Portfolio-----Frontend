import React from 'react'
import image from '../assets/Diseño sin título (10).png'
import Button from '../Components/Button'

const Hero = () => {
  return (
    <div className='grid grid-cols-2 justify-between items-center animate-fadeIn'>
      <div className='flex flex-col justify-center items-center gap-5'>
        <h1 className='text-5xl'>Hello! I am Cecilia Suárez</h1>
        <p className='text-justify text-base w-3/4'>Welcome to my portfolio! A couple of years ago, I started venturing into the IT world and it has completely caught me :) I love traveling, playing the piano, listening to music and everything related to web development. I am always looking for new learning and challenges that allow me to grow personally and professionally. I hope you enjoy this portfolio as much as I enjoyed making it!</p>
        <Button className="animate-bounce duration-1000">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          <span>CV</span>
        </Button>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Hero