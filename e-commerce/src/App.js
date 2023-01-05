
import './App.css';
import { Button } from 'react-bootstrap';
import MainMenu from './components/MainMenu';
import Top from './components/Top';


function App() {
  return (
    <div className="App">
      <div className='Header'>
        <Top />

      </div>

      <div className='menu-Container'>
        <MainMenu />
      </div>

    </div>
  );
}

export default App;
