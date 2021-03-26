import { fetch } from './csrf.js';

const LOAD_BOOKSHELVES = "books/loadBookshelves";

const loadBookshelves = (userBooks) => ({
  type: LOAD_BOOKSHELVES,
  payload: userBooks
});

export const fetchUserBooks = (userId) => async (dispatch) => {
  const res = await fetch(`/api/bookshelves/${userId}`);
  dispatch(loadBookshelves(res.data));
};

const initialState = { recommended: {}, wantToRead: {}, currentlyReading: {}, read: {} };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD_BOOKSHELVES:
      newState = Object.assign({}, state, action.payload); 
      return newState;
    default:
      return state;
  };
};

export default reducer;