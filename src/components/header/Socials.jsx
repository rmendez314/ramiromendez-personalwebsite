import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

function Socials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ramiro-mendez-076076212/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/rmendez314" target="_blank" rel='noreferrer'><BsGithub /></a>
    </div>
  )
}

export default Socials