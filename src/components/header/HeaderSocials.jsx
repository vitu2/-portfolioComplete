import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
      <a href="https://www.linkedin.com/in/vitor-emanuel-9107081a4/" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com/vitu2" target='_blank'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials
