import React from 'react'
import {BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Ramiro Mendez</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/" target='_blank' rel='noreferrer'><BsTwitter/></a>
        <a href="https://www.instagram.com/" target='_blank' rel='noreferrer'><BsInstagram/></a>
        <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'><BsFacebook/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ramiro Mendez. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
