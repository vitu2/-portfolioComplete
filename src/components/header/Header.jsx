import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/me-lol.jpg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Victor Emanuel</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Programmer-code" />
        </div>
      </div>
    </header>
  )
}

export default Header