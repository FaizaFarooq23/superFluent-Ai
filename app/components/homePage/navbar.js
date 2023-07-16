import Link from 'next/link'

export default function Navbar() {
  return (
   <Navbar>
   <div className="flex justify-between bg-transparent items-center w-full shadow-md">
    <div className="w-1/4 flex justify-center">
      <img
        className="h-24 w-24 "
        src="/images/superfleunt logo.svg"
        alt="superfluent-logo"
      />
    </div>
    <nav className="flex items-center justify-evenly mt-2 w-2/4 ">
      <a className=" cursor-pointer hover:text-[#1e8a00]">Home</a>
      <a className=" cursor-pointer hover:text-[#1e8a00]">Features</a>
      <a className=" cursor-pointer hover:text-[#1e8a00]">Usecases</a>
      <a className=" cursor-pointer hover:text-[#1e8a00]">Pricing</a>
      <a className=" cursor-pointer hover:text-[#1e8a00]">ContactUs</a>
    </nav>
    <div className="flex justify-center items-center w-1/4">
     <Link href="/sign-up">
     <button className="rounded-lg px-6 py-2 hover:bg-[#1E8A00] bg-[#2ec262] text-white">
            Signup
      </button>
      </Link>
    </div>
  </div>
  </Navbar>
  )
}
