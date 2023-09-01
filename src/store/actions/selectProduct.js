import { SET_SELECTED_PRODUCT, CLEAR_SELECTED_PRODUCT } from "./actionTypes";

export const setSelectedProduct = (product) => ({
  type: SET_SELECTED_PRODUCT,
  payload: product,
});

export const clearSelectedProduct = () => ({
  type: CLEAR_SELECTED_PRODUCT,
});
