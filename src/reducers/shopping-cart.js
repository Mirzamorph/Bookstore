const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    count = 0,
    title = book.title,
    price = book.price,
    total = 0
  } = item;

  return {
    id,
    title,
    price: price,
    count: count + quantity,
    total: total + quantity*price
  }
};

const updateCartItems = (cartItems, item, idx) => {

  if (item.count === 0) {
    return [
    ...cartItems.slice(0, idx),
    ...cartItems.slice(idx + 1)
    ];
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ]
  }
  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ]
};

const updateOrder =(state, bookId, quantity) => {
  const { books } = state.bookList;
  const { cartItems } = state.shoppingCart;
  const book = books.find(book => book.id === bookId);
  const itemIndex = cartItems.findIndex(({id}) => id === bookId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity);
  const newCartItems = updateCartItems(cartItems, newItem, itemIndex);
  const orderTotal = newCartItems.reduce((sum, { total }) => sum + total, 0);
  const itemsCount = newCartItems.reduce((total, { count }) => total + count, 0);

  return {
    ...state.shoppingCart,
    cartItems: newCartItems,
    orderTotal,
    itemsCount
  };
};

const updateShoppingCart = (state, action) => {

  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      itemsCount: 0
    }
  }

  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'BOOK_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_BOOKS_REMOVED_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.shoppingCart
  }
};

export default updateShoppingCart;