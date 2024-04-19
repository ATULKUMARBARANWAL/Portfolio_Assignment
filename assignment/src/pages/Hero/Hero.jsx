import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from "../../context";
import "./Hero.css";

function Hero() {
  const { name, image } = useGlobalContext();
  return (
    <div className='max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mt-8 p-4 md:p-0'>
      <div className='flex flex-col justify-center'>
        <p className='uppercase font-medium text-gray-400'>This Is Me</p>
        <h1 className="uppercase font-extrabold text-4xl">{name}</h1>
        <p className='mt-6 mb-8 text-gray-800'>I am {name}. We received your application through Naukri.com for the role of Frontend Engineer</p>
        <button className="w-3/12 md:w-[100px] h-12  my-8  flex justify-center items-center border border-solid border-blue-700 transition duration-500 ease-in-out bg-blue-400 hover:bg-blue-500 text-white font-bold  focus:outline-none ">
          <NavLink to="/">Click Me</NavLink>
        </button>
      </div>

      <div className="hero-image flex justify-center items-center">
        <img src={image} className='max-w-full' alt="Hero Image" />
      </div>
    </div>
  );
}

export default Hero;
