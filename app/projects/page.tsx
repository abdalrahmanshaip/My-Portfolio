'use client'
import React from 'react'
import { useState } from 'react';
import "./page.css"
import { FaEye } from "react-icons/fa";
import Link from 'next/link';
import Footer from '../components/Footer';

function projects() {
  const link = 'https://abdalrahmanshaip.github.io/'
  return (
    <div className='projects'>
      <div className="container mt-20 grid grid-cols-4 relative top-28 gap-4">
        <div className="card">
          <Link href={'https://netflix-k5yu-du79w2gjz-abdalrahman2004.vercel.app/'} target='blank'>
            <FaEye className='relative   text-3xl'/>
            <img className='' src="./Screenshot 2024-02-02 154813.png" alt="" />
          </Link>
        </div>
        <div className="card">
          <Link href={`${link}Car_Hub/`} target='blank'>
            <FaEye className='relative   text-3xl'/>
            <img className='' src="./Screenshot 2024-02-02 154921.png" alt="" />
          </Link>
        </div>
        <div className="card">
          <Link href={`${link}project3/`} target='blank'>
            <FaEye className='relative   text-3xl'/>
            <img className='' src="./Screenshot 2024-02-02 155044.png" alt="" />
          </Link>
        </div>
        <div className="card">
          <Link href={`${link}github-repo/`} target='blank'>
            <FaEye className='relative   text-3xl'/>
            <img className='' src="./Screenshot 2024-02-02 155202.png" alt="" />
          </Link>
        </div>
        <div className="card">
          <Link href={`${link}-frontend-mentor-1/`} target='blank'>
            <FaEye className='relative   text-3xl'/>
            <img className='' src="./Screenshot 2024-02-02 155259.png" alt="" />
          </Link>
        </div>
        <div className="card">
          <Link href={`${link}company-members/`} target='blank'>
            <FaEye className='relative   text-3xl'/>
            <img className='' src="./Screenshot 2024-02-02 155359.png" alt="" />
          </Link>
        </div>
        <div className="card">
          <Link href={`${link}project4/`} target='blank'>
            <FaEye className='relative   text-3xl'/>
            <img className='' src="./Screenshot 2024-02-02 155503.png" alt="" />
          </Link>
        </div>
        <div className="card">
          <Link href={`${link}project2/`} target='blank'>
            <FaEye className='relative   text-3xl'/>
            <img className='' src="./Screenshot 2024-02-02 155620.png" alt="" />
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default projects