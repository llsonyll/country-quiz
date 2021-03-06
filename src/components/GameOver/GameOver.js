import "./GameOver.css";

// Actions
import { restartGame } from "../../actions";

// Asset
import winnerImg from "../../assets/undraw_winners_ao2o.svg";
import Button from "../Button/Button";
import { connect } from "react-redux";

const GameOver = ({ points, restartGame }) => {
  const tryAgainBtn = () => {
    restartGame();
  };

  return (
    <div className="gameOver">
      <img className="winnerLogo" src={winnerImg} alt="winners" />
      <div className="title"> Results </div>
      <div className="description">
        You got <strong> {points} </strong> correct answers
      </div>
      <Button
        label="Try Again"
        action={tryAgainBtn}
        bgColor="#fff"
        textColor="#1e1e72"
        align="center"
        border
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { points: state.points };
};
const mapDispatchToProps = (dispatch) => {
  return { restartGame: () => dispatch(restartGame()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
