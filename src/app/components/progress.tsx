import React from 'react';

type Props = {
  progress: number;
};

const Progress: React.FC<Props> = ({ progress }) => (
  <div className="w-full bg-gray-300 h-2 rounded mt-2">
    <div className="h-2 bg-blue-500 rounded transition-all duration-300" style={{ width: `${progress}%` }}></div>
  </div>
);

export default Progress;
