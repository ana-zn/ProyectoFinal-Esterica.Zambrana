import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'; 
import './NavBar.css'; 
import { LuUserRound } from "react-icons/lu";
import { useAppContext } from '../../context/context';

function NavBar() {
    const context = useAppContext(); 
    return (
        <header className='content-header'>
            <div className='content-logo'>
                <Link to="/"><img src="https://res.cloudinary.com/depesaqb0/image/upload/v1745508992/logo_j9yans.svg" alt="Logo" /></Link>
            </div>
            <nav className='content-navbar'>
                <ul className='list-item'>
                    <li><Link to="/products">Todos</Link></li>
                    <li><Link to="/products/rostro">Rostro</Link></li>
                    <li><Link to="/products/ojos">Ojos</Link></li>
                    <li><Link to="/products/labios">Labios</Link></li>
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
