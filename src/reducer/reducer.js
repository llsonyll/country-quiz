import { capitalQuestion, flagQuestion } from "../types/question";

import {
  GET_COUNTRIES,
  SELECT_OPTION,
  BUILD_QUESTION,
  RESTART_GAME,
  INCREASE_SCORE,
  DECREASE_LIVE,
} from "../actions";

const initialState = {
  points: 0,
  flagQuestion: true,
  countries: [],
  question: {},
  lives: 3,
};

const alternativesQty = 4;

const flagStatement = "Which country does this flag belongs to?";
const capitalStatement = (capital) => `${capital} is the capital of`;

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload.map((country) => {
          return {
            id: country.cca2,
            name: country.name.common,
            capital: country.capital,
            flag: country.flags.png ?? country.flags.svg,
          };
        }),
      };
    case BUILD_QUESTION:
      const options = [];
      const answer = Math.floor(Math.random() * alternativesQty); // 0 - 3
      for (let i = 0; i < alternativesQty; i++) {
        const randomCountry =
          Math.floor(Math.random() * (state.countries.length - 1)) + 1;
        options.push(state.countries[randomCountry]);
      }

      const optionAnswer = options[answer];

      const question = {
        alternatives: options.map((option) => {
          return option.name;
        }),
        type: state.flagQuestion ? flagQuestion : capitalQuestion,
        answer: state.flagQuestion
          ? optionAnswer.name
          : optionAnswer.capital[0],
        flag: optionAnswer.flag,
        statement: state.flagQuestion
          ? flagStatement
          : capitalStatement(optionAnswer.capital[0]),
      };

      return {
        ...state,
        countries: state.countries.filter(
          (country) => country.id !== optionAnswer.id
        ),
        question: question,
      };
    case SELECT_OPTION:
      return {
        ...state,
        quizSelection: {},
      };
    case RESTART_GAME:
      return {
        ...state,
        points: 0,
        quizSelection: {},
        quizAnswer: {},
        lives: 3,
      };
    case INCREASE_SCORE:
      return {
        ...state,
        points: state.points + 1,
      };
    case DECREASE_LIVE:
      return {
        ...state,
        lives: state.lives - 1,
      };
    default:
      return state;
  }
}
