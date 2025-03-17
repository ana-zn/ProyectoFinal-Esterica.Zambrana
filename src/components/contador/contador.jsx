import { useState } from "react";
import "./contador.css";

function Contador() {
    //Hook de estado o useState: los hook son funciones de React para facilitar funcionalidades.
    //Const estado = useState() nos devuelve un array En la primera posición (0) me devuelve el estado. En la Segunda posición me da la función "Setter". Es decir, la función que va a modificar el estado 

    //Const [nombreDelEstado, setNombreDelEstado] = useState (estadoInicial) //useState genérico. 

    // const estado = useState(58); 

    // const numero = estado[0]; 
    // const cambiarNumero = estado[1]; 

    
    const [numero, cambiarNumero] = useState(5); 

    const modificarNumero = (operacion) => {
        if (operacion === "+") {
           cambiarNumero(numero + 1)
        } else {
            cambiarNumero(numero - 1)
        }
    };
    // console.log(estado)

    return (
        <section className="contador">
            <h2>Contador</h2>
            <div className="buttons-container">
                <button className= 'button-items' onClick={() => modificarNumero("-")}>-</button>
                <p id="numero">{numero}</p>
                <button className= 'button-items'  onClick={() => modificarNumero("+")}>+</button>
            </div>
        </section>
    );
}

export default Contador;
