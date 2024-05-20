import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { Question, questions } from '../hooks/useQuestion';

const QuestionComponent: React.FC = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [totalScore, setTotalScore] = useState<number>(0)

  useEffect(() => {
    randomizeQuestions();
  }, []);

  const randomizeQuestions = () => {
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    const selected = shuffledQuestions.slice(0, 20);
    setSelectedQuestions(selected);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex < selectedQuestions.length - 1) {
        return prevIndex + 1;
      } else {
        Alert.alert('Quiz Complete', 'You have answered all questions.');
        setQuizCompleted(true);
        return prevIndex;
      }
    });
  };

  const handleRestartQuiz = () => {
    setTotalScore(0)
    setQuizCompleted(false);
    setCurrentQuestionIndex(0);
    randomizeQuestions();
  };

  const renderQuestion = (question: Question) => {
    const shuffledAnswers = [...question.answers].sort(() => Math.random() - 0.5);
    
    return (
      <View key={question.id}>
        <Text>{question.question}</Text>
        {shuffledAnswers.map((answer, index) => (
          <Button
            key={index}
            title={answer}
            onPress={() => handleAnswer(question, answer)}
          />
        ))}
      </View>
    );
  };

  const handleAnswer = (question: Question, selectedAnswer: string) => {
    if (selectedAnswer === question.correctAnswer) {
      setTotalScore((prevScore) => prevScore + 1)
    }
    handleNextQuestion();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {selectedQuestions.length > 0 && !quizCompleted && (
        renderQuestion(selectedQuestions[currentQuestionIndex])
      )}
      {quizCompleted && (
        <View>
          <Button title="Restart" onPress={handleRestartQuiz} />
          <Text>Total Score: {totalScore}</Text>
        </View>
      )}
    </View>
  );
};

export default QuestionComponent;
