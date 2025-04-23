import { useEffect, useState } from 'react';
import fetchData from '../../fetchData';
import Item from '../item/Item';
import Loader from '../Loader/Loader'; 
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

function ItemListContainer() {

    const [todosLosProductos, setTodosLosProductos] = useState([]);
    const [misProductos, setMisProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [detalleFiltrado, setDetalleFiltrado] = useState(false);

    const [carrito, setCarrito] = useState([]);

    const { categoria } = useParams(); 

    const agregarAlCarrito = (producto) =>{
      setCarrito([...carrito, producto]); 
    }

    useEffect(() => {
        if(todosLosProductos.length === 0){
          fetchData().then(response => {
            setTodosLosProductos(response); 
            if (categoria) {
              const productosFiltrados = response.filter(el => el.categoria === categoria); 
              setMisProductos(productosFiltrados); 
              setLoading(false);
            } else {
              setMisProductos(response)
              setLoading(false)
            }            
          })
          .catch(err => console.error(err));
        } else {
          if (categoria) {
              const productosFiltrados = todosLosProductos.filter(el => el.categoria === categoria);
              setMisProductos(productosFiltrados);
          } else {
              setMisProductos(todosLosProductos);
          };
      }
      
  }, [categoria]);
      
  return (
    <>
      <section className='ItemListContainer'>
        {loading ? (
          <Loader />
        ) : (
          misProductos.map((el, index) => (
            <Item key={index} id={el.id} nombre={el.nombre} precio={el.precio} img={el.img} agregarAlCarrito={agregarAlCarrito} producto={el}/>
          ))
        )}
        <button className='' onClick={() => console.log(carrito)}>Ver Carrito</button>
      </section>
    </>
  );
}

export default ItemListContainer;