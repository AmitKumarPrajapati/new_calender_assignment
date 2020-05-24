import React from 'react';
import './SingleCard.css';

const SingleCard = (props) => {
    const addClassToCard = (status) => {
        if(status==="Blocked") {
            return "card-blocked-state"
        } else if(status === "Open") {
            return "card-open-state"
        } return "card-box"
    }

    const { time, status } = props;
    console.log("I am tha status",status);
    return (
        <div className= { addClassToCard(status)}>
            <h3>{time}</h3>
            <h3>{status}</h3>
        </div>
    )
}

export default SingleCard;