export interface Question {
    id: number;
    question: string;
    answers: string[];
    correctAnswer: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: 'What is the capital of France?',
    correctAnswer: 'Paris',
    answers: ['Paris', 'London', 'Berlin', 'Madrid'],
  },
  {
    id: 2,
    question: 'What is the largest mammal?',
    correctAnswer: 'Whale',
    answers: ['Elephant', 'Whale', 'Giraffe', 'Lion'],
  },
  {
    id: 3,
    question: 'Which planet is known as the Red Planet?',
    correctAnswer: 'Mars',
    answers: ['Jupiter', 'Mars', 'Saturn', 'Venus'],
  },
  {
    id: 4,
    question: 'What is the chemical symbol for water?',
    correctAnswer: 'H2O',
    answers: ['W', 'H2O', 'O2', 'H'],
  },
  {
    id: 5,
    question: 'Who wrote the play "Hamlet"?',
    correctAnswer: 'William Shakespeare',
    answers: ['William Shakespeare', 'George Bernard Shaw', 'Oscar Wilde', 'Tennessee Williams'],
  },
  {
    id: 6,
    question: 'What is the tallest mountain in the world?',
    correctAnswer: 'Mount Everest',
    answers: ['Mount Everest', 'K2', 'Mount Kilimanjaro', 'Mount Fuji'],
  },
  {
    id: 7,
    question: 'What is the capital city of Japan?',
    correctAnswer: 'Tokyo',
    answers: ['Tokyo', 'Beijing', 'Seoul', 'Bangkok'],
  },
  {
    id: 8,
    question: 'Which country is known as the Land of the Rising Sun?',
    correctAnswer: 'Japan',
    answers: ['China', 'Japan', 'South Korea', 'Vietnam'],
  },
  {
    id: 9,
    question: 'Who was the first person to step on the moon?',
    correctAnswer: 'Neil Armstrong',
    answers: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'Alan Shepard'],
  },
  {
    id: 10,
    question: 'What is the chemical symbol for gold?',
    correctAnswer: 'Au',
    answers: ['Au', 'Ag', 'Pt', 'Fe'],
  },
  {
    id: 11,
    question: 'Who painted the famous artwork "The Starry Night"?',
    correctAnswer: 'Vincent van Gogh',
    answers: ['Pablo Picasso', 'Vincent van Gogh', 'Claude Monet', 'Leonardo da Vinci'],
  },
  {
    id: 12,
    question: 'What is the largest mammal in the world?',
    correctAnswer: 'Blue whale',
    answers: ['Elephant', 'Giraffe', 'Blue whale', 'Hippopotamus'],
  },
  {
    id: 13,
    question: 'What is the capital city of Australia?',
    correctAnswer: 'Canberra',
    answers: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
  },
  {
    id: 14,
    question: 'Who discovered penicillin?',
    correctAnswer: 'Alexander Fleming',
    answers: ['Alexander Fleming', 'Louis Pasteur', 'Jonas Salk', 'Joseph Lister'],
  },
  {
    id: 15,
    question: 'What is the chemical symbol for carbon?',
    correctAnswer: 'C',
    answers: ['Ca', 'C', 'Co', 'Cr'],
  },
  {
    id: 16,
    question: 'Who wrote the novel "Pride and Prejudice"?',
    correctAnswer: 'Jane Austen',
    answers: ['Emily Brontë', 'Charlotte Brontë', 'Jane Austen', 'Charles Dickens'],
  },
  {
    id: 17,
    question: 'What is the largest ocean in the world?',
    correctAnswer: 'Pacific Ocean',
    answers: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
  },
  {
    id: 18,
    question: 'Who is known as the Father of Modern Physics?',
    correctAnswer: 'Albert Einstein',
    answers: ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Nikola Tesla'],
  },
  {
    id: 19,
    question: 'What is the chemical symbol for sodium?',
    correctAnswer: 'Na',
    answers: ['S', 'Na', 'Sn', 'Si'],
  },
  {
    id: 20,
    question: 'Who painted the ceiling of the Sistine Chapel?',
    correctAnswer: 'Michelangelo',
    answers: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Donatello'],
  },
];
