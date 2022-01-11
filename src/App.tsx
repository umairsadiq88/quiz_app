import React { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import styled from "styled-components";

const App = () => {
   const [loading, setLoading] = useState(0);    

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div>
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions ....</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        {" "}
      </button>{" "}
    </div>
  );
};

export default App;
