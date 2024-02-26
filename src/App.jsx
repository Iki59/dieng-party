import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Detail } from "./pages/Details/Detail";
import { Gallerys } from "./pages/Details/Gallerys";
import { HomePage } from "./pages/Home/Index";
import { ListVilla } from "./pages/ListVilla/ListVilla";
import { IniNavbar } from "./components/Navbar/iniNavbar";

function App() {
  return (
    <BrowserRouter>
      <IniNavbar />
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
