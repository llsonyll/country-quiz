import { useState, useEffect } from "react";
import "./Question.css";

import Option from "../Option/Option";
import Button from "../Button/Button";

// actions - REDUX
import { increaseScore, buildQuestion } from "../../actions";
import { connect } from "react-redux";

import { capitalQuestion, flagQuestion } from "../../types/question";

const Question = ({
  options,
  answer,
  typeQuestion,
  createQuestion,
  question,
  countries,
}) => {
  const [selected, setSelected] = useState("");
  const [answerCommited, setAnswerCommited] = useState(false);
  const selectOption = (identifier, statement) => {
    console.log(question);
    console.log(typeQuestion);
    setSelected(statement);
    // setAnswerCommited(true);
  };

  const questionStament1 = "Which country does this flag belongs to?";
  const questionStament2 = `Dummy is the capital of`;

  const goNext = () => {
    console.log("next");
  };

  useEffect(() => {
    createQuestion();
  }, []);

  return (
    <div className="Content">
      {question ? (
        <div className="question">
          {typeQuestion ? (
            <img className="flag" src={question.flag} alt="countryFlag" />
          ) : null}
          <div className="statement">{question.statement}</div>
          {options ? (
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
            <div> Loading options </div>
          )}
          <Button
            label={selected.statement === answer ? "Next" : "Try again"}
            action={goNext}
            show={answerCommited}
          />
        </div>
      ) : (
        <div> Loading </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  reducerOptions: state.quizAlternatives,
  reducerAnswer: state.quizAnswer,
  typeQuestion: state.flagQuestion,
  question: state.question,
  countries: state.countries,
});
const mapDispatchToProps = (dispatch) => ({
  correctAnswer: () => dispatch(increaseScore()),
  createQuestion: () => dispatch(buildQuestion()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
