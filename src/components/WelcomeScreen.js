import React from 'react';

function WelcomeScreen({ startSurvey }) {
  return (
    <div>
      <h1>Welcome to the Customer Survey</h1>
      <button onClick={startSurvey}>Start</button>
    </div>
  );
}

export default WelcomeScreen;