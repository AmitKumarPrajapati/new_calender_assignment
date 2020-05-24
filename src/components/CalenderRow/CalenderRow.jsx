import React from 'react';
import SingleCard from '../SingleCard'
import './CalenderRow.css'

console.log("Hello this is calender app");

const CalenderRow = (props) => {
    const { rowData } = props;
    return(
        <div className="calender-row">
        {
            rowData.map(row => {
                const {time,status} = row;
                return (
                    <div>
                     <SingleCard 
                        time={time}
                        status={status}
                    />
                    </div>
                )
            })
        }
        </div>
    )
}

export default CalenderRow;