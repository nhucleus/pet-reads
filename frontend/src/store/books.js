import { fetch } from './csrf.js';

const LOAD_SPECIES_BOOKS = "books/loadSpeciesBooks";
const LOAD_SORT_ORDER = "books/loadSortOrder";
const LOAD_CURRENT_BOOK = "books/loadCurrentBook";
const LOAD_REVIEW = "books/loadReview";
const LOAD_STATUS = "books/loadStatus";
const REMOVE_STATUS = "books/removeStatus";
const CHANGE_STATUS = "books/changeStatus";
const LOAD_SEARCH_RESULTS = 'books/loadSearchResults';
const CLEAR_SEARCH_RESULTS = 'books/clearSearchResults';
const CLEAR_FEED = 'books/clearFeed';

const loadSpeciesBooks = (books) => ({
  type: LOAD_SPECIES_BOOKS,
  payload: books
});

const loadCurrentBook = (book) => ({
  type: LOAD_CURRENT_BOOK,
  payload: book
});

const loadUserBookStatus = (status) => ({
  type: LOAD_STATUS,
  payload: status
});

const removeStatus = () => ({
  type: REMOVE_STATUS,
});

const changeStatus = (status) => ({
  type: CHANGE_STATUS,
  payload: status
});

const loadReview = (review, avgRating) => ({
  type: LOAD_REVIEW,
  payload: {review, avgRating}
});

export const changeSortOrder = (order) => ({
  type: LOAD_SORT_ORDER,
  payload: order
});

export const clearFeed = () => ({
  type: CLEAR_FEED
});

const loadSearchResults = (books) => ({
  type: LOAD_SEARCH_RESULTS,
  payload: books
});

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS,
});

export const fetchSpeciesBooks = (speciesId, order, page) => async (dispatch) => {
  const res = await fetch(`/api/books/species/${speciesId}/${order}/${page}`);
  dispatch(loadSpeciesBooks(res.data.books));
};

export const fetchBookInfo = (bookId, userId) => async (dispatch) => {
  const res = await fetch(`/api/books/${bookId}`);
  dispatch(loadCurrentBook(res.data.book));
  const res2 = await fetch(`/api/books/${bookId}/${userId}`);
  if (res2.data.userBookStatus) {
    dispatch(loadUserBookStatus(res2.data.userBookStatus));
  }
};

export const createReview = (bookId, userId, rating, review) => async (dispatch) => {
  const data = {userId, rating, review}
  const res = await fetch(`/api/books/${bookId}`, 
    {
      method: 'POST',
      body: JSON.stringify(data)
    }
  );
  dispatch(loadReview(res.data.review, res.data.avgRating));
}

export const removeFromShelf = (bookId, userId) => async (dispatch) => {
  const res = await fetch(`/api/books/${bookId}/${userId}`, 
    {
      method: 'DELETE',
    }
  );
  dispatch(removeStatus());
}

export const addToShelf = (bookId, userId, status) => async (dispatch) => {
  const res = await fetch(`/api/books/${bookId}/${userId}`, 
    {
      method: 'PUT',
      body: JSON.stringify({ status })
    }
  );
  dispatch(changeStatus(status));
}

export const searchForBooks = (query) => async (dispatch) => {
  const res = await fetch(`/api/books/search/${query}`);
  dispatch(loadSearchResults(res.data.results));
}


const initialState = { list: {}, order: 1, current: null, search: [] };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD_SPECIES_BOOKS:
      newState = Object.assign({}, state);
      newState.list = {...newState.list, ...action.payload}
      return newState;
    case LOAD_SORT_ORDER:
      newState = Object.assign({}, state, { order: action.payload });
      return newState;
    case LOAD_CURRENT_BOOK:
      newState = Object.assign({}, state, { current: action.payload});
      return newState;
    case LOAD_STATUS:
      newState = Object.assign({}, state);
      newState.current = {...newState.current, status: action.payload}
      return newState;
    case REMOVE_STATUS:
      newState = Object.assign({}, state);
      newState.current = {...newState.current};
      delete newState.current.status;
      return newState;
    case CHANGE_STATUS:
      newState = Object.assign({}, state);
      newState.current = {...newState.current, status: action.payload};
      return newState;
    case LOAD_REVIEW:
      newState = Object.assign({}, state);
      newState.current.reviews = {...newState.current.reviews, [action.payload.review.userId]: action.payload.review};
      newState.current = {...newState.current, avgRating: action.payload.avgRating}
      return newState;
    case LOAD_SEARCH_RESULTS:
      newState = Object.assign({}, state, { search: action.payload });
      return newState;
    case CLEAR_SEARCH_RESULTS:
      newState = Object.assign({}, state, { search: [] });
      return newState;
    case CLEAR_FEED:
      newState = Object.assign({}, state, { list: {} });
      return newState;
    default:
      return state;
  };
};

export default reducer;