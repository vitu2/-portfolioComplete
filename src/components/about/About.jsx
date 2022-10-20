import React from 'react'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import './about.css'
import MeAbout from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get know</h5>
      <h2>About me</h2>

      <div className="container container-about">
        <div className="about-me">
          <div className="about-me-img">
            <img src={MeAbout} alt="" />
            <a href="https://www.freepik.com/free-vector/programmer-concept-illustration_8775515.htm#query=programming&position=36&from_view=search&track=sph">Image by storyset</a> on Freepik
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">

            <article className="about-card">
              <FaAward className='about-icon' />
              <h5>Experience</h5>
              <small>1+ Years of Study FullStack Developer</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className='about-icon' />
              <h5>Projects</h5>
              <small><a href="https://github.com/vitu2">Link To My Github</a></small>
            </article>

          </div>
          <p>
          I'm passionate about technology, and that's why I decided to study programming,
          I study every day to be better and stay updated.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About