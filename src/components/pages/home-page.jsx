import React from 'react';
import BookList from '../book-list';
import Header from "../header";
import CartTable from "../cart-table";


const HomePage = () => {
  return (
    <>
      <Header/>
      <BookList/>
      <CartTable/>
    </>
    )
};

export default HomePage;