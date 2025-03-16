import { useEffect, useState } from 'react';
import Item from '../item/Item';
import fetchData from '../../fetchData';
import Loader from '../Loader/Loader'; 
import './ItemListContainer.css';


function ItemListContainer({ greetings }) {
    const [todosLosProductos, setTodosLosProductos] = useState([]);
    const [misProductos, setMisProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const usarfiltro = (filtro) => {
      switch (filtro) {
        case "Ninguno":
          setMisProductos([]);
        break;
        case "Todos":
          setMisProductos(todosLosProductos);
          break;
        case "Labiales":
          setMisProductos(todosLosProductos.filter(producto => producto.categoria === "Labiales"));
          break;
        case "Bases":
          setMisProductos(todosLosProductos.filter(producto => producto.categoria === "Bases"));
          break;
        default:
          break;
      }
    };
   

    // Hook de efectos: 
    useEffect(() => {
      fetchData().then(response => {
          setTodosLosProductos(response);
          setMisProductos(response);
          setLoading(false);
      })
      .catch(err => console.error(err));
    }, []);

    return (
      <> 
        <h1>{greetings}</h1>
        <section className='container-filter'>
          <button onClick={() => usarfiltro("Todos")}>Todos</button>
          <button onClick={() => usarfiltro("Bases")}>Bases</button>
          <button onClick={() => usarfiltro("Labiales")}>Labiales</button>
          <button onClick={() => usarfiltro("Ninguno")}>Ninguno</button>
        </section>

        <section className='ItemListContainer'>
          {
            loading ? <Loader/>:
            misProductos.map((el,index) => {
              return (
                <Item key = {index}  nombre={el.nombre} precio={el.precio} img = {el.img} />
              )
            })
          }
                
        </section>
      </>
    ); 
}

export default ItemListContainer;
