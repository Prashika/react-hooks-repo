import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/first-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome!
        </p>
        <FirstComponent />
      </header>
    </div>
  );
}

export default App;
