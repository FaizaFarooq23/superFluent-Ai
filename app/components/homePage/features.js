import {faBarsProgress , faVolcano , faLanguage, faToggleOff} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const features = [
  {
    name: 'Progress Tracking',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: () => (
      <FontAwesomeIcon icon={faBarsProgress} color='white'>

      </FontAwesomeIcon>

    ),
  },
  {
    name: 'Pronounciation Assistance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: () => (
      <FontAwesomeIcon icon={faVolcano} color='white'>

      </FontAwesomeIcon>

    ),
  },
  {
    name: 'Natural Language Interaction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: () => (
      <FontAwesomeIcon icon={faLanguage} color='white'>

      </FontAwesomeIcon>

    ),
  },
  {
    name: 'Ability to Toggle Translation On/Off',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: () => (
      <FontAwesomeIcon icon={faToggleOff} color='white'>

      </FontAwesomeIcon>

    ),
  },
];

export default function Features() {
  return (
    <div className="bg-[#F3F9FE] rounded pt-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#1e8a00]">Powerful Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Introducing the ultimate solution for Arabic translation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          At superfluent we used the latest AI technology to build the best Arabic translation platform.Powered by artificial intelligence and deep learning techniques, this smart voice translator seamlessly converts spoken Arabic words into written text and accurately translates them into other languages
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1e8a00]">
                    <feature.icon aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

  )
}
