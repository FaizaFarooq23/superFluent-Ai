import React from 'react'

export default function HeroSection() {
  return (

    <div className="flex items-center justify-between mt-5 ">
      <div className="flex flex-col items-start justify-between w-[50%] px-24">
        <span className="text-[#1e8a00]  -mt-2 text-[36px] font-bold">
          <span>Master Arabic with</span>
          <br />
          <span> SuperFluent AI </span>
        </span>
        <span className="text-[#258b49] mt-10 text-xl">
          Translate Arabic with the most advanced <br /> AI-powered Arabic
          learning platform
        </span>
        <button className="rounded-lg mt-12 px-8 py-2 text-lg font-bold hover:bg-[#1E8A00] bg-[#2ec262] text-white">
          Start Recording
        </button>
      </div>
      <div className="flex items-center mt-3 ">
        <video
          className="w-[80%] h-[40%]"
          src="/images/recording.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  )  
}
