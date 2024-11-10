import logo from './logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <p>
          Szerkeszd az <code>src/App.js</code> fájlt és mentsd el az újratöltéshez!
        </p>
        <a
          className="App-link"
          href="https://legacy.reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tanulj React-ot!
        </a>
      </header>
    </div>
  );
}

export default App;
