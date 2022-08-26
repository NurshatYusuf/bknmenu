import React from "react";
import Table from "../components/Booking/Table";
import RoundTable from "../components/Booking/RoundTable";
import "../styles/BookingPage.css";

const BookingPage = () => {
  const tables = [
    <Table id={"id0"} />,
    <Table id={"id1"} />,
    <RoundTable id={"id2"} />,
    <RoundTable id={"id3"} />,
    <RoundTable id={"id4"} />,
    <RoundTable id={"id5"} />,
    <RoundTable id={"id6"} />,
    <RoundTable id={"id7"} />,
    <RoundTable id={"id8"} />,
    <Table id={"id9"} />,
    <Table id={"id10"} />,
  ];

  return (
    <div className="booking-container">
      {tables.map((item, index) => (
        <div key={index} className="booking__table" id={`id${index}`}>
          {item}
        </div>
      ))}
      {/* <div className="booking__table first" >
        <Table />
      </div>
      <div className="booking__table second">
        <Table />
      </div>
      <div className="booking__table third">
        <RoundTable />
      </div>
      <div className="booking__table fourth">
        <RoundTable />
      </div>
      <div className="booking__table fifth">
        <RoundTable />
      </div>
      <div className="booking__table sixth">
        <RoundTable />
      </div>
      <div className="booking__table seventh">
        <RoundTable />
      </div>
      <div className="booking__table eigth">
        <RoundTable />
      </div>
      <div className="booking__table ninth">
        <RoundTable />
      </div>
      <div className="booking__table tenth">
        <Table />
      </div>
      <div className="booking__table eleventh">
        <Table />
      </div> */}
    </div>
  );
};

export default BookingPage;
