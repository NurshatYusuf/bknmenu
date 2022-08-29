import React, { useEffect, useState } from "react";
import "../../styles/modal/modal.css";
import { useBooking } from "../../contexts/BookingContextProvider";

const Modal = () => {
  const { modalActive, setModal, addBooking, tableId } = useBooking();

  const [modalActiveLocal, setModalActiveLocal] = useState(false);

  const [booking, setBooking] = useState({
    data: "",
    time: "",
    number: "",
    id: "",
  });

  const handleInp = (e) => {
    let obj = {
      ...booking,
      [e.target.name]: e.target.value,
    };
    setBooking(obj);
  };

  useEffect(() => {
    setModalActiveLocal(modalActive);
  }, [modalActive]);

  useEffect(() => {
    setBooking({
      ...booking,
      id: tableId,
    });
  }, [tableId]);

  return (
    <div
      className={modalActiveLocal ? "modal active" : "modal"}
      onClick={() => setModal(false)}
    >
      <div
        className={
          modalActiveLocal ? "modal__content active" : "modal__content"
        }
        onClick={(e) => e.stopPropagation()}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="modal__content_title">Booking</h1>
        <input
          type="date"
          name="data"
          placeholder="Date"
          className="modal__content_inp"
          onChange={handleInp}
        />
        <input
          type="time"
          name="time"
          placeholder="Date"
          className="modal__content_inp"
          onChange={handleInp}
        />
        <input
          type="number"
          name="number"
          placeholder="Nuber of Person"
          className="modal__content_inp"
          onChange={handleInp}
        />
        <button
          className="modal__content_btn"
          onClick={() => {
            setModal(false);
          }}
        >
          Close
        </button>
        <button
          className="modal__content_btn"
          onClick={() => {
            addBooking(booking);
            setModal(false);
          }}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Modal;
