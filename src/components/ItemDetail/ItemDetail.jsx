import { useParams, Link } from 'react-router-dom';
import './ItemDetail.css'; 

import { useEffect, useState } from 'react';
import fetchData from '../../fetchData';
import Loader from '../Loader/Loader';

function ItemDetail() {
    const { id } = useParams(); 
    const [detalle, setDetalle] = useState(null);

    function agregarAlCarrito() {
        console.log("Vas a agregar:", detalle?.nombre);
    };

    useEffect(() => {
        fetchData()
            .then(response => {
                const detalleDelProducto = response.find(el => el.id === parseInt(id));
                setDetalle(detalleDelProducto);
            })
            .catch(err => console.error(err));
    }, [id]); 

    return (
        !detalle ? <Loader /> :
        <div className="card-detail">
            <img src={detalle.img || "imagen_por_defecto.jpg"} alt={detalle?.nombre || "Imagen del producto"} className="item-image" />
            <div className='item-description'>
                <div className='info-detail'>
                    <h2 >{detalle?.nombre || "NO DISPONIBLE"}</h2>
                    <h3 className='price'>Precio: ${detalle?.precio || "SIN PRECIO"}</h3>
                </div>
            
                <p className='description'>Descripción: {detalle?.descripcion}</p>
                <div className='add-detail'>
                {
                    detalle.oferta && <p className='ofert-product'><b>PRODUCTO EN OFERTA</b></p>
                }
                {
                    detalle.stock > 0 ?
                    <p className='span-description '>Quedan {detalle.stock} unidades</p> :
                    <p className='span-description '>Producto agotado!</p>
                }
               
                </div>
                
              
                <div className='buttons-container'>
                    <button disabled={detalle.stock === 0} className="card-btn" onClick={() => agregarAlCarrito()}> Agregar al carrito </button>
                    <Link to="/"><button className="card-btn">Volver al inicio</button></Link>            
                </div>
                

            </div>
         
        </div>
    );
};

export default ItemDetail;
