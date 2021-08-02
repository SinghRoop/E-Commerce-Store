/* eslint-disable no-unreachable */
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  // UPDATE_FILTERS,
  // FILTER_PRODUCTS,
  // CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return { ...state, all_products: [...action.payload], filtered_products: [...action.payload] }
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true }
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false }
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }
  if (action.type === SORT_PRODUCTS) {
    const{sort, filtered_products} = state
    let tempProducts = [...filtered_products]
    if(sort === 'price-lowest'){}
    if(sort === 'price-highest'){}
    if(sort === 'name-a'){}
    if(sort === 'name-z'){}
    return { ...state, filtered_products: tempProducts }
  }

  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
}

export default filter_reducer;