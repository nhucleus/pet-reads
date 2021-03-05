import { fetch } from './csrf.js';

const LOAD_SPECIES_BOOKS = "books/loadSpeciesBooks";

const loadSpeciesBooks = (books) => ({
    type: LOAD_SPECIES_BOOKS,
    payload: books
});

export const fetchSpeciesBooks = (speciesId) => async (dispatch) => {
    const res = await fetch(`api/books/species/${speciesId}`);
    dispatch(loadSpeciesBooks(res.data.books));
}

const initialState = { list: [], current: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD_SPECIES_BOOKS:
      newState = Object.assign({}, state, { list: action.payload });
      return newState;
    default:
      return state;
  }
};

export default reducer;