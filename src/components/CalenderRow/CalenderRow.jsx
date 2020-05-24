import React from "react";
import SingleCard from "../SingleCard";
import "./CalenderRow.css";

/* Calender row component*/
const CalenderRow = (props) => {
  const { rowData } = props;
  return (
    <div className="calender-row">
      {rowData.map((row) => {
        const { time, status } = row;
        return (
          <div>
            <SingleCard time={time} status={status} />
          </div>
        );
      })}
    </div>
  );
};

export default CalenderRow;
