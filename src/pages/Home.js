import React from 'react'
import './Pages.css';

function Home() {
  return (
    <>
      <div className='home-container'>
        <div className='home-image-container'>
          <img src='./gradpic1.jpg' alt='Ramiro Mendez Grad Pic1' className='home-image'/>
          <h1 className='name'>Ramiro Mendez</h1>
      </div>
        <div className='paragraph' >
          <p className='description'>
            Hello, I am a Software Engineer and just recently 
            graduated from the University of Texas at San Antonio with a 
            BS in Computer Science and a Minor in Business Administration. 
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
