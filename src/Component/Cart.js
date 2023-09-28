import React, { useState } from 'react';
import Product from './Product';
import './Cart.css';

const Cart = ({ products }) => {
  const [discount, setDiscount] = useState(0);

 
  const [productQuantities, setProductQuantities] = useState(
    products.reduce((quantities, product) => {
      quantities[product.id] = product.quantity;
      return quantities;
    }, {})
  );

  const updateQuantity = (productId, newQuantity) => {
    setProductQuantities({
      ...productQuantities,
      [productId]: newQuantity,
    });
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => {
      return total + product.price * productQuantities[product.id];
    }, 0);
  };

  const applyDiscount = () => {
    const total = calculateTotal();
    const discountedTotal = total - (total * discount) / 100;
    return discountedTotal;
  };

  return (
    <div className="cart-container"> {/* Apply the cart-container class */}
      <h2 className="cart-header">Shopping Cart</h2> {/* Apply the cart-header class */}
      <div className='groduct-grid'>
        <div className='header'>
            <div>Product Name</div>
            <div>Price</div>
            <div>QTY</div>
            <div>Total</div>
        </div>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          quantity={productQuantities[product.id]}
          updateQuantity={updateQuantity}
        />
      ))}
      </div>
      <div className="discount">
        <label className="discount-label">Discount (%)</label> {/* Apply the discount-label class */}
        <input
          className="discount-input" /* Apply the discount-input class */
          type="number"
          value={discount}
          onChange={(e) => setDiscount(parseInt(e.target.value, 10) <  100 ? parseInt(e.target.value, 10) || 0 : !parseInt(e.target.value) ? 0 : 100)}
        />
        <button className="cart-buttons button">Apply Discount</button> {/* Apply the cart-buttons class */}
      </div>
      <div className="cart-total">
        <p className="cart-total-label">Total Price: INR {calculateTotal().toFixed(2)}</p> {/* Apply the cart-total-label class */}
        <p className="cart-total-label">Discounted Price: INR {applyDiscount().toFixed(2)}</p> {/* Apply the cart-total-label class */}
      </div>
    </div>
  );
};

export default Cart;
