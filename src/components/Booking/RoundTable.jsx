import React, { useState, useEffect } from "react";
import table from "../../images/round-table.png";
import bookedTable from "../../images/booked-round-table.png";

import { useBooking } from "../../contexts/BookingContextProvider";

const Table = ({ id }) => {
  const { setModal, setId, getBooking, booking } = useBooking();

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
          // onClick={() => {
          //   // setModal(true);
          //   // setId(id);
          // }}
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
