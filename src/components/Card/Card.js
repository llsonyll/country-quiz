import "./Card.css";
import cardImg from "../../assets/undraw_adventure_4hum.svg";

// Components
import Question from "../Question/Question";
import { useState } from "react";
import GameOver from "../GameOver/GameOver";

const Card = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const toggleIsPlaying = () => setIsPlaying(!isPlaying);

  const options = [
    {
      identifier: "A",
      statement: "Vietnam",
    },
    {
      identifier: "B",
      statement: "Austria",
    },
    {
      identifier: "C",
      statement: "Sweden",
    },
    {
      identifier: "D",
      statement: "Malaysia",
    },
  ];

  return (
    <div className="card">
      <div className="name"> COUNTRY QUIZ </div>
      {isPlaying ? <img className="image" src={cardImg} alt="cardImg" /> : null}
      <div className="content">
        {isPlaying ? (
          <Question
            options={options}
            answer={options[0].statement}
            typeQuestion={true}
            statement="Kuala Lumpur is the capital of"
          />
        ) : (
          <GameOver />
        )}
      </div>
    </div>
  );
};

export default Card;
