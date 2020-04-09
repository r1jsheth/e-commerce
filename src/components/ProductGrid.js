import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Footer from './Footer';
import ProductCard from './ProductCard';

const ProductGrid = () => {
	const { products, addItem } = useContext(ProductContext);
	
	return (
		<div>
		<div className="products-container">
			{products.map(product => (
				<ProductCard
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
		<Footer/>
		</div>
	);
};

export default ProductGrid;