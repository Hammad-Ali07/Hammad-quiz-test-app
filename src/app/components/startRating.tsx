import React from 'react';

type Props = {
  difficulty: 'Easy' | 'Medium' | 'Hard';
};

const StarRating: React.FC<Props> = ({ difficulty }) => {
  const starCount = difficulty === 'Easy' ? 1 : difficulty === 'Medium' ? 2 : 3;

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-6 h-6 ${index < starCount ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;