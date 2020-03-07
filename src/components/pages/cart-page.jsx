import React from 'react';
import Header from "../header";
import ShoppingCartTable from "../shopping-cart-table";

const CartPage = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <ShoppingCartTable/>
      </div>
    </>
  )
};

export default CartPage;