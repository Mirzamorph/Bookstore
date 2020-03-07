import React from 'react';
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand">ReStore</Link>
        <Link to="/cart" className="btn btn-primary">
          <i className="fa fa-shopping-cart mr-1" aria-hidden="true"/>
          4 Items ($210)
        </Link>
      </div>
    </nav>
  )
};

export default Header;