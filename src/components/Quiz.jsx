import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const questions = [
  { question: "Do you want a new iPhone from Apple?", options: ["Yes", "No"] },
  { question: "Do you want USB-C charging?", options: ["Yes", "No"] },
  { question: "Do you want MagSafe?", options: ["Yes", "No"] },
  { question: "Do you want a phone under $1000?", options: ["Yes", "No"] },
  { question: "Do you need the action button?", options: ["Yes", "No", "Doesn't Matter"] },
  { question: "Do you want the camera control button?", options: ["Yes", "No", "Doesn't Matter"] },
  { question: "Do you want the ultra-wide camera?", options: ["Yes", "No", "Doesn't Matter"] },
  { question: "Do you want an optical zoom camera?", options: ["Yes", "No", "Doesn't Matter"] },
  { question: "Do you want the Dynamic Island?", options: ["Yes", "No", "Doesn't Matter"] },
  { question: "Do you want 120Hz refresh/ProMotion?", options: ["Yes", "No", "Doesn't Matter"] },
  { question: "Do you want the ability to shoot Log/ProRAW photos?", options: ["Yes", "No", "Doesn't Matter"] },
  { question: "What is the minimum amount of storage you need?", options: ["64GB", "128GB", "256GB", "512GB", "1TB"] },
  { question: "What size of phone do you prefer?", options: ["Mini", "Regular", "Plus/Max"] },
  { question: "Do you want Apple Intelligence features?", options: ["Yes", "No", "Doesn't Matter"] },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  useEffect(() => {}, [currentQuestion]);

  const handleAnswer = (answer) => {
    const updatedAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(updatedAnswers);
    sessionStorage.setItem('quizAnswers', JSON.stringify(updatedAnswers));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="quiz-container w-full flex flex-col justify-center items-center py-10">
      <h2 className="text-2xl font-semibold mb-4 text-white">{questions[currentQuestion].question}</h2>
      <div className="options mb-4">
        {questions[currentQuestion].options.map((option) => (
          <button key={option} onClick={() => {
            handleAnswer(option);
            if (currentQuestion < questions.length - 1) {
              handleNext();
            }
          }} className="btn bg-gray-700 text-white m-2">
            {option}
          </button>
        ))}
      </div>
      <div className={`navigation mt-4 ${currentQuestion === questions.length - 1 ? 'flex justify-between' : 'flex justify-center'} w-full`}>
        <button onClick={handlePrevious} disabled={currentQuestion === 0} className="btn bg-gray-700 text-white m-2">
          Previous
        </button>
        {currentQuestion === questions.length - 1 && (
          <button className={`btn m-2 ${answers[currentQuestion] ? 'bg-blue-700 text-white' : 'bg-gray-500 text-gray-400'}`} disabled={!answers[currentQuestion]}>
            Get iPhone Recommendation
          </button>
        )}
      </div>
      {/* Removed progress bar */}
    </div>
  );
};

export default Quiz;
