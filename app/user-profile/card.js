import React from 'react';
import ProgressBar from './linearProgress';
import { CiUser } from 'react-icons/ci';

const Card = ({ icon, title, percentage, color,subtitle }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl py-4 px-6 w-full text-black m-2">
      <div className="flex flex-col mb-4">
        {icon}
        <h1 className="text-lg font-semibold mt-2">{title}</h1>
      </div>
      <p className="text-xs mb-2 text-gray-500">{subtitle}</p>

      <ProgressBar percentage={percentage} color={color} />
    </div>
  );
};

export default Card;
