import React from 'react'
import CTA from './CTA'
import './Header.css'
import Pic from '../../Assets/gradpic1.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
          <h5>Hello I'm</h5>
          <h1>Ramiro Mendez</h1>
          <h5 className='text-light'>Full Stack Developer</h5>
          <CTA />
          <Socials />
          <div className='me'>
            <img src={Pic} alt="Ramiro Mendez" />
          </div>
          <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header