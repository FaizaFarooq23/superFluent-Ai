import React from "react";
import { CiUser } from "react-icons/ci";
import RadialProgress from "./radialProgress";

const WelcomeCard = ({ name, progress, language }) => {
  return (
    <div className=" rounded-lg shadow-xl p-4 w-full text-black">
      <div className="flex items-center p-4">
        <CiUser className="text-2xl mr-2" />
        <h1 className="text-xl font-semibold">Welcome {name}</h1>
      </div>

      <div className="flex items-center justifyy-between w-full bg-alice-blue rounded-lg p-4">
        <RadialProgress percentage={progress} radius={40} />
        <p className="ml-4">Your {language} has improved.</p>
      </div>
    </div>
  );
};

export default WelcomeCard;
