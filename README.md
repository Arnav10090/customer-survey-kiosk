# Customer Survey React App
## Overview
This is a React.js application designed to collect customer feedback in a shop using a survey. The survey asks 5 questions about customer satisfaction, pricing, value for money, and a general improvement suggestion. The app allows customers to navigate through the questions, provide answers, and submit their feedback. Responses are saved in the browser's localStorage and the application provides a session-based experience.

## Features:
•	Greet customers with a welcome screen.
•	Navigate through survey questions (previous, next, and skip).
•	Multiple question types: Rating (1-5 or 1-10), and Text input.
•	Display progress (e.g., 1/5, 2/5) during the survey.
•	Submit survey with a confirmation dialog upon completion.
•	After survey submission, show a "Thank you" screen and redirect back to the welcome screen after 5 seconds.

## Table of Contents
1.	Installation
2.	Usage
3.	App Structure
4.	Project Components
5.	Extending the App
6.	License

## Installation
### Prerequisites:
Make sure you have Node.js and npm installed.
1.	Clone the repository:
git clone https://github.com/Arnav10090/customer-survey-kiosk.git
cd customer-survey-kiosk

2.	Install dependencies:
npm install

3.	Start the development server:
npm start
This will open the application in your default browser at http://localhost:3000.

## Usage
Once the application is running, it will display a welcome screen. The customer can click the "Start Survey" button to begin the survey. The following actions are available:
•	Next: Move to the next question.
•	Previous: Move to the previous question.
•	Skip: Skip the current question and move to the next one.
At the end of the survey, a confirmation dialog will appear asking the customer if they want to submit their responses. Once confirmed, the app will save the answers, mark the survey as completed, and show a "Thank you" screen for 5 seconds before redirecting back to the welcome screen.

## App Structure
survey-app/
├── public/
├── src/
│   ├── components/
│   │   ├── WelcomeScreen.js      # Simple screen to welcome customers
│   │   ├── QuestionScreen.js     # Displays each question, with options for navigating and skipping
│   │   ├── ThankYouScreen.js     # Displays a Thank You message after survey completion
│   ├── data/
│   │   └── questions.js          # Questions stored in a structured format
│   ├── App.js                    # Main component that manages the different screens
│   ├── index.js                  # Renders the main App component
│   └── index.css                 # Contains basic global styling for the app
└── package.json                  # Includes basic dependencies for the react setup

### Dependencies:
•	react: Core React library.
•	react-dom: Library for interacting with the DOM.
•	react-scripts: Scripts for running the development server and building the app.

## Project Components
1. App.js:
This is the main entry point of the application. It manages the state of the survey and keeps track of the current question.It also handles navigation between the different screens (Welcome, Question, ThankYou).
2. WelcomeScreen.js:
A simple screen that welcomes the customer and provides a button to start the survey. This screen is displayed first and is followed by the first question of the survey.
3. QuestionScreen.js:
Displays each question in the survey. It handles different types of questions: rating (buttons for rating) and text (textarea for free text feedback). It also allows customers to navigate to the previous or next question, and skip questions.
4. ThankYouScreen.js:
After the survey is completed, this screen thanks the customer and shows a confirmation message. After 5 seconds, the app redirects back to the welcome screen.

## Extending the App
To add new questions to the survey:
1.	Update the questions array in App.js by adding new question objects. For example, you can add a new question like:
{ id: 6, type: 'rating', prompt: 'How would you rate our customer service?', options: [1, 2, 3, 4, 5] }

2.	Ensure that new questions follow the same structure as existing ones. The type can either be rating (with an array of options) or text.
Adding More Question Types:
If you need to support more types of questions (e.g., dropdowns, checkboxes), you can extend the QuestionScreen.js component to render these types of inputs accordingly.

This project is open-source and available under the MIT License.
________________________________________
Feel free to modify and extend this application to fit your needs. If you have any questions, feel free to reach out or open an issue in the GitHub repository.
________________________________________
Thank you for using this app!
