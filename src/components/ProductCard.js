import React from 'react';
import history from '../history';

const ProductCard = props => {
	return (
		<div className="product">
			<div onClick={() => history.push('/Products')}><img src={props.product.image} alt={`${props.product.title} book`} /></div>

			<h1 className="title">{props.product.title}</h1>

			<p className="price">₹{props.product.price}</p>

			<button onClick={() => props.addItem(props.product)}>
				Add to cart
			</button>
		</div>
	);
};

export default ProductCard;
