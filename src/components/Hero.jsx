import React from "react";

import logo from '../assets/logo.png'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain h-28	' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/sanujasethi06", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='blue_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Introducing our Article Summarizer app – the ultimate tool for extracting key insights from lengthy articles in seconds. Revolutionize your reading experience by effortlessly condensing complex content into concise summaries. 
      </h2>
    </header>
  );
};

export default Hero;
