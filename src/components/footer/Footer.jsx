import React from 'react'
import './footer.css'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {FaInstagram} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JAY CHAVAN</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#qualification">Qualification</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#portfolio">Blogs</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/Jaychav37720654" target='_blank'><AiFillTwitterSquare/></a>
        <a href="https://www.instagram.com/_jay_chavan/" target='_blank'><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/jay-chavan-585ba3203/" target='_blank'><AiFillLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jay Chavan. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer