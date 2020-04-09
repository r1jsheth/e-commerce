import React, { useContext } from 'react';
import '../css/Product.css';
import { ProductContext } from '../contexts/ProductContext';
import Footer from './Footer';


const Product = (props) => {
	const { products, addItem } = useContext(ProductContext);

	const product = props.location.state;
	product.info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	console.log(product);
		return(
				<div>
						<div className="container">
 
						<div className="left-column">
						<div><img src={product.image} alt={`${product.title} book`} /></div>
						</div>


						<div className="right-column">

						<div className="product-description">
							<span> Category > Book</span>
							<h1>{product.title}</h1>
							<p>{product.info}</p>
						</div>


		
						<div className="product-price">
							<span>₹ {product.price}/-</span>
							<button className="cart-btn" onClick = {() => { addItem(product) }}>Add to cart</button>
						</div>
						</div>
						</div>
					<Footer/>
				</div>


		);

}


export default Product;