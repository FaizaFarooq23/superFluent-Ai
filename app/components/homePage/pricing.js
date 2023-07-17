import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pricing() {
  return (
    <div className="py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple no-tricks pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            numquam veritatis laudantium, facilis id inventore perspiciatis ipsa
            quae cum provident totam, molestias odit qui dolore non omnis
            quisquam? Totam, ipsa?
          </p>
        </div>
        </div>
        <div className="flex items-center py-4 justify-center flex-wrap sm:flex-nowrap ">
          <div className="font-bold px-6 ">
            <p className="">Monthly</p>
          </div>
          <div>
            <p className="">Annual</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="mt-10 ">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:gap-x-8">
              <div className="w-72 sm:w-96 bg-white rounded-lg shadow-[#0707076b] shadow-lg overflow-hidden  sm:mx-0 my-4">
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-gray-900">Basic</h3>
                  <p className="mt-2 text-gray-600">Ideal for small projects</p>
                  <p className="mt-4 text-4xl font-semibold text-gray-900">
                    $19
                  </p>
                  <p className="text-gray-600">per month</p>
                </div>
                <div className="px-6 py-4">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        color="#1e8a00"
                      ></FontAwesomeIcon>
                      <span className="text-gray-700 px-2">
                        10 AI translations per day
                      </span>
                    </li>
                    <li className="flex items-center">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        color="#1e8a00"
                      ></FontAwesomeIcon>
                      <span className="text-gray-700 px-2">
                        AI Autocomplete
                      </span>
                    </li>
                    <li className="flex items-center">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        color="#1e8a00"
                      ></FontAwesomeIcon>
                      <span className="text-gray-700 px-2">500GB Storage</span>
                    </li>
                    <li className="flex items-center">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        color="#1e8a00"
                      ></FontAwesomeIcon>
                      <span className="text-gray-700 px-2">24/7 Support</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center py-4">
                  <button className="bg-[#1e8a00] w-11/12 text-white px-6 py-3 rounded-lg hover:bg-[#2ec262] focus:outline-none">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="w-72 sm:w-96 bg-white rounded-lg shadow-[#0707076b] shadow-lg overflow-hidden  sm:mx-0 my-4">
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Unlimited
                  </h3>
                  <p className="mt-2 text-gray-600">Ideal for large projects</p>
                  <p className="mt-4 text-4xl font-semibold text-gray-900">
                    $40
                  </p>
                  <p className="text-gray-600">per month</p>
                </div>
                <div className="px-6 py-4">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        color="#1e8a00"
                      ></FontAwesomeIcon>
                      <span className="text-gray-700 px-2">
                        100+ AI translations per day
                      </span>
                    </li>
                    <li className="flex items-center">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        color="#1e8a00"
                      ></FontAwesomeIcon>
                      <span className="text-gray-700 px-2">
                        AI Autocomplete
                      </span>
                    </li>
                    <li className="flex items-center">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        color="#1e8a00"
                      ></FontAwesomeIcon>
                      <span className="text-gray-700 px-2">1000GB Storage</span>
                    </li>
                    <li className="flex items-center">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        color="#1e8a00"
                      ></FontAwesomeIcon>
                      <span className="text-gray-700 px-2">24/7 Support</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center py-4">
                  <button className="bg-[#1e8a00] w-11/12 text-white px-6 py-3 rounded-lg hover:bg-[#2ec262] focus:outline-none">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
