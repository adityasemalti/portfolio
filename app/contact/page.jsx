'use client';
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import contact from '@/app/assets/contact.png';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_l8g0kcc',      // Replace with your actual Service ID
        'template_jyls9zk',     // Replace with your Template ID
        formRef.current,
        '6SxS1KJ8FTANogN-K'       // Replace with your Public API Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus('Failed to send message.');
        }
      );
  };

  return (
    <div className="w-full mt-20 px-4 py-16 flex items-center">
      <div className="w-full">
        <h1 className="text-5xl font-bold text-center mb-10">
          Get In <span className="bg-gradient-to-r from-yellow-800 to-yellow-400 bg-clip-text text-transparent">Touch</span>
        </h1>
        <div className='flex flex-col lg:flex-row justify-between gap-20 items-center'>
          <div>
            <form ref={formRef} onSubmit={sendEmail} className='border  w-[400px] sm:w-[500px] p-5 rounded-xl'>
              <input
                className='border outline-none w-[300px] sm:w-[400px] h-12 rounded-full mt-5 px-5'
                type="text"
                name="name"
                placeholder='Enter Your Name'
                required
              />
              <input
                className='border outline-none w-[300px] sm:w-[400px] h-12 rounded-full mt-5 px-5'
                type="email"
                name="email"
                placeholder='Enter Your Email'
                required
              />
              <textarea
                className='border outline-none w-[300px] sm:w-[400px] h-44 rounded-lg mt-5 p-5'
                name="message"
                placeholder='Enter Your Message'
                required
              />
              <button
                type="submit"
                className='w-[300px] sm:w-[400px] h-12 bg-yellow-500 text-white font-semibold rounded-full mt-5 hover:bg-yellow-600 transition duration-300'
              >
                Send Message
              </button>
              {status && <p className="mt-4 text-sm text-green-600">{status}</p>}
            </form>
          </div>

          <div className='w-[500px] mt-10'>
            <Image src={contact} alt='contact-image' />
          </div>
        </div>

        <div className='ml-10 sm:ml-0 flex gap-10 mt-10 py-5'>
          <a href="https://github.com/adityasemalti" target="_blank" rel="noopener noreferrer"><FaGithub size={40} /></a>
          <a href="https://www.linkedin.com/in/aditya-semalti-199264257" target="_blank" rel="noopener noreferrer"><FaLinkedin size={40} /></a>
          <a
            href="https://wa.me/919876543210?text=Hi%20Aditya,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
