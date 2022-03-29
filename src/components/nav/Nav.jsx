import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FiBook} from 'react-icons/fi'
import {BsPencil} from 'react-icons/bs'
import {MdOutlineMessage} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#'? 'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about'? 'active':''} ><AiOutlineUser/></a>
      <a href="#Projects"onClick={() => setActiveNav('#Projects')} className={activeNav === '#Projects'? 'active':''}><FiBook/></a>
      <a href="#portfolio"onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio'? 'active':''}><BsPencil/></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'? 'active':''}><MdOutlineMessage/></a>
    </nav>
  )
}

export default Nav