import "./Option.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";

const Option = ({
  identifier,
  statement,
  select,
  selected = false,
  isTheAnswer = false,
  answerCommited = false,
}) => {
  const selectOption = () => {
    select(identifier, statement);
  };

  const selectedColor = {
    backgroundColor: "orange",
    border: "orange",
    color: "#fff",
  };

  const correctOption = {
    backgroundColor: "#83c56b",
    border: "#83c56b",
    color: "#fff",
  };

  const wrongOption = {
    backgroundColor: "#fd5656",
    border: "#fd5656",
    color: "#fff",
  };

  return (
    <div
      className="option"
      style={
        answerCommited && selected && isTheAnswer
          ? correctOption
          : answerCommited && selected && !isTheAnswer
          ? wrongOption
          : selected && !answerCommited
          ? selectedColor
          : null
      }
      onClick={selectOption}
    >
      <div className="label">
        <div className="identifier"> {identifier} </div>
        <div className="statementOption"> {statement} </div>
      </div>
      <FontAwesomeIcon
        className="icon"
        icon={isTheAnswer ? faCheckCircle : faXmarkCircle}
        color="white"
      />
    </div>
  );
};

export default Option;
