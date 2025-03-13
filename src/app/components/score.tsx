import React from 'react';

type Props = {
  score: number;
  maxScore: number;
  minScore: number;
};

const ScoreBar: React.FC<Props> = ({ score, maxScore, minScore }) => {
  return (
    <div className="w-full" style={{ maxWidth: '800px' }}> {/* Custom width applied */}
      {/* Scores Display Above the Bar */}
      <div className="flex justify-between text-sm font-bold mb-2">
        <span>Score: {Math.round(score)}%</span>
        <span>Max Score: {Math.round(maxScore)}%</span>
      </div>

      {/* Bar Container */}
      <div className="relative w-full bg-gray-200 h-8 rounded-lg overflow-hidden border border-gray-400">
        {/* Minimum Possible Score (Black Section) */}
        <div
          className="absolute left-0 bg-black h-full"
          style={{ width: `${minScore}%` }}
        ></div>

        {/* Current Score (Dark Gray Section) */}
        <div
          className="absolute left-0 bg-gray-600 h-full"
          style={{ width: `${score}%`, left: `${minScore}%` }}
        ></div>

        {/* Maximum Possible Score (Gray Section) */}
        <div
          className="absolute left-0 bg-gray-400 h-full"
          style={{ width: `${maxScore - score}%`, left: `${minScore + score}%` }}
        ></div>

        {/* Remaining Portion (White Section) */}
        <div
          className="absolute left-0 bg-white h-full"
          style={{ width: `${100 - maxScore}%`, left: `${maxScore}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ScoreBar;