'use client'
import React from 'react'
import Image from 'next/image';
import coder from '@/app/assets/coder.jpg'
import './about.css'; // We'll define keyframes here

const About = () => {
  return (
    <div className='w-full items-center justify-center mt-40 p-5'>
      <h1 className='text-center font-bold text-3xl '>
        <span className='bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent'>About</span> Me
      </h1>
      <div className='w-full block sm:flex items-center justify-between'>
        <div className='w-full sm:w-1/2 sm:text-start text-center'>
          Hi, I’m Aditya Semalti, a passionate Full Stack Developer with a strong command over the MERN stack (MongoDB, Express.js, React.js, and Node.js). I love building dynamic and responsive web applications that solve real-world problems. With a deep interest in backend development and an eye for clean UI/UX, I strive to write efficient, scalable, and maintainable code. I’m also keen on exploring new technologies, optimizing performance, and contributing to collaborative projects. Let’s connect and build something great together!

        </div>
        <div className='w-full sm:w-1/2 mt-10 flex justify-center'>
          <div className='relative w-60 h-60 flex items-center justify-center'>
            <div className='absolute w-full h-full rounded-full border-t-6 border-green-600 animate-rotate-slow'></div>
            <Image
              src={coder}
              alt='my image'
              className='rounded-full w-[220px] h-[220px] object-cover z-10'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
