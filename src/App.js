import './App.css';
import Zyms from './components/Zyms/Zyms';
import Info from './components/Info/Info';

function App() {
  return (
    <div className="App">
      <div className="activity-container">
        <div className="zym-items-container">
          <Zyms></Zyms>
        </div>
        <div className="time-calculation-container">
          <Info></Info>
        </div>
      </div>
    </div>
  );
}

export default App;
