import React, { useState } from 'react';
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
import { withRouter } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage('cart', []);
	const [isUserLoggedIn, setUserLoggedIn] = useLocalStorage('isUserLoggedIn', false);
	
	function useLocalStorage(key, initialValue) {
		// State to store our value
		// Pass initial state function to useState so logic is only executed once
		const [storedValue, setStoredValue] = useState(() => {
			try {
				// Get from local storage by key
				const item = window.localStorage.getItem(key);
				// Parse stored json or if none return initialValue
				return item ? JSON.parse(item) : initialValue;
			} catch (error) {
				// If error also return initialValue
				console.log(error);
				return initialValue;
			}
		}
	);
  
	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = value => {
	  try {
		// Allow value to be a function so we have same API as useState
		const valueToStore =
		  value instanceof Function ? value(storedValue) : value;
		// Save state
		setStoredValue(valueToStore);
		// Save to local storage
		window.localStorage.setItem(key, JSON.stringify(valueToStore));
	  } catch (error) {
		// A more advanced implementation would handle the error case
		console.log(error);
	  }
	};
  
	return [storedValue, setValue];
  	}

	const addItem = item => {
		// TODO: add to local storage
		
		if(cart.filter(product => product.title === item.title).length === 0){
			setCart([...cart, {...item, quantity: 1}]);
		} 
		else {
			const currentCart = cart.filter(product => product.id !== item.id)
			const orderedItem = cart.filter(product => product.title === item.title)[0]
			setCart([...currentCart, {...orderedItem, quantity: orderedItem.quantity + 1}])
		}
		showNotification("Success!", "Item: " + item.title + " added", "success");
	};
	
	const removeItem = id => {
		
		// TODO: add to local storage
		var idx = -1;
		for(let i = 0 ; i < cart.length ; ++i){
			if(cart[i].id === id){
				idx = i;
				break;
			}
		}
		if(cart[idx].quantity > 1){
			cart[idx] = {...cart[idx], quantity: cart[idx].quantity-1};
			setCart([...cart]);
		} 
		else {
			setCart(cart.filter(item => item.id !== id))
		}


		showNotification("Item removed!", "Item: " + cart[idx].title + " removed", "danger");
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
					isUserLoggedIn === false &&
					<div>
						<Navigation isUserLoggedIn = {isUserLoggedIn} setUserLoggedIn = {setUserLoggedIn} cartLength = {cart.length}
									isVisible = "false" />
						<Login isUserLoggedIn = {isUserLoggedIn} setUserLoggedIn = {setUserLoggedIn} />
					</div>
				}
				{
					isUserLoggedIn === true &&
					<div>
						<div className="App">
							<Navigation isUserLoggedIn = {isUserLoggedIn} setUserLoggedIn = {setUserLoggedIn} cartLength = {cart.length}
								isVisible = "true"
							/>
							<Route exact path="/" component={ProductGrid} />
							<Route exact path="/cart" component={ShoppingCart} />
							<Route exact path="/product" component={Product} />
						</div>
					</div>
				}
				<Footer/>
		 	</CartContext.Provider>
		</ProductContext.Provider>
	);
}

// TODO what is withRouter() function
export default withRouter(App);