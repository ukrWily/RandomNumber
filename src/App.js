import "./App.css";
import RandomNumber from "./components/RandomNumber";

function App() {
  return (
    <div className="App">
      <RandomNumber maxNum={100} />
      <RandomNumber maxNum={1000} />
      <RandomNumber maxNum={10000} />
    </div>
  );
}

export default App;
