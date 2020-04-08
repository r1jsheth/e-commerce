import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

import ProductCard from './ProductCard';

const ProductGrid = () => {
	const { products, addItem } = useContext(ProductContext);
	
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