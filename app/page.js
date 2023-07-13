export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between font-serif  ">
      <div className="w-full">
        <div className="flex justify-between bg-transparent items-center shadow-md">
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
            <button className=" rounded-lg px-6 py-2 bg-[#1E8A00] text-white">
              Signup
            </button>
          </div>
        </div>
        <div className="px-16  w-full">
          <div className="flex items-center mx-2 mt-5 ">
            <div className="flex flex-col items-start justify-between w-[60%] px-16">
              <span className="text-[#1e8a00] -mt-2 text-[36px] font-bold">
                Master Arabic with <br />
                SuperFluent AI{" "}
              </span>
              <span className="text-[#258b49] mt-10 text-xl">
                Translate Arabic with the most advanced <br /> AI-powered Arabic
                learning platform
              </span>
              <button className="rounded-lg mt-12 px-8 py-2 text-lg font-bold bg-[#1E8A00] hover:bg-[#258b49] text-white">
                Start Recording
              </button>
            </div>
            <div className="flex items-end justify-center mt-3 ">
              <video
                className="w-[80%] h-[40%]"
                src="/images/recording.mp4"
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
