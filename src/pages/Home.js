import React from 'react'
import './Pages.css';

function Home() {
  return (
    <>
      <div classname='home-container'>
        <div classname='home-image-container'>
          <img src='./gradpic1.jpg' alt='Ramiro Mendez Grad Pic1' className='home-image'/>
        </div>
        <h1>Ramiro Mendez</h1>
        <p classname='description'>
          Hello, I am a Software Engineer and just recently 
          graduated from the University of Texas at San Antonio with a 
          BS in Computer Science and a Minor in Business Administration. 
        </p>
      </div>
    </>
  )
}

export default Home
