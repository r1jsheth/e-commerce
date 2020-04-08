import React from 'react';
// import header


const Product = (props) => {
	
		return(
				<div>
					{console.log("wleomce")}
					<h1>Welcome</h1>
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