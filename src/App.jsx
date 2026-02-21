import "./App.css";
import Article from "./components/Arcticle.jsx";

function App() {
  return (
    <div className="App">
      <Article name="Yoga" titles={["Reactjs", "NextJs", "NodeJs"]} />
      <Article name="Alifa" titles={["Html", "css", "javascript"]} />
    </div>
  );
}

export default App;
