

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
        <div className="w-full">
        <div   className="flex justify-between bg-transparent items-center">
        <div className="w-1/4 flex justify-center">
            <img className="w-1/2 h-32 -z-0" src="/images/superfluent-ai-logo.png" alt="superfluent-logo" />
        </div>
        <nav className="flex items-center justify-evenly mt-2 w-2/4">
            <a>Home</a>
            <a>Features</a>
            <a>Usecases</a>
            <a>Pricing</a>
            <a>ContactUs</a>
        </nav>
        <div className="flex justify-center items-center w-1/4">
        <button className=" rounded-lg px-6 py-2 bg-[#1E8A00] text-white">Signup</button>
        </div>
        </div>
        <div className="px-12 -mt-4 w-full">
            <div className="flex items-center mx-2">
            <div className="flex flex-col items-start justify-start px-8">
            <span className="text-[#1e8a00] text-[44px] font-bold">Master Arabic with <br/>SuperFluent AI </span>
            <span className="text-[#258b49] mt-4 text-xl">Learn Arabic with the most advanced AI-powered <br/>Arabic learning platform</span>                        
            <button className="rounded-lg mt-6 px-8 py-2 font-bold bg-[#1E8A00] text-white">Speak Fluent</button>
            </div>
            <div className="flex items-center justify-end mt-2">
           <video className="w-[660px] h-[440px]" src="/images/recording.mp4" autoPlay loop muted ></video>
        </div>
        </div>
    </div>
    </div>
    </main>
  )
}
