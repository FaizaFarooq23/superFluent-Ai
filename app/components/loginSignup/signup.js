import React from 'react'

export default function Signup() {
  return (
    <div className=" flex justify-center items-center min-h-screen w-full">
    <div className="w-96 bg-white rounded-lg shadow-lg p-8">
      <div className="flex justify-end items-center my-2 w-full mt-4">
        <p className="text-[13px] pr-2 ">Already have an account?</p>
        <a
          href="#"
          className=" bg-[#1e8a00] hover:bg-[#2ec262] text-white cursor-pointer rounded px-3 py-1 text-[13px] pl-2"
        >
          <button>Sign In</button>
        </a>
      </div>
      <img
        className="h-24 w-24 mx-auto"
        src="/images/superfleunt logo.svg"
        alt="superfluent-logo"
      />
      <div className="flex flex-col justify-center items-center mb-6">
        <h2 className="text-xl font-bold pt-2 text-black">Get Started</h2>
        <p className="text-black  text-[13px] pt-2">
          Enter your details below
        </p>
      </div>
      <form>
        <div className="mb-4  border border-gray-300 px-2 py-1 rounded h-12 flex flex-col">
          <span className="text-[14px] px-1 relative py-1 text-gray-400 leading-3">
            Email Address
          </span>
          <input
            type="email"
            id="email"
            className="w-full px-1 -my-1 outline-none focus:none rounded text-sm custom-placeholder"
          />
        </div>
        <div className="mb-4  border border-gray-300 px-2 py-1 rounded h-12 flex flex-col">
          <span className="text-[14px] px-1 relative py-1 text-gray-400 leading-3">
            Username
          </span>
          <input
            type="name"
            id="name"
            className="w-full px-1 -my-1 outline-none focus:none rounded text-sm custom-placeholder"
          />
        </div>

        <div className="mb-6 ">
          <div className="mb-4  border border-gray-300 px-2 py-1 rounded h-12 flex flex-col">
            <span className="text-[14px] px-1 relative py-1 text-gray-400 leading-3">
              Password
            </span>
           <div className="flex items-center justify-between -my-1 ">
            <input
              type="password"
              id="password"
              className="w-full px-1  outline-none focus:none rounded text-sm custom-placeholder"
            />
              <img
              src="/images/icons8-hide-password.svg "
              alt="eye"
              className="h-7 cursor-pointer w-7 pr-2 -mt-2"
            />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full features-bg text-white py-2 px-4 rounded hover:bg-[#1E8A00]"
        >
          Sign In
        </button>
      </form>
      <div className="flex justify-center items-center mt-4">
        <a href="#" className="text-black text-[13px] pl-2">
          Forgot Password?
        </a>
      </div>
      <div className="flex justify-center text-black text-xs items-center mt-6">
      <span className="text-gray-300 -mt-3 pr-0.5"> _______________</span>
        Or Sign in with   
        <span className="text-gray-300 -mt-3 pl-0.5"> _______________</span>
      </div>
      <div className="flex items-center justify-between mt-8">
        <div className="border flex items-center justify-center border-gray-300 rounded px-2 w-[50%] py-4"> 
        <img src="/images/Google__G__Logo.svg " alt="google" className="h-6 w-6 mr-2 inline-block cursor-pointer"/>
        <span >Google</span>
        </div>
        <div className="border flex items-center justify-center border-gray-300 rounded ml-2 w-[50%] px-2 py-4"> 
        <img src="/images/facebook.svg " alt="google" className="h-6 w-6 ml-1  inline-block cursor-pointer"/>
        <span className="text-[#4267b2]">Facebook</span>
        </div>
      </div>
    </div>
  </div>
  )
}
