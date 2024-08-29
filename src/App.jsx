import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartePage from './pages/CartePage';
import APropos from './pages/APropos';
import Reserver from './pages/Reserver';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CartePage" element={<CartePage />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/Reserver" element={<Reserver />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;