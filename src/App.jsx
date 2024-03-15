import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Detail } from './pages/Details/Detail';
import { Gallerys } from './pages/Details/Gallerys';
import { HomePage } from './pages/home/Index';
import { ListVilla } from './pages/ListVilla/ListVilla';
import { useEffect, useState } from 'react';
// import { IniNavbar } from "./components/Navbar/iniNavbar";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('../data-villa.json');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log('ini data', data);
  return (
    <BrowserRouter>
      {/* <IniNavbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/villa-list" element={<ListVilla />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/gallery/:id" element={<Gallerys />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
