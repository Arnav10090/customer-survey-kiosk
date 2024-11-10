import React, { useState } from 'react';

function QuestionScreen({ question, questionNumber, totalQuestions, onAnswer, next, prev }) {
  const [answer, setAnswer] = useState("");

  const handleNext = () => {
    onAnswer(question.id, answer);
    next();
    setAnswer("");
  };

  return (
    <div>
      <h2>Question {questionNumber} / {totalQuestions}</h2>
      <p>{question.text}</p>
      {question.type === "rating" && (
        <input
          type="number"
          min={question.min}
          max={question.max}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      )}
      {question.type === "text" && (
        <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} />
      )}
      <button onClick={prev} disabled={questionNumber === 1}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={() => next()}>Skip</button>
    </div>
  );
}

export default QuestionScreen;