import logo from './logo.svg';
import './App.css';

const value = process.env.TEST_SECRET ?? "no TEST_SECRET";
const text = process.env.TEXT ?? "no TEXT";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Value : {value}<br/>
          Text : {text}
      </header>
    </div>
  );
}

export default App;
