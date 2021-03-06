import React, { useState } from "react";
import "./Calender.css";
import mockData from "./mockData";
import DateAndDay from "../DateAndDay";
import mockBookingData from "../CalenderRow/mockBookingData";
import CalenderRow from "../CalenderRow";
import DialogBox from "../DialogBox";

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
  const [isDialogOpen, setOpen] = useState(false);
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");
  const [close, isClose] = useState(false);
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");

  const setDialogOpen = (time, status, day, date, month) => {
    setOpen(!isDialogOpen);
    setTime(time);
    setStatus(status);
    setDay(day);
    setDate(date);
    setMonth(month);
  };

  return (
    <div
      className={
        isDialogOpen ? "calender-container-shadow" : "calender-container"
      }
    >
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
        return <CalenderRow rowData={data} setDialogOpen={setDialogOpen} />;
      })}
      <div>
        <DialogBox
          show={isDialogOpen}
          setDialogOpen={setDialogOpen}
          time={time}
          status={status}
          day={day}
          date={date}
          month={month}
        />
      </div>
    </div>
  );
};

export default Calender;
