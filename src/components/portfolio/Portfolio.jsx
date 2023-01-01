import React from 'react'
import ASE from '../../Assets/ASEProjectSS.png'
import PW from '../../Assets/PersonalWebsiteSS.png'
import './Portfolio.css'


const Portfolio = () => {

  return (
    <section id='portfolio'>
      <h5>My recent Web Development</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* <article className='portfolio__item'>
          <div className="portfolio__item__img">
            <img src={ASE} alt="ASE Project" />
          </div>
          <h3>WebTech Dynamic Website</h3>
          <h5>School Project</h5>
          <div className="portfolio__item__cta">
            <a href="https://github.com/rmendez314/ASE-Project" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://ec2-54-146-181-156.compute-1.amazonaws.com/" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article> */}
        <article className='portfolio__item'>
          <div className="portfolio__item__img">
            <img src={ASE} alt="ASE Project" />
          </div>
          <h3>ASE DB Mgt Tool/RESTful API</h3>
          <h5>School Project</h5>
          <div className="portfolio__item__cta">
            <a href="https://github.com/rmendez314/ASE-Project" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://ec2-54-146-181-156.compute-1.amazonaws.com/" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item__img">
            <img src={PW} alt="ASE Project" />
          </div>
          <h3>Personal Website</h3>
          <h5>Personal Project</h5>
          <div className="portfolio__item__cta">
            <a href="https://github.com/rmendez314/ramiromendez-personalwebsite" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio