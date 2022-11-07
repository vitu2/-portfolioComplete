import React from 'react'
import imgProjects from '../../assets/captura-hackfashion-project.png'
import imgProjects1 from '../../assets/captura-swapi-project.png'
import imgProjects2 from '../../assets/more-projects.png'
import './portfolio.css'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <article className='portfolio-item'>
            <div className="portfolio-item-image">
              <img src={imgProjects} alt="" srcset="" />
            </div>
                <h3>In this group project a very simple ecommerce was developed in which I participated
                  as a FullStack developer</h3>
                  <div className="portfolio-item-cta">
                <a href="https://github.com/vitu2/HackFashionProject" className='btn'>Gihub</a>
                <a href="https://hackfashionproject-2q3908eac-vitu2.vercel.app" className='btn btn-primary'>Live Demo</a>
                </div>
        </article>

        <article className='portfolio-item'>
            <div className="portfolio-item-image">
              <img src={imgProjects1} alt="" srcset="" />
            </div>
                <h3>Project using the star wars api with a registration and a login using javascript Vanilla</h3>
                <div className="portfolio-item-cta">
                <a href="https://github.com/vitu2/SwapiProjectVanilla" className='btn'>Gihub</a>
                <a href="https://github.com/vitu2/SwapiProjectVanilla" className='btn btn-primary'>Live Demo</a>
                </div>
        </article>

        <article className='portfolio-item'>
            <div className="portfolio-item-image">
              <img src={imgProjects2} alt="" srcset="" />
            </div>
                <h3>I'm working hard to deliver new projects and post them here
                  in my portfolio, and news is coming.</h3>
        </article>
      </div>
    </section>
  )
}

export default Portfolio