import "./css/App.css";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import JustGrowDescription from "./components/JustGrowDescription.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <HomePage />
        <JustGrowDescription />
        <div className="about-us"></div>
        <div className="contact"></div>
        <div className="footer"></div>
      </div>
    </>
  );
}

export default App;
