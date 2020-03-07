import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import './header.css';

const Header = ({ total, itemsCount }) => {
  return (
    <nav className="navbar navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand">ReStore</Link>
        <Link to="/cart" className="btn btn-primary">
          <i className="fa fa-shopping-cart mr-1" aria-hidden="true"/>
          { itemsCount !== 0 ?
            <span>{itemsCount} Items (${total})</span> :
            <span>Empty cart</span>
          }
        </Link>
      </div>
    </nav>
  )
};

const mapStateToProps = ({ shoppingCart: { orderTotal, itemsCount } }) => {
  return {
    total: orderTotal,
    itemsCount: itemsCount
  }
};

export default connect(mapStateToProps)(Header);