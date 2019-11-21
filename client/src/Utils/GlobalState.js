import React, { createContext, useReducer, useContext, setState } from "react";
import Items from "./Items.json";

const BuyBestContext = createContext();
const { Provider } = BuyBestContext;

function reducer(state, action) {
  switch (action.type) {
    case "search":
      console.log(action.request);
      return;
    case "getItems":
      state = {...state, display: state.allItems};
      return state;
    case "addToCart":
      state.cart.push(action.thing);
      state = {...state};
      console.log("new state.cart: ", state.cart);
      return state;
    case "addToWishList":
      state.wishList.push(action.thing);     
      return state;
    case "getCart":
      state = {...state, display: state.cart};
      return state;
    case "getWishList":
      state = {...state, display: state.wishList};
      return state;
    case "sortItems":
      console.log("sortItems");
      return state.map((item, index) => {
        if (index === action.index) {
          return Object.assign({}, item, {
            priority: !item.priority
          });
        }
        return item;
      });
    default:
      return state;
  }
};

function InputProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, {
    allItems: Items,
    wishList: [],
    cart: [],
    display: []
  });

  return <Provider value={[state, dispatch]} {...props} />;
}

function UseBuyBestContext() {
  return useContext(BuyBestContext);
}

export { InputProvider, UseBuyBestContext };