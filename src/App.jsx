
import './App.css';
import ItemListContainer from './components/itemlist-container/ItemListContainer';
import NavBar from './components/navbar/Navbar';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Banner from './components/bannerhero/banner';
// import Contador from './components/Contador/contador';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>  
      <NavBar />

        <Routes>
          <Route path='/banner' element={<Banner/>} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetail />} /> 
          <Route path="*" element={<p>404 ROUTE NOT FOUND</p>} /> 
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
