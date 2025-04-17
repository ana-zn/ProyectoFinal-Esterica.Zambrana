import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/navbar'; 

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<p>Estamos en root</p>} />
        <Route path="/home" element={<p>Estamos en home</p>} />
        <Route path="*" element={<p>404 ROUTE NOT FOUND</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

