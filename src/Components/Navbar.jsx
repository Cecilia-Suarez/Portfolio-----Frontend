import React from 'react'
import { Link } from 'react-scroll'
import styles from '../Styles/Header.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link to='experience' smooth={true} duration={2500} offset={-50}>Experience</Link>
            <Link to='education' smooth={true} duration={2500} offset={-50}>Education</Link>
            <Link to='skills' smooth={true} duration={2500} offset={-50}>Skills</Link>
            <Link to='proyects' smooth={true} duration={2500} offset={-50}>Proyects</Link>
            <Link to='contact' smooth={true} duration={2500} offset={-50}>Contact</Link>
        </div>
    )
}

export default Navbar