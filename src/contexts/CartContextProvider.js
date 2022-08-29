import React, { createContext, useContext, useReducer } from "react";
import { CART } from "../helpers/consts";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountDishesInCart,
} from "../helpers/functions";

const cartContext = createContext();

export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountDishesInCart(),
  count: JSON.parse(localStorage.getItem("sum")),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART:
      return { ...state, cart: action.payload };
    case CART.GET_CART_LENGTH:
      return { ...state, cartLength: action.payload };
    case CART.GET_COUNT:
      return { ...state, count: action.payload };

    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // get cart
  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ dishes: [], totalPrice: 0 })
      );
      cart = {
        dishes: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  const addDishToCart = (dish) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = {
        dishes: [],
        totalPrice: 0,
      };
    }

    let newDish = {
      item: dish,
      count: 1,
      subPrice: +dish.price,
    };

    let dishToFind = cart.dishes.filter((elem) => elem.item.id === dish.id);

    if (dishToFind.length === 0) {
      cart.dishes.push(newDish);
    } else {
      cart.dishes = cart.dishes.filter((elem) => elem.item.id !== dish.id);
    }

    cart.totalPrice = calcTotalPrice(cart.dishes);

    localStorage.setItem("cart", JSON.stringify(cart));
    getCount();
    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  function deleteDishInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.dishes = cart.dishes.filter((elem) => elem.item.id !== id);

    cart.totalPrice = calcTotalPrice(cart.dishes);

    localStorage.setItem("cart", JSON.stringify(cart));

    getCart();
    getCount();

    dispatch({
      type: CART.GET_CART_LENGTH,
      payload: cart,
    });
  }

  const changeDishCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.dishes = cart.dishes.map((dish) => {
      if (dish.item.id === id) {
        dish.count = count;
        dish.subPrice = calcSubPrice(dish);
      }
      return dish;
    });

    cart.totalPrice = calcTotalPrice(cart.dishes);

    localStorage.setItem("cart", JSON.stringify(cart));
    getCount();
    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };
  const getCount = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ dishes: [], totalPrice: 0 })
      );
      cart = {
        dishes: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });

    let array = [];
    cart.dishes.map((item) => {
      array.push(item.count++);
    });

    let sum = array.reduce((a, b) => a + b, 0);

    localStorage.setItem("sum", JSON.stringify(sum));

    dispatch({
      type: CART.GET_COUNT,
      payload: sum,
    });
  };

  const values = {
    getCart,
    addDishToCart,
    deleteDishInCart,
    changeDishCount,
    cart: state.cart,
    getCount,
    count: state.count,
  };

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
