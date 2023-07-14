import {BsEnvelope} from "react-icons/bs";
import { BsInstagram,BsTelegram } from "react-icons/bs";
import Link from "next/link";

export default function ContactUs() {
  console.log("contactUs");

  return (
    <div className="h-full w-screen flex md:flex-row flex-col md:justify-center md:items-center relative py-10">
      <div className="text-white  md:mr-10  px-10 py-5 rounded-xl md:mt-0 mt-10  text-base z-10 bg-superfluent-green-emerald">
        <h1 className="text-4xl mb-4">Contact Us</h1>

        <form className="mt-8">
          <div className="mb-4 flex gap-x-2">
            <div className="mb-4 ">
              <label htmlFor="FirstName" className="block text-lg">
                First Name:
              </label>
              <input
                type="text"
                id="FirstName"
                className="w-full px-4 py-2 rounded-lg border border-superfluent-green focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="LastName" className="block text-lg">
                Last Name:
              </label>
              <input
                type="text"
                id="LastName"
                className="w-full px-4 py-2 rounded-lg border border-superfluent-green focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-superfluent-green focus:outline-none focus:border-blue-500"
              required

            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-lg">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="w-full px-4 py-2 rounded-lg border border-superfluent-green focus:outline-none focus:border-blue-500"
              required

            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg">
              Message:
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg border border-superfluent-green focus:outline-none focus:border-blue-500"
              required

            ></textarea>
          </div>
          <button
            type="submit"
            className="  px-6 py-2 flex rounded-lg hover:bg-superfluent-green border text-white transition-all border-superfluent-green"
          >
            Send Message
            <BsEnvelope className="inline-block ml-2 text-xl my-auto" />

          </button>
        </form>
      </div>
      <div className="text-black text-base w-full md:w-1/3  p-10">
        <p>
          Thank you for reaching out! If you have any criticisms or suggestions,
          please feel free to contact us using the information below:
        </p>
        <div>
          <p className="mt-4 text-xl font-bold">Office address:</p>
          <p>No. 40, No. 40, Second Street, North Kargar St., Tehran.</p>
          <p className="mt-4 text-xl font-bold">Contact number:</p>
          <p>021-88016756</p>
          <p className="mt-4">
            Follow SuperFluent Instagram page to receive free educational
            materials including useful and interesting tips from books and
            up-to-date materials.
          </p>
          <Link href="https://www.instagram.com/superFluent/">
            <p className="mt-4 text-xl text-white font-bold cursor-pointer bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-2 rounded-xl my-auto">
              <BsInstagram className="inline-block text-2xl  mr-2" />
              Instagram
            </p>
          </Link>
          <p className="mt-4">
            Follow SuperFluent Telegram channel to receive free educational
            materials including useful and interesting tips from books and 
            up-to-date materials.
          </p>
          <Link href="https://t.me/superFluent">
            <p className="mt-4 text-xl text-white font-bold cursor-pointer  bg-blue-500 p-2 rounded-xl my-auto">
              <BsTelegram className="inline-block text-2xl  mr-2" />
              Telegram
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
