import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jay-chavan-585ba3203/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/JayChavan-23" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/Jaychav37720654" target="_blank"><FaTwitter/></a>
         </div>
  )
}

export default HeaderSocials