import { useState } from 'react';
import { useAppContext } from '../../context/context';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebaseconfig';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';

function Checkout() {
    const navigate = useNavigate();
    const { carrito, limpiarCarrito } = useAppContext();

    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        telefono: "",
    });

    const [orderId, setOrderId] = useState(null);

    const modificarInput = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const crearOrden = async (e) => {
        e.preventDefault();
        const ordersCollection = collection(db, "orders");

        const order = {
            buyer: formData,
            items: carrito,
            total: carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0),
            date: new Date()
        };

        try {
            const res = await addDoc(ordersCollection, order);

            const productsCollection = collection(db, "products");
            for (const product of order.items) {
                const refDoc = doc(productsCollection, product.id);
                await updateDoc(refDoc, { stock: product.stock - product.cantidad });
            }

            setOrderId(res.id);
            console.log("Orden guardada con ID:", res.id);
            limpiarCarrito();
            setFormData({ nombre: "", correo: "", telefono: "" });
        } catch (error) {
            console.error("Error al guardar la orden", error);
        }
    };

    return (
        <div className='form-container'>
            <h2>Datos Personales</h2>
            {orderId ? (
                <div>
                    <h2>Gracias por tu compra</h2>
                    <p>Tu número de orden es: <strong>{orderId}</strong></p>
                </div>
            ) : (
                <form onSubmit={crearOrden}>
                    <input type="text" placeholder='Nombre' name="nombre" value={formData.nombre} onChange={modificarInput} />
                    <input type="text" placeholder='Correo' name="correo" value={formData.correo} onChange={modificarInput} />
                    <input type="text" placeholder='Teléfono' name="telefono" value={formData.telefono} onChange={modificarInput} />
                    <input className= "btn-end" type="submit" value="Enviar" />
                </form>
            )}
        </div>
    );
}

export default Checkout;
