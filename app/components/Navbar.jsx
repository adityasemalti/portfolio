import React from 'react';

const Navbar = () => {
  return (
    <div className='border-green-800 border-2 h-full w-[400px] py-2 px-5 sm:px-8 flex mx-auto items-center justify-around rounded-full'>
      <a href="#home" className='cursor-pointer hover:scale-110 duration-300 hover:text-yellow-400'>Home</a>
      <a href="#about" className='cursor-pointer hover:scale-110 duration-300 hover:text-yellow-400'>About</a>
      <a href="#skills" className='cursor-pointer hover:scale-110 duration-300 hover:text-yellow-400'>Skills</a>
      <a href="#projects" className='cursor-pointer hover:scale-110 duration-300 hover:text-yellow-400'>Projects</a>
    </div>
  );
};

export default Navbar;
