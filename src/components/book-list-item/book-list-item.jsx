import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book }) => {
  const { title, author, description, imgUrl, price } = book;
  return (
    <div className="card mb-3 mx-auto" style={{maxWidth: '540px'}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={imgUrl} className="card-img" alt={title}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <h4 className="d-block">{price}</h4>
            <small className="text-muted">{author}</small>
            <button type="button" className="btn btn-info d-block mt-3 mx-auto">Add to cart</button>
          </div>
      </div>
     </div>
    </div>
  )
};

export default BookListItem;