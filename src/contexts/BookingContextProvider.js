import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { ACTIONS, JSON_API_BOOKING } from "../helpers/consts";

export const bookingContext = createContext();

// func вызова контекста

export const useBooking = () => useContext(bookingContext);

const INIT_STATE = {
  booking: [],
  bookingDetails: null,
  bookingPreview: {
    name: "",
    descriprion: "",
    price: "",
    picture: "",
    type: "",
  },
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_BOOKING:
      return { ...state, booking: action.payload };
    case ACTIONS.GET_BOOKING_DETAILS:
      return { ...state, bookingDetails: action.payload };
    case ACTIONS.GET_BOOKING_PREVIEW:
      return { ...state, bookingPreview: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  // useLocation показывает значение ссылки. Возвращает объект

  const location = useLocation();

  //   Add Product

  const addBooking = async (newBooking) => {
    await axios.post(JSON_API_BOOKING, newBooking);
    getBooking();
  };

  // Get All product

  const getBooking = async () => {
    const { data } = await axios(
      `${JSON_API_BOOKING}/${window.location.search}`
    );
    dispatch({
      type: ACTIONS.GET_BOOKING,
      payload: data,
    });
  };

  // Edit / Details Product

  const getBookingDetails = async (id) => {
    const { data } = await axios(`${JSON_API_BOOKING}/${id}`);
    dispatch({
      type: ACTIONS.GET_BOOKING_DETAILS,
      payload: data,
    });
  };

  const saveEditedBooking = async (newProduct) => {
    await axios.patch(`${JSON_API_BOOKING}/${newProduct.id}`, newProduct);
    getProducts();
  };

  // Delete

  const deleteBooking = async (id) => {
    await axios.delete(`${JSON_API_BOOKING}/${id}`);
    getProducts();
  };

  // Product Preview

  const handlePreview = (previewBooking) => {
    dispatch({
      type: ACTIONS.GET_BOOKING_PREVIEW,
      payload: previewBooking,
    });
  };

  // toString() превращает в строку

  const values = {
    // объект значений
    booking: state.products,
    bookingDetails: state.productDetails,
    bookingPreview: state.productPreview,
    addBooking,
    getBooking,
    getBookingDetails,
    saveEditedBooking,
    deleteBooking,
    handlePreview,
    fetchByParams,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
