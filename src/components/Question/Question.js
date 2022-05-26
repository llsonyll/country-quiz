import { useState, useEffect } from "react";
import "./Question.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-solid-svg-icons";

// components
import Option from "../Option/Option";
import Button from "../Button/Button";
import Spinner from "../Loading/Loading";

// actions - REDUX
import {
  increaseScore,
  buildQuestion,
  decreaseLive,
  toggleType,
} from "../../actions";

import { connect } from "react-redux";

const Question = ({
  question,
  typeQuestion,
  createQuestion,
  toggleQuestionType,
  correctAnswer,
  wrongAnswer,
  lives,
}) => {
  const [selected, setSelected] = useState("");
  const [answerCommited, setAnswerCommited] = useState(false);
  const selectOption = (statement) => {
    setSelected(statement);
    setAnswerCommited(true);
    if (statement === question.answer) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  };

  const goNext = () => {
    setSelected("");
    setAnswerCommited(false);
    toggleQuestionType();
    createQuestion();
  };

  useEffect(() => {
    createQuestion();
  }, [createQuestion]);

  return (
    <div className="Content">
      {question ? (
        <div className="question">
          {typeQuestion ? (
            <img className="flag" src={question.flag} alt="countryFlag" />
          ) : null}
          <div className="statement">{question.statement}</div>
          {question.alternatives ? (
            question.alternatives.map((opt, index) => {
              const isTheAnswer = question.answer === opt;
              return (
                <Option
                  identifier={index + 1}
                  statement={opt}
                  select={selectOption}
                  selected={selected === opt}
                  answerCommited={answerCommited}
                  isTheAnswer={isTheAnswer}
                  key={index}
                />
              );
            })
          ) : (
            <Spinner />
          )}

          <div className="footer">
            <span className="lives">
              Lives
              <FontAwesomeIcon className="icon" icon={faHeart} color="red" />
              {lives}
            </span>
            <Button
              label={selected === question.answer ? "Next" : "Try again"}
              action={goNext}
              show={answerCommited}
            />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  typeQuestion: state.flagQuestion,
  question: state.question,
  lives: state.lives,
});
const mapDispatchToProps = (dispatch) => ({
  correctAnswer: () => dispatch(increaseScore()),
  wrongAnswer: () => dispatch(decreaseLive()),
  createQuestion: () => dispatch(buildQuestion()),
  toggleQuestionType: () => dispatch(toggleType()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
