export default function Home() {
  console.log('home')
  return (


        <div className="px-16  w-full h-full py-20">
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

  );
}
