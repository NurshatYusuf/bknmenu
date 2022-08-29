import React, { useState, useEffect } from "react";
import table from "../../images/dining-table.png";
import bookedTable from "../../images/dining-table-booked.png";

import { useBooking } from "../../contexts/BookingContextProvider";

const Table = ({ id }) => {
  const { setModal, setId, setModalBooking, getBooking, booking } =
    useBooking();

  const [tableBooking, setTableBooking] = useState(booking);

  useEffect(() => {
    getBooking();
  }, []);

  useEffect(() => {
    setTableBooking(booking);
  }, [booking]);

  const checkBookingTable = (id) => {
    return tableBooking.some((item) => item.id === id);
  };

  return (
    <>
      {tableBooking.length && checkBookingTable(id) ? (
        <span
          className="booking__table"
          onClick={() => {
            setId(id);
            setModalBooking(true);
          }}
        >
          <img className="table__img" src={bookedTable} alt="No connect" />
        </span>
      ) : (
        <span
          className="booking__table"
          onClick={() => {
            setId(id);
            setModal(true);
          }}
        >
          <img className="table__img" src={table} alt="No connect" />
        </span>
      )}
    </>
  );
};

export default Table;
