import { faDice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Speaking() {
  return (
<div className="bg-white w-screen flex flex-col items-center justify-center min-h-screen">
            <div className="flex items-center font-bold mb-4 w-full text-xl justify-center">
                <h1>What do you want to talk about?</h1>
            </div>

            <div className="bg-[#F3F9FE] shadow-[#2f2e2e80] shadow-sm w-[80%] mt-4 py-2 rounded">
                <div className="flex flex-col items-start rounded-t-sm px-2 w-full py-4 sm:mr-2">
                    <label className="font-semibold text-[#1e8a00] pb-1 px-2">My role</label>
                    <input className="bg-transparent outline-none w-full px-2" type="text" placeholder="Enter your topic here" />
                </div>
                <div className="flex flex-col items-start px-2 w-full py-4 mt-0.5 border-t-2 border-white sm:mr-2">
                    <label className="font-semibold text-[#1e8a00] py-1 px-2">AI's role</label>
                    <input className="bg-transparent outline-none w-full px-2" type="text" placeholder="A very nice server" />
                </div>
                <div className="flex flex-col items-start border-t-2 w-full py-4 border-white px-2 mt-0.5">
                    <label className="font-semibold text-[#1e8a00] py-1 px-2">Situation</label>
                    <input className="flex bg-transparent px-2 w-full outline-none" type="text" placeholder="I'm having difficulty understanding what's in the menu" />
                </div>
                <div className="bg-[#F3F9FE] items-center flex justify-center w-full py-4 rounded-b border-t-2 border-white px-2 mt-0.5">
                    <FontAwesomeIcon icon={faDice} color="#1e8a00"></FontAwesomeIcon>
                    <span className="text-[#1e8a00] mt-4 font-semibold">Randomize</span>
                </div>
            </div>
        </div>
  )
}
