import React from 'react';

const SingleCard = (props) => {
    const { time, status } = props;
    console.log("################################",time,status);
    return (
        <div>
            <h3>{time}</h3>
            <h3>{status}</h3>
        </div>
    )
}

export default SingleCard;