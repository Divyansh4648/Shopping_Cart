import React, { useState } from 'react';
import './Product.css';

const Product = ({ product, updateQuantity, removeProduct }) => {
  const { id, name, price } = product;
  const [quantity, setQuantity] = useState(product.quantity);
  const [totalPrice, setTotalPrice] = useState(price * quantity); 

  const handleQuantityChange = (e) => {
    const newQuantity = typeof e === "number" ? e : parseInt(e.target.value, 10) || 0;
    setQuantity(newQuantity);
    const newTotalPrice = price * newQuantity;
    setTotalPrice(newTotalPrice);
    updateQuantity(id, newQuantity);
  };

  return (
    <div className="product-container">
      <h3 className="product-title">{name}</h3>
      <p className="product-price">₹ {price.toFixed(2)}</p>
      <div className="product-quantity">
        <button onClick={()=> parseInt(quantity) ? handleQuantityChange(parseInt(quantity) - 1) : handleQuantityChange(0)}> - </button>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          className="product-quantity-input"
        />
           <button onClick={()=> handleQuantityChange(parseInt(quantity) + 1)}> + </button>
      </div>
      <p className="product-total">₹ {totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Product;
