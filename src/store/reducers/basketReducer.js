import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/actionTypes";
const initialState = {
  basket: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload.product],
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket.filter(
          (item) => item.id !== action.payload.productId
        ),
      };

    default:
      return state;
  }
};
