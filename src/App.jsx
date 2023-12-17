import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import ListVilla from "./pages/ListVilla/ListVilla";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/villa-list" element={<ListVilla />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
