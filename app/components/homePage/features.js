import React from 'react'

export default function Features() {
  return (
   <div className='h-screen mt-20'>
    <div className="flex justify-center ">
      <div className="w-full md:w-1/2  lg:w-5/12 px-4 mb-8">
        <div className="bg-white p-4  shadow-md">
          <h3 className="text-lg font-bold mb-2">Progress Tracking</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-5/12 h-2/5 px-4 mb-8">
        <div className="bg-white p-4 shadow-md">
          <h3 className="text-lg font-bold mb-2">Pronounciation Assistence</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <div className="w-full md:w-1/2  lg:w-5/12  w-px-4 mb-8">
        <div className="bg-white p-4 shadow-md">
          <h3 className="text-lg font-bold mb-2">Natural Language Interaction</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-5/12 px-4 mb-8">
        <div className="bg-white p-4 shadow-md">
          <h3 className="text-lg font-bold mb-2">Ability to Toggle Translation On and Off</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      </div>
    </div>

  )
}
