import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import BookListItem from '../book-list-item';
import withBookstoreService from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <div className="container">
      <h3 className="mb-2">Book List</h3>
      <div className="row">
        {
        books.map((book) => {
          return (
            <BookListItem
              key={book.id}
              book={book}
              onAddedToCart={() => onAddedToCart(book.id)}/>
          )
        })
        }
      </div>
    </div>
    )
};

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner/>
    }

    if (error) {
      return <ErrorIndicator message={error.toString()}/>
    }

    return <BookList books={books} onAddedToCart={onAddedToCart}/>

  }
}

const mapStateToProps = ({ bookList: { books, loading, error }}) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddedToCart: bookAddedToCart
  }, dispatch);
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer );
