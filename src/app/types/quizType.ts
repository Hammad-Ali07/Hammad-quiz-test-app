export type Question = {
    id: number;
    text: string;
    options: string[];
    correctAnswer: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
  };