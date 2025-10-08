import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">ARHAUS</Link>
        </div>
      </nav>
      
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1>Shopping Cart</h1>
            <p>Your cart is currently empty.</p>
            <Link to="/" className="btn btn-primary-custom">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;