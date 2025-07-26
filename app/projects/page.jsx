'use client';
import React from 'react';
import Image from 'next/image';
import bg from '@/app/assets/bg.png';
import chatter from '@/app/assets/chatter.png';
import ecom from '@/app/assets/ecom.png';
import hung from '@/app/assets/hung.png'

const projects = [
  {
    src: bg,
    alt: 'Portfolio Background Project',
    link: 'https://bg-remover-oe5l.vercel.app', // replace with actual live link
  },
  {
    src: chatter,
    alt: 'Chatter Chat App Project',
    link: 'https://chatter-box-bice.vercel.app/login', // replace with actual live link
  },
  {
    src: ecom,
    alt: 'E-commerce App Project',
    link: 'https://clothing-hub-frontend.vercel.app', // replace with actual live link
  },
  {
    src:hung,
    alt: 'hunger-smashers',
    link:'https://hunger-smashers.vercel.app',
  }
];

const Projects = () => {
  return (
    <div className="w-full px-4 py-16">
      <h1 className="text-center text-3xl font-bold mb-12">
        My <span className="bg-gradient-to-r from-yellow-800 to-yellow-400 bg-clip-text text-transparent">Projects</span>
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 gap-y-10 place-items-center">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[400px] h-[300px] overflow-hidden rounded-xl shadow-md border transition-transform hover:scale-105 duration-300"
          >
            <Image
              src={project.src}
              alt={project.alt}
              className="w-full h-full object-cover rounded-xl"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
