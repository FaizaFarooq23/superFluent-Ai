import React from 'react'

export default function Features() {
  return (
    <div className='mt-20'>
        <div className='flex justify-center items-center'>
            <h1 className=' font-semibold bg-[#258b491e] text-[#1e8a00] px-10 text-sm leading-7 rounded'>Features</h1>
        </div>
    <div className="flex flex-wrap justify-center mt-20 items-center">
    <div className="w-64 h-64 features-bg rounded-lg m-4 p-4">
      <h2 className="text-xl font-bold text-white mb-2">Progress Tracking</h2>
      <p className='text-white mt-[74px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div className="w-64 h-64 features-bg rounded-lg m-4 p-4">
      <h2 className="text-xl font-bold text-white mb-2">Pronounciation Assistance</h2>
      <p className='text-white mt-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div className="w-64 h-64 features-bg  rounded-lg m-4 p-4">
      <h2 className="text-xl font-bold text-white mb-2">Natural Language Interaction</h2>
      <p className='text-white mt-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div className="w-64 h-64 features-bg rounded-lg m-4 p-4">
      <h2 className="text-xl font-bold text-white mb-2">Ability to Toggle Translation On and Off</h2>
      <p className='text-white mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  </div>
  )
}
