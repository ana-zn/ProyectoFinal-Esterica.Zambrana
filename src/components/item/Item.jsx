import PropTypes from 'prop-types';
import './Item.css';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';
// import { LuHeart } from "react-icons/lu";

function Item({ id, nombre, precio, img}) {

    const {agregarAlCarrito} = useAppContext(); 
    return (
      <div className='item'>
        <div className='item-detail'>
            <p className='description'>
                {nombre || "No Disponible"}
            </p>
            <span className='price'>
                ${precio !== undefined ? precio : "No Disponible"}
            </span>
        </div>
        <img src={img || "imagen_por_defecto.jpg"} alt={nombre || "Producto"} className='item-image' />
        <div className='buttons-container'>
            <button disabled={!nombre} className="card-btn" onClick={() => agregarAlCarrito({id, nombre, precio, cantidad:1})}>Agregar al carrito</button>
            <Link to={`/detalle/${id}`}>  
                <button disabled={!nombre} className="card-btn">Ver detalle</button>
            </Link>
           
            {/* <button id='heart-button'><LuHeart /></button> */}
        </div>
      </div>
    ); 
}

Item.propTypes = {
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string,
    precio: PropTypes.number,
    img: PropTypes.string,
};


export default Item;