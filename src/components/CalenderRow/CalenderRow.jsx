import React from 'react';
import SingleCard from '../SingleCard'

console.log("Hello this is calender app");

const CalenderRow = (props) => {
    console.log("------------------>>>>>>>>>>>>>>>>",props.rowData)
    const { rowData } = props;
    return(
        <div>
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