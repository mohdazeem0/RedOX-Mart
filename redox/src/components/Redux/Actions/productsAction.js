import { ActionType } from "../Constants/actionTypes";

export const setProducts = (products) => {
  //here just products as arguement
  return {
    type: ActionType.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProducts = (product) => {
  //here just product as arguement
  return {
    type: ActionType.SELECTED_PRODUCT,
    payload: product,
  };
};
// export const removeSelectedProducts = (products) => {
//   return {
//     type: ActionType.REMOVE_SELECTED_PRODUCT,
//     payload: products,
//   };
// };
