import React from 'react'
import image from '../assets/Diseño sin título (10).png'

const Hero = () => {
  return (
    <div>
        <div>
            <h3>Hello! I am Cecilia Suárez</h3>
            <p>Welcome to my portfolio!  A couple of years ago, I started venturing into the IT world and it has completely caught me :) I love traveling, playing the piano, listening to music and everything related to web development. I am always looking for new learning and challenges that allow me to grow personally and professionally. I hope you enjoy this portfolio as much as I enjoyed making it!</p>
            <button>CV</button>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Hero