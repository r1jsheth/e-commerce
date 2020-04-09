import React from 'react';
import { withRouter } from 'react-router-dom';
 
const ProductCard = props => {
	console.log(props);
	let curProps = props.product;
    return (
        <div className="product">
					<div onClick={() => { 
						props.history.push({
							pathname: '/product',
							state: curProps
						})
					} 
					}>
						<div><img src={props.product.image} alt={`${props.product.title} book`} /></div>
		
						<h1 className="title">{props.product.title}</h1>
			
						<p className="price">₹ {props.product.price}/-</p>
					</div>
					<button onClick={() => props.addItem(props.product)}>
							Add to cart
					</button>
        </div>
    );
};
 
export default withRouter(ProductCard);