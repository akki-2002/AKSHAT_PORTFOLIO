import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>AKSHAT</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonils">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>

      <div className="footer_socials">
      <a href="https://www.linkedin.com/in/akshat-agrawal-282830205/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/akki-2002" target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href="https://twitter.com/Akshat_2002" target='_blank' rel="noreferrer"><FaTwitterSquare /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; AKSHAT AGRAWAL. All rights reserved @2024</small>
      </div>
    </footer>

  )
}

export default Footer