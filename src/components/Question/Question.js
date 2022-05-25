import { useState } from "react";
import "./Question.css";

import Option from "../Option/Option";
import Button from "../Button/Button";

// Question types: Flag-country (true) || Capital-country (false)
// Question flags.png flags.svg

const Question = ({ options, answer, statement, typeQuestion }) => {
  const [selected, setSelected] = useState({});
  const [answerCommited, setAnswerCommited] = useState(false);
  const selectOption = (identifier, statement) => {
    // if (answerCommited) return;
    setSelected({ identifier, statement });
    setAnswerCommited(true);
  };

  const goNext = () => {
    console.log("next");
  };

  return (
    <div className="question">
      {typeQuestion ? (
        <img
          className="flag"
          src="https://flagcdn.com/w320/do.png"
          alt="countryFlag"
        />
      ) : null}
      <div className="statement"> {statement} </div>
      {options ? (
        options.map((opt) => {
          return (
            <Option
              identifier={opt.identifier}
              statement={opt.statement}
              select={selectOption}
              selected={selected.statement === opt.statement}
              answerCommited={answerCommited}
              isTheAnswer={answer === opt.statement}
              key={opt.identifier}
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
  );
};

export default Question;
