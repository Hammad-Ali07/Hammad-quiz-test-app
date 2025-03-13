import React from "react";

type Props = {
  options: string[];
  onAnswer: (answer: string) => void;
  selected: string | null;
  correctAnswer: string;
};

const Answer: React.FC<Props> = ({ options, onAnswer, selected, correctAnswer }) => (
  <div className="mt-6 grid grid-cols-2 gap-4 justify-center">
    {options.map((option) => (
      <button
        key={option}
        onClick={() => onAnswer(option)}
        className={`py-4 px-6 text-lg font-semibold border rounded-lg transition-all duration-300 shadow-md text-center
          ${selected
            ? option === correctAnswer
              ? 'bg-green-500 text-white'
              : option === selected
              ? 'bg-red-500 text-white'
              : 'bg-gray-300'
            : 'bg-gray-200 hover:bg-gray-300'}`}
      >
        {option}
      </button>
    ))}
  </div>
);

export default Answer;
