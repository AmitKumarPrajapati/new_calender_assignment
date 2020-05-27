import React from "react";
import SingleCard from "../SingleCard";
import "./CalenderRow.css";

/* Calender row component*/
const CalenderRow = (props) => {
  const { rowData, setDialogOpen } = props;
  return (
    <div className="calender-row">
      {rowData.map((row) => {
        const { time, status, day, date, month } = row;
        return (
          <div>
            <SingleCard
              setDialogOpen={setDialogOpen}
              time={time}
              status={status}
              day={day}
              date={date}
              month={month}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CalenderRow;
