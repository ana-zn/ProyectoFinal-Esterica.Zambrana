
import './App.css';
import ItemListContainer from './components/itemlist-container/ItemListContainer';
import NavBar from './components/navbar/Navbar';
import ItemDetail from './components/ItemDetail/ItemDetail';
// import Contador from './components/Contador/contador';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './context/context';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
function App() {
  return ( 
     <>  
     <ContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/products/:categoria" element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetail />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="*" element={<p>404 ROUTE NOT FOUND</p>} />
          </Routes>

    
        </BrowserRouter> 
    </ContextProvider>
    
     </>
  );
}

export default App;
