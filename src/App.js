import "./App.css";

// actions
import { getAllCountries } from "./actions";

// Components
import Card from "./components/Card/Card";
import Spinner from "./components/Loading/Loading";

// Assets
import backgroundQuiz from "./assets/background_quiz.png";
import { connect } from "react-redux";
import { useEffect } from "react";

function App({ getCountries, emptyCountries }) {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundQuiz})`,
    backgroundSize: "cover",
  };

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  return (
    <div className="App" style={backgroundStyle}>
      {emptyCountries ? <Card /> : <Spinner />}
      <a
        className="author"
        href="https://github.com/llsonyll"
        target="_blank"
        rel="noreferrer"
      >
        By: Josep Rojas
      </a>
    </div>
  );
}

const mapStateToProps = (state) => ({
  emptyCountries: state.countries.length > 0,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCountries: () => dispatch(getAllCountries()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
