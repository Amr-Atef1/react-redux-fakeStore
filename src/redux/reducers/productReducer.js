import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case ActionTypes.FETCH_PRODUCTS:
        return {
          ...state,
          products:payload
        };
    default:
      return state;
  }
};

export const selectedProductReducer =(state = {},{type, payload}) => {
  switch (type) {
    // case ActionTypes.SELECTED_PRODUCTS:
    //   return {...state,...payload}
    
      case ActionTypes.FETCH_PRODUCT:
        return {...state,...payload}
      
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {}
    default:
      return state
  }
}