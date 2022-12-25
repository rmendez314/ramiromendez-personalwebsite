import React from 'react'
import CV from '../../Assets/RamiroMendezResume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download>
            Download CV
        </a>
        <a href="#contact">
            Contact
        </a>
    </div>
  )
}

export default CTA