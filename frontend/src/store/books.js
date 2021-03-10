import { fetch } from './csrf.js';

const LOAD_SPECIES_BOOKS = "books/loadSpeciesBooks";
const LOAD_SORT_ORDER = "books/loadSortOrder";
const LOAD_CURRENT_BOOK = "books/loadCurrentBook";
const LOAD_REVIEW = "books/loadReview";

const loadSpeciesBooks = (books) => ({
    type: LOAD_SPECIES_BOOKS,
    payload: books
});

const loadCurrentBook = (book) => ({
  type: LOAD_CURRENT_BOOK,
  payload: book
});

const loadReview = (review, avgRating) => ({
  type: LOAD_REVIEW,
  payload: {review, avgRating}
});

export const changeSortOrder = (order) => ({
  type: LOAD_SORT_ORDER,
  payload: order
});

export const fetchSpeciesBooks = (speciesId, order) => async (dispatch) => {
  const res = await fetch(`/api/books/species/${speciesId}/${order}`);
  dispatch(loadSpeciesBooks(res.data.books));
};

export const fetchBookInfo = (id) => async (dispatch) => {
  const res = await fetch(`/api/books/${id}`);
  dispatch(loadCurrentBook(res.data.book));
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
};

const initialState = { list: {}, order: 1, current: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD_SPECIES_BOOKS:
      newState = Object.assign({}, state, { list: action.payload });
      return newState;
    case LOAD_SORT_ORDER:
      newState = Object.assign({}, state, { order: action.payload });
      return newState;
    case LOAD_CURRENT_BOOK:
      newState = Object.assign({}, state, { current: action.payload});
      return newState;
    case LOAD_REVIEW:
      newState = Object.assign({}, state);
      console.log(action.payload);

      newState.current.reviews = {...newState.current.reviews, [action.payload.review.userId]: action.payload.review};
      newState.current = {...newState.current, avgRating: action.payload.avgRating}
      return newState;
    default:
      return state;
  };
};

export default reducer;