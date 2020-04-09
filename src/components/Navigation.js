import React from 'react';
import { NavLink } from 'react-router-dom';
import { store } from 'react-notifications-component';

const Navigation = (props) => {


	function logOut(){
		localStorage.setItem('isUsedLoggedIn', false);
		props.setUserLoggedIn(false);
		showNotification("Logged Out!", "Logged Out!", "success");

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
		<div className="navigation">
			<NavLink to="/">Infa-Commerce</NavLink>
			{	props.isVisible === "true" && <NavLink to="/">Products</NavLink> }
			{
				props.isVisible === "true" &&
				<NavLink to="/cart" className="cartNavbar" >
					Cart <span>{props.cartLength}</span>
				</NavLink>
			}
			{	props.isVisible === "true" && <NavLink to="/" className="logOut" onClick={logOut}>Log Out</NavLink> }

		</div>
	);
};

export default Navigation;