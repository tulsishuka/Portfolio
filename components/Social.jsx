
import React from 'react'
import {  FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

const Socials = [
  { icon: <FaGithub />, path: "https://github.com/tulsishuka" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/tulsishukla/" },
  { icon: <FaTwitter />, path: "https://twitter.com/your-username" },
]

const Social = ({ containerStyles, iconStyle }) => {
  return (
    <div className={containerStyles}>
      {Socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyle}
            target="_blank" 
            rel="noopener noreferrer" 
          >
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
