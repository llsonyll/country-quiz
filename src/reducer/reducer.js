import { capitalQuestion, flagQuestion } from "../types/question";

import {
  GET_COUNTRIES,
  SELECT_OPTION,
  BUILD_QUESTION,
  RESTART_GAME,
  INCREASE_SCORE,
} from "../actions";

const initialState = {
  points: 0,
  flagQuestion: true,
  countries: [],
  quizAlternatives: [],
  quizAnswer: {},
  quizSelection: {},
  question: {},
  playing: true,
};

const alternativesQty = 4;

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
      const randomOptions = [];
      const randomAnswer = Math.floor(Math.random() * alternativesQty); // 0 - 3
      for (let i = 0; i < alternativesQty; i++) {
        const randomIndex =
          Math.floor(Math.random() * (state.countries.length - 1)) + 1;
        randomOptions.push(state.countries[randomIndex]);
      }

      const question = {
        alternatives: randomOptions.map((option) => {
          return option.name;
        }),
        type: state.flagQuestion ? flagQuestion : capitalQuestion,
        answer: state.flagQuestion
          ? randomOptions[randomAnswer].name
          : randomOptions[randomAnswer].capital[0],
        flag: randomOptions[randomAnswer].flag,
        statement: state.flagQuestion
          ? "Which country does this flag belong to"
          : `${randomOptions[randomAnswer].capital[0]} is the capital of`,
      };

      return {
        ...state,
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
        playing: true,
      };
    case INCREASE_SCORE:
      return {
        ...state,
        points: state.points++,
      };
    default:
      return state;
  }
}
