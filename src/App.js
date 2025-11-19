import page_image from './tl.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src = {page_image} className="App-logo" alt="logo" />
        <p>
          Hi, Create an account first
        </p>
        <div id='App-link'>
        <a
        className='App-Button'
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign-up
        </a>
        <a
        className='App-Button'
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
        </div>
      </header>
    </div>
  );
}

export default App;
