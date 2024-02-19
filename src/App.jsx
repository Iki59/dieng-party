import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Detail } from './pages/Details/Detail';
import HomePage from './pages/home/Index';
import ListVilla from './pages/ListVilla/ListVilla';
import { IniNavbar } from './components/Navbar/iniNavbar';

function App() {
  return (
    <BrowserRouter>
      <IniNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/villa-list" element={<ListVilla />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
