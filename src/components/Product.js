import React from 'react';



const Product = (props) => {
	
		return(
				<div>
						<h1>
								{props.title}
						</h1>
						<h2>
								{props.price}
						</h2>
						<p>
								{props.info}
						</p>

				</div>


		);

}


export default Product;