import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carte from './pages/Carte';
import APropos from './pages/APropos';
import Reserver from './pages/Reserver';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Carte" element={<Carte />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/Reserver" element={<Reserver />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;