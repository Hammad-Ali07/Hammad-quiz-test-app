'use client'
import React, { useState } from 'react';
import { quizData } from '../utils/quizData';
import Difficulty from './difficulty';
import Question from './question';
import Answer from './answer';
import ScoreBar from './score';
import StarRating from './startRating';

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const question = quizData[currentQuestionIndex];

  // Normalize difficulty to ensure it matches 'Easy', 'Medium', or 'Hard'
  const normalizedDifficulty = question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1).toLowerCase();

  const handleAnswer = (answer: string) => {
    if (!selectedAnswer) {
      setSelectedAnswer(answer);
      setAnsweredQuestions((prev) => prev + 1);

      if (answer === question.correctAnswer) {
        setCorrectAnswers((prev) => prev + 1);
      }
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      // Quiz is completed
      setIsQuizCompleted(true);
    }
  };

  // Restart the quiz
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setCorrectAnswers(0);
    setAnsweredQuestions(0);
    setIsQuizCompleted(false);
  };

  // Score Calculations
  const currentScore = answeredQuestions > 0 ? (correctAnswers / answeredQuestions) * 100 : 0;
  const maxScore = ((correctAnswers + (quizData.length - answeredQuestions)) / quizData.length) * 100;
  const minScore = (correctAnswers / quizData.length) * 100;

  // Progress Message
  const getProgressMessage = () => {
    if (currentScore >= 80) {
      return 'Excellent! You have a great understanding of the topic.';
    } else if (currentScore >= 50) {
      return 'Good job! You have a decent understanding, but there’s room for improvement.';
    } else {
      return 'Keep practicing! You’ll get better with more effort.';
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 flex flex-col min-h-screen">
      {/* Scrollbar at the Top */}
      <div className="fixed top-0 left-0 w-full bg-gray-200 h-2 z-50">
        <div
          className="bg-blue-500 h-2 transition-all"
          style={{ width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` }}
        ></div>
      </div>

      {isQuizCompleted ? (
        // Quiz Completion Screen
        <div className="flex flex-col items-center justify-center flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Completed!</h1>
          <p className="text-lg text-gray-700 mb-6">
            Your final score is: <span className="font-bold">{Math.round(currentScore)}%</span>
          </p>
          <p className="text-lg text-gray-700 mb-8 text-center">{getProgressMessage()}</p>
          <button
            onClick={restartQuiz}
            className="mt-6 px-8 py-4 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-all"
          >
            Attempt Again
          </button>
        </div>
      ) : (
        // Quiz in Progress
        <>
          {/* Question Number Heading */}
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Question {currentQuestionIndex + 1} out of {quizData.length}
          </h1>

          {/* Star Rating Based on Difficulty */}
          <div className="mb-4">
            <StarRating difficulty={normalizedDifficulty as 'Easy' | 'Medium' | 'Hard'} /> {/* Ensure type safety */}
          </div>

          {/* Difficulty Badge */}
          <div className="mb-6">
            <Difficulty level={normalizedDifficulty as 'Easy' | 'Medium' | 'Hard'} /> {/* Ensure type safety */}
          </div>

          {/* Question Text on the Left Side */}
          <div className="w-full mb-6">
            <Question 
              text={question.text} 
              questionNumber={currentQuestionIndex + 1} 
              totalQuestions={quizData.length} 
            /> {/* Pass only the question text */}
          </div>

          {/* Answer Options with Space */}
          <div className="w-full flex flex-col gap-4">
            <Answer
              options={question.options}
              onAnswer={handleAnswer}
              selected={selectedAnswer}
              correctAnswer={question.correctAnswer}
            />
          </div>

          {/* Next Button */}
          {selectedAnswer && (
            <button
              onClick={nextQuestion}
              className="mt-6 w-full py-4 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-all"
            >
              {currentQuestionIndex < quizData.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          )}

          {/* Score Bar at the Bottom Center */}
          <div className="mt-auto w-full flex justify-center py-8">
            <ScoreBar score={currentScore} maxScore={maxScore} minScore={minScore} />
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;