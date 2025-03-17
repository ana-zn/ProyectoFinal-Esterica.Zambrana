import PropTypes from 'prop-types';
import './Item.css';
// import { LuHeart } from "react-icons/lu";

function Item({ id, nombre, precio, img, usarFiltro }) {
    function agregarAlCarrito() {
        console.log("Compraste", { id, nombre, precio });
    } 

    return (
      <div className='item'>
        <div className='item-description'>
            <p className='description'>
                {nombre || "No Disponible"}
            </p>
            <span className='price'>
                ${precio !== undefined ? precio : "No Disponible"}
            </span>
        </div>
        <img src={img || "imagen_por_defecto.jpg"} alt={nombre || "Producto"} className='item-image' />
        <div className='buttons-container'>
            <button disabled={!nombre} className="card-btn" onClick={agregarAlCarrito}>Agregar al carrito</button>
            <button disabled={!nombre} className="card-btn" onClick={() => usarFiltro("Detalle", id)}>Ver detalle</button>
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
    usarFiltro: PropTypes.func.isRequired
};

export default Item;
