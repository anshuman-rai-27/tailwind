import React, { useState, useEffect } from 'react';

const ProgressCircle = ({ percent }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const progressOffset = (100 - percent) / 100 * 251.2;
    setOffset(progressOffset);
  }, [percent]);

  return (
    <div className="relative w-7 h-7 mr-1">
      <svg className="absolute top-0 left-0 w-full h-full transform rotate-270" viewBox="0 0 120 120">
        {/* Background circle */}
        <circle
          className=" stroke-blue-300"
          cx="60"
          cy="60"
          r="54"
          strokeWidth="14"
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          className=" stroke-blue-500 "
          cx="60"
          cy="60"
          r="54"
          strokeWidth="14"
          fill="transparent"
          strokeDasharray="251.2"
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      {/* Percentage label */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <span className="text-sm font-bold text-gray-700">{percent}</span>
      </div>
    </div>
  );
};

export default ProgressCircle;
