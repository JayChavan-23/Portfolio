import React from 'react'
import './about.css'
import ME from '../../assests/about.png'
import {AiOutlineFileDone} from 'react-icons/ai'
import {BsPencil} from 'react-icons/bs'
import {FaAward} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
                <img src={ME} alt="About Image" />
              </div>
            
            </div>

            <div className="about__content">
              <div className="about__cards">
                <article className='about__card'>
                  <AiOutlineFileDone className='about__icon'/>
                  <h5>Projects</h5>
                  <small>5+ Completed </small>
                </article>

                <article className='about__card'>
                  <BsPencil className='about__icon'/>
                  <h5>Blogs</h5>
                  <small>6+ Blogswritten</small>
                </article>

                <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Certificates</h5>
                  <small>10+<br/> Certificates </small>
                </article>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates nostrum perferendis
                   quidem veritatis temporibus, vero tenetur libero rem deleniti inventore sit asperiores 
                   aspernatur praesentium recusandae, iusto error possimus. Officiis, minus.</p>

                   <a href="#" className='btn btn-primary'>View Certificates</a>
              
              </div>
        </div>
      </section>
  )
}

export default About