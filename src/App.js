import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';
import { store } from 'react-notifications-component';
import Navigation from './components/Navigation';
import ProductGrid from './components/ProductGrid';
import ShoppingCart from './components/ShoppingCart';
import Login from './components/Login';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	const [isUserLoggedIn, setUserLoggedIn] = useState(false);
	

	const addItem = item => {
		// todo: for loop and check for key and then update qty
		setCart([...cart, {...item,quantity:1}]);
		showNotification("Success!", "Item added", "success");
	};

	const removeItem = id => {
		const newCart = cart.filter(item => item.id !== id);
		setCart(newCart);
		showNotification("You Removed", "an Item", "danger");
	}


	function showNotification(title, msg, type){
		store.addNotification({
			title: title,
			message: msg,
			type: type,
			insert: "top",
			container: "top-center",
			animationIn: ["animated", "fadeIn"],
			animationOut: ["animated", "fadeOut"],
			dismiss: {
				duration: 1000,
				onScreen: true,
			}
		});
	}


	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{ cart, removeItem }}>
				{
					isUserLoggedIn == false &&
					<Login isUserLoggedIn = {isUserLoggedIn} setUserLoggedIn = {setUserLoggedIn} />
				}
				{
					isUserLoggedIn == true &&
					<div>
						
						<div className="App">
							<Navigation />
							<Route exact path="/" component={ProductGrid} />
							<Route exact path="/cart" component={ShoppingCart} />
						</div>
					</div>
				}
		 	</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
