import "./App.css";

// Components
import Card from "./components/Card/Card";

// Assets
import backgroundQuiz from "./assets/background_quiz.png";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundQuiz})`,
    backgroundSize: "cover",
  };

  return (
    <div className="App" style={backgroundStyle}>
      <Card />
    </div>
  );
}

export default App;
