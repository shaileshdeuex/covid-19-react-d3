import logo from "./logo.svg";
import "./App.css";
import json from "./covid_data.json";

for (const key in json) {
  if (Object.hasOwnProperty.call(json, key)) {
    const element = json[key];
    console.log(element);
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
