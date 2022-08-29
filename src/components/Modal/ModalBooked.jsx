import React, { useEffect, useState } from "react";
import "../../styles/modal/modal-booked.css";
import { useBooking } from "../../contexts/BookingContextProvider";

const ModalBooked = () => {
  const {
    modalBookingActive,
    setModalBooking,
    getBooking,
    deleteBooking,
    tableId,
    booking,
  } = useBooking();

  const [modalActiveLocal, setModalActiveLocal] = useState(false);

  const [bookingLocal, setBookingLocal] = useState([]);

  useEffect(() => {
    setModalActiveLocal(modalBookingActive);
  }, [modalBookingActive]);

  useEffect(() => {
    getBooking();
  }, []);

  useEffect(() => {
    const table = booking.filter((item) => item.id === tableId);
    setBookingLocal(table);
  }, [tableId]);

  useEffect(() => {
    const table = booking.filter((item) => item.id === tableId);
    setBookingLocal(table);
  }, [booking]);

  return (
    <div
      className={modalActiveLocal ? "modal-booking active" : "modal-booking"}
      onClick={() => setModalBooking(false)}
    >
      {bookingLocal.length === 1 ? (
        <div
          className={
            modalActiveLocal
              ? "modal-booking__content active"
              : "modal-booking__content"
          }
          onClick={(e) => e.stopPropagation()}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="modal-booking__content_title">Booking</h1>

          <p className="modal-booking__content_p">
            {" "}
            Date: {bookingLocal[0].data}
          </p>
          <p className="modal-booking__content_p">
            Time: {bookingLocal[0].time}
          </p>
          <p className="modal-booking__content_p">
            Number of people: {bookingLocal[0].number}
          </p>
          <button
            className="modal-booking__content_btn"
            onClick={() => {
              setModalBooking(false);
            }}
          >
            Close
          </button>
          <button
            className="modal-booking__content_btn"
            onClick={() => {
              console.log(tableId);
              deleteBooking(tableId);
              setBookingLocal([]);
              setModalBooking(false);
            }}
          >
            Delete
          </button>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default ModalBooked;
