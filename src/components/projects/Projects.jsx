import React from 'react'
import './projects.css'
import { useEffect, useState } from 'react'
import { Card, Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'


const Projects = () => {
  const [repositories, setRepositories] = useState([])
  const url = 'https://api.github.com/users/vitu2/repos?sort=created&direction=desc'

  useEffect(() => {

    fetch(url)
    .then(response => response.json())
    .then(data => setRepositories(data.slice(0, 5)))

  }, [])

  return (
    <section id='projects'>
      <div className='project-Cards'>
      {repositories.map(repository => {
          return(
            <div className='card-container'>
      <div className='content-card'>
        <h2>{repository.name}</h2>
        {/* <h2>{repository.description}</h2> */}
        <h3>
          <a href={repository.html_url}>Click To Learn More</a>
        </h3>
      </div>
    </div>
          )
        }
      )
    }
      </div>
    </section>
  )
}

export default Projects