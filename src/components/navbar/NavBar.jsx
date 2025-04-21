import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'; 
import './NavBar.css'; 

import { LuUserRound } from "react-icons/lu";

function NavBar() {
    return(
        <header className='content-header'>
                <div className='content-logo'>
                 <img src="./images/logo.svg" alt="" />
                </div>
                <nav className='content-navbar'>
                    <ul className='list-item'>
                        <li>
                            <Link to = "/productos">
                            Todos
                            </Link>
                        </li>
                        <li>
                            <Link to =  "/productos/rostro">
                            Rostro
                            </Link>
                        </li>
                        <li>
                        <Link to =  "/productos/ojos">
                            Ojos
                        </Link>
                        </li>
                        <li>
                        <Link to =  "/productos/labios">
                            Labios
                        </Link>
                        </li>
                    </ul>
                </nav>
                <div className='content-buttons'>
                    <button className='button-navbar' id='user-button'><LuUserRound /></button>
                    <CartWidget />
                </div>
        </header>
      
    ); 
}
export default NavBar; 