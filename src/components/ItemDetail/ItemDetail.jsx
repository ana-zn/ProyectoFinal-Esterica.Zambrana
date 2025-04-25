import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { useAppContext } from "../../context/context";
import Contador from "../Contador/contador";
import Loader from "../Loader/Loader";
import "./ItemDetail.css";
import { db } from "../../firebaseconfig";

function ItemDetail() {
  const [detalle, setDetalle] = useState(null);
  const { id } = useParams();
  const { agregarAlCarrito, contador } = useAppContext();

  useEffect(() => {
    const refCollection = collection(db, "products");
    const refDoc = doc(refCollection, id);


    getDoc(refDoc)
    .then((res) => {
        if (res.exists()) {
          console.log("Producto encontrado:", res.data());
          setDetalle({ id: res.id, ...res.data() });
        } else {
          console.warn("No se encontró el producto con ese ID en Firestore");
        }
      })
      .catch((err) => console.error("Error al traer el producto:", err));
  }, [id]);

  if (!detalle) return <Loader />;

  return (
    <div className="card-detail">
      <img src={detalle.img || "imagen_por_defecto.jpg"}  className="item-image" />
      <div className='item-description'>
        <div className='info-detail'>
          <h2>{detalle.nombre}</h2>
          <h3 className='price'>Precio: ${detalle.precio}</h3>
        </div>
        <p className='description'>Descripción: {detalle.descripcion}</p>
        <div className='add-detail'>
          {detalle.oferta && <p className='ofert-product'><b>PRODUCTO EN OFERTA</b></p>}
          <p className='span-description'>
            {detalle.stock > 0 ? `Quedan ${detalle.stock} unidades` : "Producto agotado!"}
          </p>
        </div>
        <Contador stock={detalle.stock} />
        <div className='buttons-container'>
          <button disabled={detalle.stock === 0} className="card-btn"
            onClick={() => agregarAlCarrito({ id: detalle.id, nombre: detalle.title, precio: detalle.price, cantidad: contador })}>
            Agregar al carrito
          </button>
          <Link to="/products"><button className="card-btn">Volver a productos</button></Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
