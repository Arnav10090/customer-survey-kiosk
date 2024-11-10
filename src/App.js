import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import ThankYouScreen from './components/ThankYouScreen';
import { questions } from './data/questions'; // Importing questions

function App() {
  const [currentScreen, setCurrentScreen] = useState("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    // Generate a unique session ID for each customer
    const session = Date.now(); // Simple session logic, can use UUIDs
    setSessionId(session);
  }, []);

  const startSurvey = () => setCurrentScreen("question");
  
  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentScreen("confirmation");
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const submitSurvey = () => {
    localStorage.setItem(`survey_${sessionId}`, JSON.stringify({ ...answers, status: "COMPLETED" }));
    setCurrentScreen("thankyou");
    setTimeout(() => setCurrentScreen("welcome"), 5000);
  };

  return (
    <div>
      {currentScreen === "welcome" && <WelcomeScreen startSurvey={startSurvey} />}
      {currentScreen === "question" && (
        <QuestionScreen
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
          next={nextQuestion}
          prev={prevQuestion}
        />
      )}
      {currentScreen === "confirmation" && (
        <div>
          <h2>Confirm Submission</h2>
          <button onClick={submitSurvey}>Confirm</button>
          <button onClick={() => setCurrentScreen("question")}>Cancel</button>
        </div>
      )}
      {currentScreen === "thankyou" && <ThankYouScreen />}
    </div>
  );
}

export default App;