import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/me-lol.jpg'
import HeaderSocials from './HeaderSocials'
import Fade from 'react-reveal/Fade'


const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <Fade bottom>
        <h5>Hello I'm</h5>
        <h1>Victor Emanuel</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="Programmer-code" />
          <a href="https://www.freepik.com/free-vector/javascript-frameworks-concept-illustration_6184436.htm#query=programming&position=23&from_view=search&track=sph">Image by storyset</a> on Freepik
        </div>
        </Fade>
        <HeaderSocials />

        <a href="#contact" className='scrool-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header