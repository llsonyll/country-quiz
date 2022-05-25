import "./Card.css";
import cardImg from "../../assets/undraw_adventure_4hum.svg";

// Components
import Question from "../Question/Question";

const Card = () => {
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
      <img className="image" src={cardImg} alt="cardImg" />
      <div className="content">
        <Question
          options={options}
          answer={options[0].statement}
          statement="Kuala Lumpur is the capital of"
        />
      </div>
    </div>
  );
};

export default Card;
