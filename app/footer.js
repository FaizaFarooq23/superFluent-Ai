import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-superfluent-green">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="/images/superfleunt logo.svg"
              className="h-20 mr-3"
              alt="Superfluent Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Superfluent AI
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-white">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-white sm:mx-auto  lg:my-8" />
        <span className="block text-sm sm:text-center text-white">
          © 2023{" "}
          <a href="https://Superfluent.com/" className="hover:underline">
            Superfluent™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
