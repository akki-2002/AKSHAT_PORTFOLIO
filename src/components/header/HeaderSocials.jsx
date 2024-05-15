import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
function HeaderSocials() {
  return (
    <div className='header_socials'>
        
        <a href="https://www.linkedin.com/in/akshat-agrawal-282830205/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/akki-2002" target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href="https://twitter.com/Akshat_2002" target='_blank' rel="noreferrer"><FaTwitterSquare /></a>
    </div>
  )
}

export default HeaderSocials