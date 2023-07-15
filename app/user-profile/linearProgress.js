import React from "react";

const ProgressBar = ({ percentage, color }) => {
  const progressBarStyle = {
    width: `${percentage}%`,
    backgroundColor: color,
  };

  return (
    <div className="bg-gray-300 h-2 w-full rounded-lg">
      <div
        className="h-full rounded-lg"
        style={progressBarStyle}
      ></div>
    </div>
  );
};

export default ProgressBar;
