export const GET_COUNTRIES = "GET_COUNTRIES";
export const BUILD_QUESTION = "BUILD_QUESTION";
export const SELECT_OPTION = "SELECT_OPTION";
export const RESTART_GAME = "RESTART_GAME";
export const INCREASE_SCORE = "INCREASE_SCORE";
export const DECREASE_LIVE = "DECREASE_LIVE";

export const getAllCountries = () => {
  return async function (dispatch) {
    return fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((json) => dispatch({ type: GET_COUNTRIES, payload: json }));
  };
};

export const getRegionCountries = (region) => {
  return async function (dispatch) {
    return fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => response.json())
      .then((json) => dispatch({ type: GET_COUNTRIES, payload: json }));
  };
};

export const buildQuestion = () => {
  return { type: BUILD_QUESTION };
};

export const restartGame = () => {
  return { type: RESTART_GAME };
};

export const increaseScore = () => {
  return { type: INCREASE_SCORE };
};

export const decreaseLive = () => {
  return { type: DECREASE_LIVE };
};
