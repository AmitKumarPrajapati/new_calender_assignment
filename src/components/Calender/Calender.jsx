import React from 'react';
import './Calender.css';
import moment from 'moment'
import DetailCard from '../DetailCard';
import mockData from './mockData';
import DateAndDay from '../DateAndDay';
import mockBookingData from '../CalenderRow/mockBookingData'
import CalenderRow from '../CalenderRow';
console.log("This is calneder row",CalenderRow)

const nineAm = mockBookingData["9 AM"];
const tenAm = mockBookingData["10 AM"];
const elevenAm = mockBookingData["11 AM"];
const twelvePm = mockBookingData["12 PM"];
const onePm = mockBookingData["1 PM"];


const allData = [nineAm,tenAm,elevenAm,twelvePm,onePm];
const Calender = () => {
    return(
        <div className="calender-container">
        {
            mockData.map(currentDay => {
                const { day, date } = currentDay;
                return (
                    <div>
                        <div className="tail.Datetime" key={day}>
                            <DateAndDay 
                                day = {day}
                                date = {date} 
                            />
                        </div>
                        <div>
                            {
                                allData.map((data) => {
                                    console.log("I am here at one",data)
                                    return (
                                    <CalenderRow rowData = {data} />
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Calender;