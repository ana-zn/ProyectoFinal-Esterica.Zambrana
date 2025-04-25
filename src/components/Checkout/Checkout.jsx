import { useState } from 'react';
import { useAppContext } from '../../context/context';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebaseconfig';
import { addDoc, collection } from 'firebase/firestore';

function Checkout() {
    const navigate = useNavigate();
    const { carrito, limpiarCarrito } = useAppContext();

    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        telefono: "",
    });

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
            await addDoc(ordersCollection, order);
            console.log("Orden guardada");
            limpiarCarrito();
            setFormData({ nombre: "", correo: "", telefono: "" });
            navigate("/");
        } catch (error) {
            console.error("Error al guardar la orden", error);
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <form onSubmit={crearOrden}>
                <input type="text" placeholder='Nombre' name="nombre" value={formData.nombre} onChange={modificarInput} />
                <input type="text" placeholder='Correo' name="correo" value={formData.correo} onChange={modificarInput} />
                <input type="text" placeholder='Teléfono' name="telefono" value={formData.telefono} onChange={modificarInput} />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default Checkout;
