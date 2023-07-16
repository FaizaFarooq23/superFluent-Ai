import React from "react";
import RadialProgress from "./radialProgress";
import WelcomeCard from "./welcome";
import Card from "./card";
import { FcReading } from "react-icons/fc";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { TiSortAlphabeticallyOutline } from "react-icons/ti";
import { SlSpeech } from "react-icons/sl";
import BaseLayout from "../components/BaseLayout/BaseLayout";
export default function UserProfile() {
  const progressPercentage = 50; // Example: Set the progress percentage dynamically
  const data = [
    {
      id: 1,
      icon: <FcReading className="text-2xl mr-2 text-[#2F855A]" />,
      title: "Reading",
      percentage: 50,
      color: "#2F855A",
      subtitle: "Your reading has improved"
    },
    {
      id: 2,
      icon: <SlSpeech className="text-2xl mr-2 text-[#3B82F6]" />,
      title: "Speaking",
      percentage: 50,
      color: "#3B82F6",
      subtitle: "Your speaking has improved"
    },
    {
      id: 3,
      icon: <FaAssistiveListeningSystems className="text-2xl mr-2 text-[#10B981]" />,
      title: "Listening",
      percentage: 50,
      color: "#10B981",
      subtitle: "Your listening has improved"
    },
    {
      id: 4,
      icon: <TiSortAlphabeticallyOutline className="text-2xl mr-2 text-[#4ADE80]" />,
      title: "Grammar",
      percentage: 50,
      color: "#4ADE80",
      subtitle: "Your grammar has improved"
    },
  ]

  return (
    <BaseLayout>
      <div className="w-full h-full flex flex-col items-center justify-center p-2">
        <div className=" w-full h-max p-4  flex flex-col items-center justify-center ">
          <WelcomeCard name={"John"} progress={progressPercentage} language={"Arabic"} />
        </div>
        <div className="w-full h-max p-4  flex flex-row items-center justify-center flex-wrap">
          {data.map((item) => (
            <div className=" w-1/2">
              <Card key={item.id} icon={item.icon} title={item.title} percentage={item.percentage} color={item.color} subtitle={item.subtitle} />
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}
