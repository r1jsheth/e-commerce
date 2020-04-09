import React, { useState, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import ProductCard from './ProductCard';
import data from '../data';

const ProductGrid = () => {
	const [ products ] = useState(data);
	const { addItem } = useContext(ProductContext);
	
	return (
		<div className="products-container">
			{products.map(product => (
				<ProductCard
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default ProductGrid;