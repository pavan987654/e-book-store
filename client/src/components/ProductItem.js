// client/src/components/ProductItem.js

import React, { useContext } from "react";
import { itemContext } from "../context/ItemContext";
import './ProductItem.css'

const ProductItem = ({ product }) => {
	const { addToCart, removeFromCart } = useContext(itemContext);

	const handleAddToCart = (product) => {
		console.log(product);
		addToCart(product);
	};

	const handleRemoveToCart = (product) => {
		console.log("product removed", product);
		removeFromCart(product);
	};

	return (
		<div className="product-card">
			<div className="product-details">
			<img
				className="product-image"
				src={product.image}
				alt={product.title}
			/>
				<h3 style={{ fontWeight: "700" }}>{product.title}</h3>
				<p style={{ fontWeight: "300" }}>{product.description}</p>
				<p style={{ fontWeight: "500" }}>Price: {product.price} Rs</p>
				<p>{product.genre}</p>
				<p style={{ fontWeight: "700", color: "brown" }}>
					{product.author}
				</p>

				<button style={{fontFamily:"-moz-initial", color:"black",background:"rgb(61, 179, 81)"}} onClick={() => handleAddToCart(product)}>
					Add to Cart
				</button>

				<button onClick={() => handleRemoveToCart(product)}>-</button>
			</div>
		</div>
	);
};

export default ProductItem;