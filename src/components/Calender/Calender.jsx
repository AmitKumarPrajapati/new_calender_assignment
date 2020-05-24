import React from "react";
import "./Calender.css";
import mockData from "./mockData";
import DateAndDay from "../DateAndDay";
import mockBookingData from "../CalenderRow/mockBookingData";
import CalenderRow from "../CalenderRow";

/* Get data from moc data on the basis of key */
const eightAm = mockBookingData["8 AM"];
const nineAm = mockBookingData["9 AM"];
const tenAm = mockBookingData["10 AM"];
const elevenAm = mockBookingData["11 AM"];
const twelvePm = mockBookingData["12 PM"];
const onePm = mockBookingData["1 PM"];

/* Store all the data in single array for using iterator */
const allData = [eightAm, nineAm, tenAm, elevenAm, twelvePm, onePm];

/* Calender component */
const Calender = () => {
  return (
    <div className="calender-container">
      <div className="calender-head">
        {mockData.map((currentDay) => {
          const { day, date } = currentDay;
          return (
            <div className="single-head">
              <div className="tail.Datetime" key={day}>
                <DateAndDay day={day} date={date} />
              </div>
            </div>
          );
        })}
      </div>
      {allData.map((data) => {
        console.log("I am here at one", data);
        return <CalenderRow rowData={data} />;
      })}
    </div>
  );
};

export default Calender;
