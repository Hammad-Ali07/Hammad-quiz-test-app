import React from 'react';

type Props = {
  level: 'Easy' | 'Medium' | 'Hard';
};

const Difficulty: React.FC<Props> = ({ level }) => (
  <span className={`px-4 py-1 text-white font-bold rounded-full ${level === 'Easy'
    ? 'bg-green-400'
    : level === 'Medium'
      ? 'bg-yellow-500'
      : 'bg-red-500'}`}
  >
    {level}
  </span>
);

export default Difficulty;