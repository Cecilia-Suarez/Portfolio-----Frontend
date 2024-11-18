import React from 'react'
import { Link } from 'react-scroll'


const Navbar = () => {

    return (
        <div className="flex justify-between items-center gap-2">
            <Link to='experience' smooth={true} duration={2500} offset={-50} className='cursor-pointer font-medium'>Experience</Link>
            <Link to='education' smooth={true} duration={2500} offset={-50} className='cursor-pointer font-medium'>Education</Link>
            <Link to='skills' smooth={true} duration={2500} offset={-50} className='cursor-pointer font-medium'>Skills</Link>
            <Link to='proyects font-medium' smooth={true} duration={2500} offset={-50} className='cursor-pointer font-medium'>Proyects</Link>
            <Link to='contact' smooth={true} duration={2500} offset={-50} className='cursor-pointer font-medium'>Contact</Link>
        </div>
    )
}

export default Navbar