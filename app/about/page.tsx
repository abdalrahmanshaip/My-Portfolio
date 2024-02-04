import React from 'react'
import Footer from '../components/Footer'
import './page.css'

function page() {
  return (
    <div className='about mt-8'>
      <div className="container">
        <div className="title">
          <header className='mb-4 text-2xl'>Hi there! I'm Abdalrahman saied, a passionate web developer with a knack for crafting sleek, user-friendly websites and web applications. With 1 years of experience in the ever-evolving landscape of web development, I thrive on turning ideas into beautifully functional digital experiences.</header>
          <p>My expertise lies in front-end and back-end development, where I leverage my skills in  HTML, CSS, JavaScript, React.js, Node.js, Github, bootstrap, tailwind, nextjs to bring projects to life. Whether it's building responsive layouts, optimizing site performance, or integrating complex functionalities, I'm dedicated to delivering solutions that exceed expectations.
          🚀 What drives me is the constant pursuit of innovation and excellence. I love diving into new technologies and staying ahead of industry trends to ensure that my work is not just cutting-edge but also impactful. Collaborating with clients and fellow developers, I thrive in environments where creativity and problem-solving come together to create something truly remarkable.
          🌟 Beyond coding, I'm committed to continuous learning and personal growth. I believe in the power of community and actively contribute to open-source projects, attend tech meetups, and engage in knowledge-sharing initiatives. By staying curious and adaptable, I'm always ready to tackle new challenges and push the boundaries of what's possible in web development.</p>
        </div>
        <div className="skills mt-6 ">
          <h1 className='text-2xl flex justify-center aligin-center'>Skills</h1>
          <div className="skill  grid grid-cols-6 mt-20">
            <div className="logo html flex pace-x-8 justify-center aligin-center">
              <img src="./html.png" alt="" className='w-32'/>
            </div>
            <div className="logo css flex pace-x-8 justify-center aligin-center">
              <img src="./css.png" alt="" className='w-32'/>
            </div>
            <div className="logo js flex pace-x-8 justify-center aligin-center">
              <img src="./js.png" alt="" className='w-32'/>
            </div>
            <div className="logo bootstrap flex pace-x-8 justify-center aligin-center">
              <img src="./Bootstrap_logo.svg.png" alt="" className='w-32'/>
            </div>
            <div className="logo react flex pace-x-8 justify-center aligin-center">
              <img src="./React_Logo_SVG.svg.png" alt="" className='w-32'/>
            </div>
            <div className="logo github flex pace-x-8 justify-center aligin-center">
              <img src="./nextjs.png" alt="" className='w-32'/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page