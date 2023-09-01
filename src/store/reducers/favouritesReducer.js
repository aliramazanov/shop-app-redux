import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "../actions/actionTypes";

const initialState = {
  favourites: [],
};

export const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      if (
        !state.favourites.some((item) => item.id === action.payload.product.id)
      ) {
        return {
          ...state,
          favourites: [...state.favourites, action.payload.product],
        };
      }
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter(
          (item) => item.id !== action.payload.product.id
        ),
      };
    default:
      return state;
  }
};
