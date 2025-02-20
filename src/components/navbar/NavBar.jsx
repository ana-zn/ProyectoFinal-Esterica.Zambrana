
import './NavBar.css'; 
import { LuUserRound } from "react-icons/lu";
import { LuShoppingBasket } from "react-icons/lu";

function NavBar() {
    return(
        
        <header className='content-header'>
                <div className='content-logo'>
                 <img src="/images/logo.svg" alt="" />
                </div>
                <nav className='content-navbar'>
                    <ul className='list-item'>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div className='content-buttons'>
                    <button className='button-navbar' id='user-button'><LuUserRound /></button>
                    <button className='button-navbar' id='shop-button'><LuShoppingBasket /></button>
                </div>
        </header>
      
    ); 
}
export default NavBar; 