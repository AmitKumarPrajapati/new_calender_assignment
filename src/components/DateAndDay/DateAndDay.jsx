import React from 'react';
import './DateAndDay.css';

const DateAndDay = (props) => {
    const { day, date } = props;
    return (
        <div className="day-date-head">
            <h2>{day}</h2>
            <h3 className="calender-date">{date}</h3>
        </div>
    )
}

export default DateAndDay;