'use client';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '@/app/globals.css';
import Image from 'next/image';
import avatar from '@/app/assets/avatar.jpeg.avif';
import Projects from './projects/page';
import mongo from '@/app/assets/mongo.png';
import react from '@/app/assets/react.png';
import express from '@/app/assets/express.png';
import node from '@/app/assets/node.png';
import About from './about/page';
import Skills from './skills/page';
import Contact from './contact/page';

const HomePage = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'A Full Stack Developer...',
        'A MERN Stack Enthusiast...',
        'A Problem Solver...',
        'A Passionate Coder...'
      ],
      typeSpeed: 25,
      backSpeed: 30,
      loop: true
    });

    return () => {
      typed.destroy(); // cleanup on unmount
    };
  }, []);

  return (
    <>
      <div className="py-16">
        <div className="h-[500px] w-[500px] border border-green-800 rounded-full flex flex-col mx-auto items-center justify-start overflow-hidden">
          <div className="relative h-48 w-48 rounded-full mt-10">
            <Image
              src={avatar}
              alt="my-image"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <p className='text-3xl font-bold mt-10'>
            Hey !! <span className='bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent'>I am Aditya</span>
          </p>
          <p className='text-2xl mt-3 text-white/60 font-bold'>
            <span ref={typedRef}></span>
          </p>
          <div className='mt-20'>
            <a
              href="/AdityaSemaltiResume.pdf"
              download
              className='border py-2 px-4 rounded-full hover:scale-110 duration-300 hover:border-yellow-400 cursor-pointer inline-block text-white font-semibold'
            >
              Resume
            </a>
          </div>

        </div>
      </div>

      {/* stack section */}
      <div className='max-w-screen flex flex-col items-center justify-center mt-20'>
        <h1 className='text-3xl text-white font-bold'>
          My <span className='bg-gradient-to-r from-green-800 to-green-500 bg-clip-text text-transparent'>stack</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center mt-10 gap-10'>
          <Image src={mongo} alt='mongoDb logo' className='h-40 w-40 object-cover rounded-full' />
          <Image src={express} alt='express logo' className='h-40 w-40 object-cover rounded-full' />
          <Image src={react} alt='react logo' className='rounded-full h-40 w-40 object-cover' />
          <Image src={node} alt='node logo' height={100} className='rounded-full' />
        </div>
        <div id='about'>
          <About />
        </div>
        <div id='skills'>
          <Skills />
        </div>
        <div id='projects'>
          <Projects />
        </div>
        <div id='contact'>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default HomePage;
