import React from 'react'
import '../Style/Section.css'
import image from '../image/man.png'
function Section() {
  return (
    <section className='section1'>
        <div className='container'>
            <div className='text'>
                <h1>Hello My Name is</h1>
                <h1 className='h1-big'>Ahmetcan</h1>
                <p>I am a software developer. He loves web and android development areas. I am always open to learning</p>
                <button className='txt-btn'>My Works</button>
            </div>
            <div className='image'>
                <img src={image} alt=""></img>
            </div>
            </div>
    </section>
    
    
  )
}

export default Section