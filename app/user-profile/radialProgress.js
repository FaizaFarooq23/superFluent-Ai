import React from 'react';

const RadialProgress = ({ percentage,radius }) => {
  const strokeWidth = 10;
  const progressOffset = ((100 - percentage) / 100) * Math.PI * (radius * 2.1);

  return (
    <svg className="radial-progress" width={radius * 2} height={radius * 2}>
      <circle
        className="radial-progress-background"
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        stroke="#e4e4e4"
        strokeWidth={strokeWidth}
        fill="transparent"
      />
      <circle
        className="radial-progress-foreground"
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        stroke="#00cc00"
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={`${Math.PI * (radius * 2)}`}
        strokeDashoffset={progressOffset}
      />
      <text
        className="font-inter text-sm"
        x="50%"
        y="50%"
        textAnchor="middle"
        dy="0.4em"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default RadialProgress;
