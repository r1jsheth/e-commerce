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
import Product from './components/Product';

function LoginControl(props){
	return (
		<div>
		  {
		  	props.loggedIn == "false" &&
			<Login />
		  }
		  {
			props.loggedIn == "true" &&
			<div>
				
				<div className="App">
					<Navigation />
					<Route exact path="/" component={ProductGrid} />
					<Route exact path="/cart" component={ShoppingCart} />

				</div>
			</div>
		  }
		</div>
	);

}


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	const [userName, setUserName] = useState("");
  	const [password, setPassword] = useState("");

	const addItem = item => {
		setCart([...cart, item]);
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
				pauseOnHover: true
			}
		});
	}


	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{ cart, removeItem }}>
				<LoginControl loggedIn = "true"/>
		 	</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
