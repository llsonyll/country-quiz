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
    select(statement);
  };

  const selectedStyle = {
    backgroundColor: "orange",
    border: "orange",
    color: "#fff",
  };

  const correctStyle = {
    backgroundColor: "#83c56b",
    border: "#83c56b",
    color: "#fff",
  };

  const wrongStyle = {
    backgroundColor: "#fd5656",
    border: "#fd5656",
    color: "#fff",
  };

  return (
    <div
      className="option"
      style={
        answerCommited && isTheAnswer
          ? correctStyle
          : answerCommited && selected && !isTheAnswer
          ? wrongStyle
          : selected && !answerCommited
          ? selectedStyle
          : null
      }
      onClick={answerCommited ? null : selectOption}
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
