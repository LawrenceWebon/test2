import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='text-center'><h3>This is a header</h3></div>
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
      <div className='text-center'><h3>This is a footer</h3></div>
    </div>
  );
}

export default App;
