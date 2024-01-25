
import { useContext } from 'react';
import './style.css'; 
import { CartContext } from '../context/CartContext';
const CartWidget = () => {

    const { count } = useContext(CartContext);

    return(
        <div className="container">
        <div className="cart-icon">🛒</div>
        <div className="number">{count}</div>
        </div>
    );
}

export default CartWidget; 