import './assets/css/App.css';
import './fonts/DS-DIGII.TTF';
import { NavBar, WeatherPanel } from './components';

function App() {
  return (
    <div className="App">
      <NavBar />
      <WeatherPanel />
    </div>
  );
}

export default App;
