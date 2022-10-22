import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container container-experience">
        <div className="experience-frontEnd">
          <h3>Frontend Development</h3>
          <div className="experience-content">

            <article className="experience-details">
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience-details">
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience-details">
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience-details">
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
              <h4>ReactJs</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience-details">
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
              <h4>Semantic UI</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience-BackEnd">
          <h3>Backend Development</h3>
          <div className="experience-content">

            <article className="experience-details">
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
              <h4>NodeJs</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience-details">
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
              <h4>PostgreSQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience-details">
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
              <h4>MySql</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience-details">
              <BsFillPatchCheckFill className='experience-details-icon'/>
              <div>
              <h4>TypeScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience