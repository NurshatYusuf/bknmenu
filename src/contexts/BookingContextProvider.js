import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BOOKING_ACTIONS,
  JSON_API_BOOKING,
  MODAL_ACTIONS,
} from "../helpers/consts";

export const bookingContext = createContext();

// func вызова контекста

export const useBooking = () => useContext(bookingContext);

const INIT_STATE = {
  booking: [],
  bookingDetails: null,
  modalActive: false,
  tableId: "",
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case BOOKING_ACTIONS.GET_BOOKING:
      return { ...state, booking: action.payload };
    case BOOKING_ACTIONS.GET_BOOKING_DETAILS:
      return { ...state, bookingDetails: action.payload };
    // Modal
    case MODAL_ACTIONS.GET_MODAL:
      return { ...state, modalActive: action.payload };
    case MODAL_ACTIONS.GET_ID:
      return { ...state, tableId: action.payload };
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
    console.log(newBooking);
    await axios.post(JSON_API_BOOKING, newBooking);

    getBooking();
  };

  // Get All Booking

  const getBooking = async () => {
    const { data } = await axios(JSON_API_BOOKING);
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

  // const deleteBooking = async (id) => {
  //   await axios.patch(`${JSON_API_BOOKING}/${id}`);
  //   getBooking();
  // };

  // Modal

  const setModal = (value) => {
    dispatch({
      type: MODAL_ACTIONS.GET_MODAL,
      payload: value,
    });
  };

  //  table id

  const setId = (id) => {
    dispatch({
      type: MODAL_ACTIONS.GET_ID,
      payload: id,
    });
  };

  const values = {
    // объект значений
    booking: state.booking,
    bookingDetails: state.bookingDetails,
    addBooking,
    getBooking,
    getBookingDetails,
    saveEditedBooking,
    // deleteBooking,
    //  modal
    modalActive: state.modalActive,
    tableId: state.tableId,
    setModal,
    setId,
  };

  return (
    <bookingContext.Provider value={values}>{children}</bookingContext.Provider>
  );
};

export default BookingContextProvider;
