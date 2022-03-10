import React from 'react'
import './about.css'
import ME from '../../assests/me-about.JPG'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h1>About Me</h1>

      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
                <img src={ME} alt="About Image" />
              </div>
            
            </div>

            <div className="about__content">
              <div className="about__cards">
                <article className='about__card'>
                  <h5>Expe</h5>

                </article>
                
                </div>
              
              </div>
        </div>
      </section>
  )
}

export default About