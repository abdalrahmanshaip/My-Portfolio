'use client'
import React, { useState } from 'react'
import './Navbar.css'
import { CiMenuBurger } from "react-icons/ci";
import Link from 'next/link';
function Navbar() {
  const [isopen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen((open) => !open)
  }
  return (
    <div className='navbar '>
      <div className="container flex justify-between items-center	">
        <div className="left">
          <p className='font-bold text-2xl'>My Portfolio</p>
        </div>
        <div className="right">
        <div className="trigger text-white  relative" onClick={toggle}>
          <CiMenuBurger className='text-black'/>
        </div>
          <ul className={`links flex  ${isopen ? "is-open" : ""} `}>
            <Link href='/'><li className='mr-4 text-lg	'>Home</li></Link>
            <Link href="./projects"><li className='mr-4 text-lg	'>Projects</li></Link>
            <Link href="./about"><li className='mr-4 text-lg	'>About me</li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar