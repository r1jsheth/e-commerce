import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { store } from 'react-notifications-component';
import Item from './ShoppingCartItem';


const ShoppingCart = () => {
	const { cart, removeItem } = useContext(CartContext);

	const getCartTotal = () => {
		return cart.reduce((acc, item) => {
			return acc + item.price * item.quantity;
		}, 0);
	};

	function showNotification(title, msg, type, timeout){
		store.addNotification({
			title: title,
			message: msg,
			type: type,
			insert: "top",
			container: "top-center",
			animationIn: ["animated", "fadeIn"],
			animationOut: ["animated", "fadeOut"],
			dismiss: {
				duration: timeout,
				onScreen: true,
			}
		});
	}
	function showMessage(){
		const cartTotal = getCartTotal();
		if(cartTotal === 0){
			showNotification("Your Cart!","Please add Items to cart first", "warning", 1000);
		}
		else{
			showNotification("Order placed!","You just placed order, bill is ₹ " + cartTotal + "/-", "success", 1000);
		}
	}


	return (
		<div className="shopping-cart">
				{cart.map(item => (
					<Item key={item.id} {...item} removeItem={removeItem} />
				))}

				<div className="shopping-cart__checkout">
					<p>Total: ₹{getCartTotal()}/-</p>
					<button type="submit" onClick={showMessage}>Checkout</button>
				</div>
		</div>
	);
};

export default ShoppingCart;
