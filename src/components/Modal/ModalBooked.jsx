import React, { useEffect, useState } from "react";
import "../../styles/modal/modal-booked.css";
import { useBooking } from "../../contexts/BookingContextProvider";

const ModalBooked = () => {
  const {
    modalBookingActive,
    setModalBooking,
    getBookingDetails,
    saveEditedBooking,
    deleteBooking,
    tableId,
    bookingDetails,
  } = useBooking();

  const [modalActiveLocal, setModalActiveLocal] = useState(false);

  const [booking, setBooking] = useState(bookingDetails);

  //   const handleInp = (e) => {
  //     let obj = {
  //       ...booking,
  //       [e.target.name]: e.target.value,
  //     };
  //     setBooking(obj);
  //   };

  useEffect(() => {
    setModalActiveLocal(modalBookingActive);
  }, [modalBookingActive]);

  useEffect(() => {
    getBookingDetails(tableId);
  }, []);

  useEffect(() => {
    setBooking(bookingDetails);
  }, [bookingDetails]);

  useEffect(() => {
    setBooking({
      ...bookingDetails,
      id: tableId,
    });
  }, [tableId]);

  //  ВОТ ТУТ ВЫХОДЯТ ВСЕ БРОНИ, ХОТЯ ПО ЗАПРОСУ ДОЛЖЕН БЫЛ ЛИШЬ 1
  console.log(bookingDetails);

  return (
    <div
      className={modalActiveLocal ? "modal-booking active" : "modal-booking"}
      onClick={() => setModalBooking(false)}
    >
      {booking ? (
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

          <p>{booking.data}</p>
          <p>{booking.time}</p>
          <p>{booking.number}</p>
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
              saveEditedBooking();
              setModalBooking(false);
            }}
          >
            Edit
          </button>
          <button
            className="modal-booking__content_btn"
            onClick={() => {
              deleteBooking({ tableId });
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
