import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { BOOKING_ACTIONS, JSON_API_BOOKING } from "../helpers/consts";

export const bookingContext = createContext();

// func вызова контекста

export const useBooking = () => useContext(bookingContext);

const INIT_STATE = {
  booking: [],
  bookingDetails: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case BOOKING_ACTIONS.GET_BOOKING:
      return { ...state, booking: action.payload };
    case BOOKING_ACTIONS.GET_BOOKING_DETAILS:
      return { ...state, bookingDetails: action.payload };
    default:
      return state;
  }
};

const BookingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  // useLocation показывает значение ссылки. Возвращает объект

  const location = useLocation();

  //   Add Booking

  const addBooking = async (newBooking) => {
    await axios.post(JSON_API_BOOKING, newBooking);
    getBooking();
  };

  // Get All Booking

  const getBooking = async () => {
    const { data } = await axios(
      `${JSON_API_BOOKING}/${window.location.search}`
    );
    dispatch({
      type: BOOKING_ACTIONS.GET_BOOKING,
      payload: data,
    });
  };

  // Edit / Details Booking

  const getBookingDetails = async (id) => {
    const { data } = await axios(`${JSON_API_BOOKING}/${id}`);
    dispatch({
      type: BOOKING_ACTIONS.GET_BOOKING_DETAILS,
      payload: data,
    });
  };

  const saveEditedBooking = async (newBooking) => {
    await axios.patch(`${JSON_API_BOOKING}/${newBooking.id}`, newBooking);
    getBooking();
  };

  // Delete

  const deleteBooking = async (id) => {
    await axios.delete(`${JSON_API_BOOKING}/${id}`);
    getBooking();
  };

  const values = {
    // объект значений
    booking: state.booking,
    bookingDetails: state.bookingDetails,
    addBooking,
    getBooking,
    getBookingDetails,
    saveEditedBooking,
    deleteBooking,
  };

  return (
    <bookingContext.Provider value={values}>{children}</bookingContext.Provider>
  );
};

export default BookingContextProvider;
