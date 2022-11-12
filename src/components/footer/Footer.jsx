import React from 'react'
import './footer.css'


const Footer = () => {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/vitor-emanuel-9107081a4/" className='footer-logo'>LinkedIn Profile</a>

      <ul className='permalinks'>
        <li> <a href="#">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#experience">Experience</a> </li>
        <li> <a href="#portfolio">Portfolio</a> </li>
        <li> <a href="#contact">contact</a> </li>
      </ul>
    </footer>
  )
}

export default Footer