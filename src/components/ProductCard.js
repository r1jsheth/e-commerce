import React from 'react';
import history from '../history';

const ProductCard = props => {
	return (
		<div className="product" onClick={() => history.push('/Products')}>
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">₹{props.product.price}</p>

			<button onClick={() => props.addItem(props.product)}>
				Add to cart
			</button>
		</div>
	);
};

export default ProductCard;
