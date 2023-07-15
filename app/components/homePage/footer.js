export default function Footer() {
  return (
    <footer className=" shadow-inner mt-20">
      <div className="flex flex-col sm:flex-row items-start py-4 px-6 sm:px-14 justify-between h-auto sm:h-[40%] w-full mt-10">
        <div className="flex flex-col items-start justify-center">
          <div className="flex items-center justify-center">
            <img
              className="h-8 sm:h-10 w-8 sm:w-10"
              src="/images/superfleunt logo.svg"
              alt="site-logo"
            />
            <span className="text-[#1e8a00] font-bold text-xl sm:text-2xl ml-2">
              SuperFluent
            </span>
          </div>
        </div>
        <div className="flex uppercase flex-col items-start justify-start mt-4 sm:mt-0">
          <p className="text-[#1e8a00] py-2 font-semibold">Social</p>
          <div className="flex items-center justify-start">
            <img
              src="/images/facebookf.svg"
              alt="facebook"
              className="h-3 sm:h-4 mr-2 sm:mr-3 w-3 sm:w-4"
            />
            <img
              src="/images/google.svg"
              alt="google"
              className="h-3 sm:h-4 w-3 sm:w-4"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start mt-4 sm:mt-0">
          <p className="text-[#1e8a00] py-2 font-semibold">CONTACT</p>
          <span className="pb-1">+44 192 865 955</span>
          <span>teamSuperfluent@gmail.com</span>
        </div>
        <div className="flex flex-col items-start justify-start mt-4 sm:mt-0">
          <p className="text-[#1e8a00] py-2 font-semibold">PAGES</p>
          <span className="pb-1">Pricing</span>
          <span className="pb-1">Features</span>
          <span className="pb-1">UseCases</span>
        </div>
        <div className="flex flex-col items-start justify-start mt-4 sm:mt-0">
          <p className="text-[#1e8a00] py-2 font-semibold">LEGAL</p>
          <span className="pb-1">Terms of Services</span>
          <span>Privacy Policy</span>
        </div>
      </div>
     <div className="lg:px-14">
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </div>
      <div className="flex items-start justify-center w-full py-2 sm:py-3 px-6 sm:px-14">
        <span className="text-[#33333380] ">
          © 2023 SuperFluent. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
