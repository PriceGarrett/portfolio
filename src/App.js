import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <div className="background">
    <Navbar/>
    <div>
      <Outlet/>
    </div>
    </div>
  );
}

export default App;
