import "./css/App.css";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <HomePage />
        <div className="just-grow"></div>
        <div className="about-us"></div>
        <div className="contact"></div>
        <div className="footer"></div>
      </div>
    </>
  );
}

export default App;
