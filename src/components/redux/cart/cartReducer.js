import React, { useReducer } from "react";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  totalPrice: 0,
  checkout: false,
};

const sumItems = (item) => {
  const itemsCounter = item.reduce((total, currenQuantity) => {
    return total + currenQuantity.quantity;
  }, 0);
  const totalPrice = item
    .reduce((total, currenPrice) => {
      return total + currenPrice.quantity * currenPrice.price;
    }, 0)
    .toFixed(2);
  return { itemsCounter, totalPrice };
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkout: false,
      };

    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems),
      };

    case "INCREASE":
      const increaseItem = state.selectedItems.find(
        (item) => item.id === action.payload.id
      );
      increaseItem.quantity++;
      return { ...state, ...sumItems(state.selectedItems) };

    case "DECREASE":
      const decreaseItem = state.selectedItems.find(
        (item) => item.id === action.payload.id
      );
      decreaseItem.quantity--;
      return { ...state, ...sumItems(state.selectedItems) };

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        totalPrice: 0,
        checkout: true,
      };

    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        totalPrice: 0,
        checkout: false,
      };

    default:
      return state;
  }
};

export default cartReducer;
