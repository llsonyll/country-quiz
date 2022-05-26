import cardImg from "../../assets/undraw_adventure_4hum.svg";
import "./Card.css";

// Components
import Question from "../Question/Question";
import GameOver from "../GameOver/GameOver";

// Actions
import { connect } from "react-redux";

const Card = ({ lives }) => {
  return (
    <div className="card">
      <div className="name"> COUNTRY QUIZ </div>
      {lives > 0 ? <img className="image" src={cardImg} alt="cardImg" /> : null}
      <div className="content">{lives > 0 ? <Question /> : <GameOver />}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lives: state.lives,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
