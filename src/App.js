import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Zyms from './components/Zyms/Zyms';

function App() {
  return (
    <div className="App">
      <div className="activity-container">
        <div className="zym-items-container">
          <Zyms></Zyms>
        </div>
        <div className="time-calculation-container">
          <h2>i am not alone </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
