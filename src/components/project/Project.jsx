import React from 'react'
import './project.css'
import {AiOutlineFileDone} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'
import {BiMap} from 'react-icons/bi'


const Project = () => {
  return (
    <section className='project section' id='Projects'>
      <h2 className="section__title">Projects</h2>
      <h5 className="section__subtitle">Made by me</h5>

      <div className="project__container grid">

        {/* ===================== Project 1 =====================*/}

        <div className="project__content">
          <div>
           <i className='project__icon'><AiOutlineFileDone/></i>
           <h3 className="project__title">Library <br/> Management</h3>
          </div>
          <span className="button button--flex button--small button--link project__button">
            Case study
            <BsArrowRight className='button__icon' />
          </span>
        </div>

        {/* ===================== Project 2 =====================*/}

        <div className="project__content">
          <div>
           <i className='project__icon'><BiMap/></i>
           <h3 className="project__title">Path <br/> Finder</h3>
          </div>
          <span className="button button--flex button--small button--link project__button">
            Case study
            <BsArrowRight className='button__icon'/>
          </span>
        </div>

        {/* ===================== Project 3 =====================*/}

        <div className="project__content">
          <div>
           <i className='project__icon'><AiOutlineFileDone/></i>
           <h3 className="project__title">Project <br/> Name</h3>
          </div>
          <span className="button button--flex button--small button--link project__button">
            Case study
            <BsArrowRight className='button__icon'/>
          </span>
        </div>

        {/* ===================== Project 4 =====================*/}

        <div className="project__content">
          <div>
           <i className='project__icon'><AiOutlineFileDone/></i>
           <h3 className="project__title">Project  <br/> Name</h3>
          </div>
          <span className="button button--flex button--small button--link project__button">
            Case study
            <BsArrowRight className='button__icon'/>
          </span>
        </div>

        {/* ===================== Project 5 =====================*/}

        <div className="project__content">
          <div>
           <i className='project__icon'><AiOutlineFileDone/></i>
           <h3 className="project__title">Project <br/> Name</h3>
          </div>
          <span className="button button--flex button--small button--link project__button">
            Case study
            <BsArrowRight className='button__icon'/>
          </span>
        </div>
        {/* ===================== Project 6 =====================*/}

        <div className="project__content">
          <div>
           <i className='project__icon'><AiOutlineFileDone/></i>
           <h3 className="project__title">Project <br/> Name</h3>
          </div>
          <span className="button button--flex button--small button--link project__button">
            Case study
            <BsArrowRight className='button__icon'/>
          </span>
        </div>
        
      </div>

    </section>
  )
}

export default Project