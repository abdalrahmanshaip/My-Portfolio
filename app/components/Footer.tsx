import Link from 'next/link';
import React from 'react'
import "./Footer.css"
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function footer() {
  return (
    <div className='footer'>
      <div className="container grid grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <div className="social gmail flex items-center">
        <BiLogoGmail />
        <Link href='https://mail.google.com/mail/u/?authuser=abdalrahmanshaip@gmail.com'>Gmail</Link>
        </div>
        <div className="social facebook flex items-center">
        <FaFacebook />
        <Link href='https://www.facebook.com/abdalrahman.saied.39'>Facebook</Link>
        </div>
        <div className="social linked flex items-center">
        <FaLinkedin />
        <Link href='https://www.linkedin.com/in/abdalrahman-shaip-743b0b255/'>Linked in</Link>
        </div>
        <div className="social whatsapp flex items-center">
        <FaWhatsapp />
        <Link href='https://wa.me/+201140458943'>+20 114 045 8943</Link>
        </div>
        <div className="social github flex items-center">
        <FaGithub />
        <Link href='https://github.com/abdalrahmanshaip?tab=repositories'>Github</Link>
        </div>
      </div>
    </div>
  )
}

export default footer