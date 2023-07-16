import React from 'react'

export default function HeroSection() {
  return (

    <div className="flex flex-col items-center justify-center mt-5 sm:flex-row">
    <div className="flex flex-col items-start justify-between w-full sm:w-1/2 px-6 sm:px-24">
      <span className="text-[#1e8a00] -mt-2 text-[36px] font-bold">
        <span>Master Arabic with</span>
        <br />
        <span>SuperFluent AI</span>
      </span>
      <span className="text-[#258b49] mt-10 text-xl sm:text-left">
  Translate Arabic with the most advanced  
      AI-powered Arabic learning platform 
      </span>
      <button className="rounded-lg mt-12 px-8 py-2 text-lg font-bold hover:bg-[#1E8A00] bg-[#2ec262] text-white">
        Start Recording
      </button>
    </div>
    <div className="flex items-center mt-3">
      <video
        className="w-full h-auto sm:w-[80%] sm:h-[40%]"
        src="/images/recording.mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>
  </div>
  
  
  
  
   
  )  
}
