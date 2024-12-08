import React from 'react'
import PROFILE from '../assets/37.jpg'

const card = () => {
  return (
    <div className='card'>
        
    <img src={PROFILE} alt="" className='card-img'/>
    <h2 className='card-title'>Lasop code</h2>
    <p className='card-text'>We teach fullstack, frontend, backend, cybersecurity etc</p>


    </div>

    
  )
}

export default card