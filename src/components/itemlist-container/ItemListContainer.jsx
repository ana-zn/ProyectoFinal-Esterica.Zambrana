import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";

import Item from "../item/Item";
import Loader from "../Loader/Loader";
import "./ItemListContainer.css";

function ItemListContainer() {
  const [misProductos, setMisProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [carrito, setCarrito] = useState([]);

  const { categoria } = useParams();

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  useEffect(() => {
    setLoading(true);
    const obtenerProductos = async () => {
      try {
        const refCollection = collection(db, "products");

        // Si hay categoría, filtramos
        const consulta = categoria
          ? query(refCollection, where("categoria", "==", categoria))
          : refCollection;

        const response = await getDocs(consulta);

        const productos = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setMisProductos(productos);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, [categoria]);

  return (
    <section className="ItemListContainer">
      {loading ? (
        <Loader />
      ) : (
        misProductos.map((el) => (
          <Item
            key={el.id}
            id={el.id}
            nombre={el.nombre}
            precio={el.precio}
            img={el.img}
            agregarAlCarrito={agregarAlCarrito}
            producto={el}
          />
        ))
      )}
    </section>
  );
}

export default ItemListContainer;
