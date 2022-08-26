import React from "react";
import table from "../../images/round-table.png";
import bookedTable from "../../images/booked-round-table.png";

const Table = () => {
  return (
    <span className="booking__round-table">
      <img className="table__img" src={table} alt="No connect" />
    </span>
  );
};

export default Table;
