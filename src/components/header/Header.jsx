import './Header.css'
import React from 'react'
import CTA from './CTA'

const Header = () => {
  return (
    <Header>
        <div className='container header__container'>
          <h5>Hello I am</h5>
          <h1>Ramiro Mendez</h1>
          <h5 className='text-light'>Full Stack Developer</h5>
          <CTA />
        </div>
    </Header>
  )
}

export default Header
