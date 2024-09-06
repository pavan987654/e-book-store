// src/components/Header.js

import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { itemContext } from "../context/ItemContext";

const Header = () => {
	const { itemsInCart, totalPrice } = useContext(itemContext);

	return (
		<div className="header" >
			<h1 > eBook Store </h1>
			<h3 className="Tt">Total Price : {totalPrice}</h3>

			<div className="cart-num">
				<div className="cart-items">{itemsInCart}</div>

				<FontAwesomeIcon icon={faCartShopping} size="3x" />
			</div>
		</div>
	);
};

export default Header;