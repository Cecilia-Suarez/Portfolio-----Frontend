import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (

        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0%' }}>
            <Link to='experience' smooth={true} duration={500}>Experience</Link>
            <Link to='education' smooth={true} duration={500}>Education</Link>
            <Link to='skills' smooth={true} duration={500}>Skills</Link>
            <Link to='proyects' smooth={true} duration={500}>Proyects</Link>
            <Link to='contact' smooth={true} duration={500}>Contact</Link>
        </div>

    )
}

export default Navbar