import React from "react";

type Props = {
  text: string;
  questionNumber: number;
  totalQuestions: number;
};

const Question: React.FC<Props> = ({ text, questionNumber, totalQuestions }) => (
  <div className="text-center mb-6">
    <h3 className="text-lg font-semibold text-gray-700 mb-2">
      Question {questionNumber} of {totalQuestions}
    </h3>
    <h2 className="text-3xl font-bold text-gray-800">{text}</h2>
  </div>
);

export default Question;
