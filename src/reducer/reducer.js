import {
  GET_COUNTRIES,
  SELECT_OPTION,
  BUILD_QUESTION,
  RESTART_GAME,
  INCREASE_SCORE,
} from "../actions";

const initialState = {
  points: 0,
  countries: [],
  quizAlternatives: [],
  quizAnswer: {},
  quizSelection: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case BUILD_QUESTION:
      return {
        ...state,
        quizAlternatives: [],
        quizAnswer: {},
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
