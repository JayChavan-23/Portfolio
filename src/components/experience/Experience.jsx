import React from 'react'
import './experience.css'
import{BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I know</h5>
      <h2>My Skills</h2>

      <div className=" experience__container">
        <div className="experience__development">
          <h3>Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>AndroidDev</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>SQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>DOT NET</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>FireBase</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>FireBase</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>

        </div>
        <div className="experience__other">
        <h3>Other</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Linux</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>WebDev</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>WebDev</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>WebDev</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>WebDev</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>WebDev</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    
    </section>
  )
}

export default Experience