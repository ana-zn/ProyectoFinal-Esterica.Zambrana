import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import './CartWidget.css'; 


import { LuShoppingBasket } from "react-icons/lu";

function NavBar() {
    const { carrito } = useAppContext(); 
    return(
        <Link to="/Cart">
            <div className=''>
                <p onClick={()=> console.log(carrito)}>({carrito.length})</p>
                <button className='button-navbar' id='shop-button'><LuShoppingBasket /></button>
            </div>
        </Link>
       
        
    ); 
}
export default NavBar;  