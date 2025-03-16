
import './App.css'
import NavBar from './components/navbar/navbar'; 
import Banner from './components/bannerhero/banner'; 
import ItemListContainer from './components/itemlist-container/ItemListContainer';
import Contador from './components/contador/contador';
function App() {
  return (
    <>
        <NavBar />
        <Banner />
        <ItemListContainer/>
        <Contador/>
    </>
); 
}

export default App
