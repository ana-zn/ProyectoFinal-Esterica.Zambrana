import PropTypes from 'prop-types';
import './Item.css'
import { LuHeart } from "react-icons/lu";

function Item(props) {
    function agregarAlCarrito() {
        console.log("Compraste", props);
    } 

    return (
      <div className='item'>
        <div className='item-description'>
            <p className='description'>
                {props.nombre || "No Disponible"}
            </p>
            <span className='price'>
                ${props.price || "No Disponible"}
            </span>
        </div>
        <img src={props.src || "imagen_por_defecto.jpg"} alt={props.nombre || "Producto"} className='item-image' />
        <div className='item-buttons'>
            <button id='add-button' onClick={agregarAlCarrito}>Agregar al Carrito</button>
            <button id='heart-button'><LuHeart /></button>
        </div>
      </div>
    ); 
}

Item.propTypes = {
    nombre: PropTypes.string,
    price: PropTypes.number,
    src: PropTypes.string
};

export default Item;
