import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me (1).png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1>AKSHAT AGRAWAL</h1>
        <h4 className="text-light">Full-Stack Developer</h4>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header