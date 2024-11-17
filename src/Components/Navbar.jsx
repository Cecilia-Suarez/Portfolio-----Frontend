import React from 'react'
import { Link } from 'react-scroll'


const Navbar = () => {

    return (
        <div className="flex justify-between items-center gap-2">
            <Link to='experience' smooth={true} duration={2500} offset={-50}>Experience</Link>
            <Link to='education' smooth={true} duration={2500} offset={-50}>Education</Link>
            <Link to='skills' smooth={true} duration={2500} offset={-50}>Skills</Link>
            <Link to='proyects' smooth={true} duration={2500} offset={-50}>Proyects</Link>
            <Link to='contact' smooth={true} duration={2500} offset={-50}>Contact</Link>
        </div>
    )
}

export default Navbar