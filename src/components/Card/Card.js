import cardImg from "../../assets/undraw_adventure_4hum.svg";
import "./Card.css";

// Components
import Question from "../Question/Question";
import GameOver from "../GameOver/GameOver";

// Actions
import { connect } from "react-redux";

const Card = ({ playing }) => {
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
      {playing ? <img className="image" src={cardImg} alt="cardImg" /> : null}
      <div className="content">
        {playing ? (
          <Question
            options={options}
            answer={options[0].statement}
            statement="Kuala Lumpur is the capital of"
          />
        ) : (
          <GameOver />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
