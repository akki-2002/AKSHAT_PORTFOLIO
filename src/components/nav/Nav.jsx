import React from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { PiBook } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import { TiMessages } from "react-icons/ti";
import { useState } from 'react';

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoHomeOutline /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')}className={activeNav === '#about' ? 'active' : ''}><FaRegUser /></a>
      <a href="#experience"onClick={()=> setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : ''}><PiBook /></a>
      <a href="#portfolio"onClick={()=> setActiveNav('#portfolio')}className={activeNav === '#portfolio' ? 'active' : ''}><GrProjects /></a>
      <a href="#contact"onClick={()=> setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : ''}><TiMessages /></a>
    </nav>
  )
}

export default Nav