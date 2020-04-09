import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import Footer from './Footer';

const Navigation = () => {
	const { cart } = useContext(CartContext);

	return (
		<div>
			<div className="navigation">
				<NavLink to="/">Infa-Commerce</NavLink>
				<NavLink to="/">Products</NavLink>
				<NavLink to="/cart" className="cartNavbar" >
					Cart <span>{cart.length}</span>
				</NavLink>
			</div>
		</div>
	);
};

export default Navigation;