import React from 'react'
import Me from '../../Assets/bigbendpic.jpeg'
import { FaUserClock } from 'react-icons/fa'
import { FaUserGraduate } from 'react-icons/fa'
import { GiTiedScroll } from 'react-icons/gi'
import './About.css'

function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me__img'>
            <img src={Me} alt='Ramiro Mendez Grad Pic' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaUserClock className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ Months Professional</small>
            </article>
            <article className='about__card'>
              <FaUserGraduate className='about__icon'/>
              <h5>BS Computer Science</h5>
              <small>UTSA 2022</small>
            </article>
            <article className='about__card'>
              <GiTiedScroll className='about__icon'/>
              <h5>Minor Business Administration</h5>
              <small>UTSA 2022</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Debitis facere veritatis numquam deleniti repudiandae 
            unde repellendus assumenda. Aperiam animi rerum dolorum nostrum? 
            Pariatur saepe culpa, optio asperiores aliquam modi veniam.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
