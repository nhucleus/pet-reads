import { fetch } from './csrf.js';

const LOAD_SPECIES_BOOKS = "books/loadSpeciesBooks";
const LOAD_SORT_ORDER = "books/loadSortOrder";

const loadSpeciesBooks = (books) => ({
    type: LOAD_SPECIES_BOOKS,
    payload: books
});

export const changeSortOrder = (order) => ({
  type: LOAD_SORT_ORDER,
  payload: order
})

export const fetchSpeciesBooks = (speciesId, order) => async (dispatch) => {
    const res = await fetch(`api/books/species/${speciesId}/${order}`);
    dispatch(loadSpeciesBooks(res.data.books));
}

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
    default:
      return state;
  }
};

export default reducer;