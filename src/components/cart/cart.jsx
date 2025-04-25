import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import './Cart.css';

function Cart() {

    const { carrito, eliminarProducto, limpiarCarrito } = useAppContext();

    return (
        <div className='cart-container'>
            {carrito.length > 0 ?
                <>
                    {carrito.map(el => {
                        return (
                            <div key={el.id} className='item-container'>
                                <div className='info-detail'> 
                                   <p>{el.nombre}</p>
                                   <p>${el.precio}</p> 
                                </div>
                                <p>Cantidad: {el.cantidad}</p>
                                <p>Subtotal: ${el.cantidad * el.precio}</p>
                                <button className="card-btn" onClick={() => eliminarProducto(el.id)}>Eliminar del carrito</button>
                            </div>
                        )
                    })}
                    <p className="total-price">Total: ${carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)}</p>
                    <hr></hr>
                    <div className="send-container">
                          <button className="card-btn" onClick={() => limpiarCarrito()} >Limpiar carrito</button>
                            <Link to="/checkout">
                                <button className="btn-end" >Finalizar compra</button>
                            </Link>
                    </div>
                  
                </>
                :
                <p>Carrito vacío</p>
            }
        </div >
    );
};

export default Cart;