import React from 'react';

const CartTable = () => {
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
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td className="text-right">
            <button className="btn btn-outline-primary ml-1"><i className="fa fa-minus-circle" aria-hidden="true"/></button>
            <button className="btn btn-outline-success ml-1"><i className="fa fa-plus-circle" aria-hidden="true"/></button>
            <button className="btn btn-outline-danger ml-1"><i className="fa fa-trash" aria-hidden="true"/></button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td className="text-right">
            <button className="btn btn-outline-primary ml-1"><i className="fa fa-minus-circle" aria-hidden="true"/></button>
            <button className="btn btn-outline-success ml-1"><i className="fa fa-plus-circle" aria-hidden="true"/></button>
            <button className="btn btn-outline-danger ml-1"><i className="fa fa-trash" aria-hidden="true"/></button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td className="text-right">
            <button className="btn btn-outline-primary ml-1"><i className="fa fa-minus-circle" aria-hidden="true"/></button>
            <button className="btn btn-outline-success ml-1"><i className="fa fa-plus-circle" aria-hidden="true"/></button>
            <button className="btn btn-outline-danger ml-1"><i className="fa fa-trash" aria-hidden="true"/></button>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
  )
};

export default CartTable;