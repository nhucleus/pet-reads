import { fetch } from './csrf.js';

const LOAD_SPECIES_LIST = "species/loadSpeciesList";
const LOAD_CURRENT_SPECIES = "species/loadCurrentSpecies";

const loadSpeciesList = (list) => ({
  type: LOAD_SPECIES_LIST,
  payload: list
});

export const setSpecies = (species) => ({
  type: LOAD_CURRENT_SPECIES,
  payload: species
});

export const fetchSpeciesList = () => async (dispatch) => {
  const res = await fetch("api/species/list");
  dispatch(loadSpeciesList(res.data.list));
};

const initialState = { list: [], current: {id: 0, name: "All"} };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD_SPECIES_LIST:
      newState = Object.assign({}, state, { list: action.payload });
      return newState;
    case LOAD_CURRENT_SPECIES:
      newState = Object.assign({}, state, { current: action.payload });
      return newState;
    default:
      return state;
  }
};

export default reducer;