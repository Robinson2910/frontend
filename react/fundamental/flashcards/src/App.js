import { useState } from "react";

const questions = [
  {
    questionNo: 1,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    questionNo: 2,
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    questionNo: 3,
    question: "Who wrote the play 'Romeo and Juliet'?",
    answer: "William Shakespeare",
  },
  {
    questionNo: 4,
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
  },
  {
    questionNo: 5,
    question: "What is the chemical symbol for gold?",
    answer: "Au",
  },
  {
    questionNo: 6,
    question: "What is the national flower of Japan?",
    answer: "Cherry Blossom",
  },
];

export default function App() {
  return (
    <div className="app">
      {questions.map((el, i) => (
        <FlashCard
          question={el.question}
          key={el.questionNo}
          answer={el.answer}
          id={el.questionNo}
        />
      ))}
    </div>
  );
}

function FlashCard({ question, id, answer }) {
  let temp_id = id;
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  function handleFlashCard() {
    setSelectedQuestion((s) => {
      if (s !== temp_id) return temp_id;
      else return null;
    });
  }
  return (
    <div className="app-item" onClick={handleFlashCard}>
      <p>{selectedQuestion === id ? answer : question}</p>
    </div>
  );
}
