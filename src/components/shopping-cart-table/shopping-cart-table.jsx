import React from 'react';
import { connect } from 'react-redux';
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from '../../actions/';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, price, total } = item;
    return (
        <tr key={idx + title}>
          <th scope="row">{idx + 1}</th>
          <td>{title}</td>
          <td>{count}</td>
          <td>${price}</td>
          <td>${total}</td>
          <td className="text-right">
            <button
              className="btn btn-outline-primary ml-1"
              onClick={() => onDecrease(id)}>
              <i className="fa fa-minus-circle" aria-hidden="true"/>
            </button>
            <button
              className="btn btn-outline-success ml-1"
              onClick={() => onIncrease(id)}>
              <i className="fa fa-plus-circle" aria-hidden="true"/>
            </button>
            <button
              className="btn btn-outline-danger ml-1"
              onClick={() => onDelete(id)}>
              <i className="fa fa-trash" aria-hidden="true"/>
            </button>
          </td>
        </tr>
    )
  };
  return (
    <div className="container mt-3">
      <h3>Your order</h3>
      <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Count</th>
          <th scope="col">Price</th>
          <th scope="col">Total</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
      {
        items.length ?
          items.map(renderRow) :
          <tr>
            <td colSpan="6">
              <h4 className="text-center">The shopping cart is empty</h4>
            </td>
          </tr>
      }
      </tbody>
      </table>
      {total !== 0 &&
        <h3 className="text-right">
          ${total}
        </h3>
      }
    </div>
  )
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal, itemsCount } }) => {
  return {
    items: cartItems,
    total: orderTotal,
    itemsCount: itemsCount
  }
};

const mapDispatchToProps = {
  onIncrease: (id) => bookAddedToCart(id),
  onDecrease: (id) => bookRemovedFromCart(id),
  onDelete: (id) => allBooksRemovedFromCart(id)
};


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);