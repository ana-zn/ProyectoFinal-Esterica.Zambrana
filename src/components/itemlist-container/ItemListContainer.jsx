import { useEffect, useState } from 'react';
import Item from '../item/Item';
import fetchData from '../../fetchData';
import Loader from '../Loader/Loader'; 
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemListContainer.css';

function ItemListContainer({ greetings }) {
    const [todosLosProductos, setTodosLosProductos] = useState([]);
    const [misProductos, setMisProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [detalleFiltrado, setDetalleFiltrado] = useState(false);

    const usarFiltro = (filtro, id) => {
      switch (filtro) {
        case "Ninguno":
          setDetalleFiltrado(false);
          setMisProductos([]);
          break;
        case "Todos":
          setDetalleFiltrado(false);
          setMisProductos(todosLosProductos);
          break;
        case "Labiales":
          setDetalleFiltrado(false);
          setMisProductos(todosLosProductos.filter(producto => producto.categoria === "Labiales"));
          break;
        case "Bases":
          setDetalleFiltrado(false);
          setMisProductos(todosLosProductos.filter(producto => producto.categoria === "Bases"));
          break;
        case "Detalle":
          setDetalleFiltrado(true);
          setMisProductos(todosLosProductos.filter(el => el.id === id));
          break;
        default:
          break;
      }
    };

    // Hook de efectos
    useEffect(() => {
      fetchData()
        .then(response => {
          setTodosLosProductos(response);
          setMisProductos(response);
          setLoading(false);
        })
        .catch(err => console.error(err));
    }, []);

    return (
      <> 
        {!detalleFiltrado && (
          <section className='container-filter'>
            <button onClick={() => usarFiltro("Todos")}>Todos</button>
            <button onClick={() => usarFiltro("Bases")}>Bases</button>
            <button onClick={() => usarFiltro("Labiales")}>Labiales</button>
            <button onClick={() => usarFiltro("Ninguno")}>Ninguno</button>
          </section>
        )}

        <section className='ItemListContainer'>
          {loading ? (
            <Loader />
          ) : detalleFiltrado ? (
            <ItemDetail item={misProductos[0]} usarFiltro={usarFiltro} />
          ) : (
            misProductos.map((el) => (
              <Item key={el.id} id={el.id} nombre={el.nombre} precio={el.precio} img ={el.img} usarFiltro={usarFiltro} />
            ))
          )}
        </section>
      </>
    ); 
}

export default ItemListContainer;
