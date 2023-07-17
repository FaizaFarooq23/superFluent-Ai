"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import {RxCross1} from "react-icons/rx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("toggleMenu");
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between bg-transparent items-center shadow-md">
      <div className="w-1/4 flex justify-center">
        <img
          className="h-24 w-24 "
          src="/images/superfleunt logo.svg"
          alt="superfluent-logo"
        />
      </div>
      <nav className="hidden md:flex items-center justify-evenly mt-2 w-2/4">
        <Link href="/">
          <p className=" cursor-pointer text-black hover:text-[#1e8a00]">
            Home
          </p>
        </Link>
        <Link href="/features">
          <p className=" cursor-pointer text-black hover:text-[#1e8a00]">
            Features
          </p>
        </Link>
        <Link href="/usecases">
          <p className=" cursor-pointer text-black hover:text-[#1e8a00]">
            Usecases
          </p>
        </Link>
        <Link href="/pricing">
          <p className=" cursor-pointer text-black hover:text-[#1e8a00]">
            Pricing
          </p>
        </Link>
        <Link href="/contact">
          <p className=" cursor-pointer text-black hover:text-[#1e8a00]">
            ContactUs
          </p>
        </Link>
      </nav>
      <div className="hidden md:flex justify-center items-center w-1/4">
        <Link href="/sign-up" className=" rounded-lg px-6 py-2 bg-[#2ec262] hover:bg-[#1E8A00] text-white">
          Signup
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <AiOutlineMenu className="text-black text-3xl mr-5" />
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center absolute z-50 top-0 left-0 w-screen h-screen p-4 bg-superfluent-green">
            <button onClick={toggleMenu} className="w-full">
                <RxCross1 className="text-white text-3xl float-right" />
            </button>
          <Link href="/">
            <p className="block hover:bg-superfluent-green-emerald  py-2 px-36 rounded-lg text-white mb-2">Home</p>
          </Link>
          <Link href="/features">
            <p className="block text-white hover:bg-superfluent-green-emerald py-2 px-36 rounded-lg mb-2">Features</p>
          </Link>
          <Link href="/usecases">
            <p className="block text-white hover:bg-superfluent-green-emerald py-2 px-36 rounded-lg mb-2">Usecases</p>
          </Link>
          <Link href="/pricing">
            <p className="block text-white hover:bg-superfluent-green-emerald py-2 px-36 rounded-lg mb-2">Pricing</p>
          </Link>
          <Link href="/contact">
            <p className="block text-white hover:bg-superfluent-green-emerald py-2 px-36 rounded-lg mb-2">Contact Us</p>
          </Link>
          <Link href="/sign-up" >
          <p className="block text-white hover:bg-superfluent-green-emerald py-2 px-36 rounded-lg mb-2">Sign Up</p>
          </Link>
          <img className="h-24 w-24 mt-10" src="/images/superfleunt logo.svg" alt="superfluent-logo" />
        </nav>
      )}
    </div>
  );
}
