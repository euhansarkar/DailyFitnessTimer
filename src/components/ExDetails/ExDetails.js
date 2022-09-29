import React, { useState } from 'react';
import './ExDetails.css'

const ExDetails = ({timer}) => {

    const [breakTime, setBreakTime] = useState(0);
console.log(breakTime);

    return (
        <div className='my-4'>
            <div>
            <h4 className='my-4'>add a break</h4>
            <div className="break-container d-flex">
                <button onClick={(e) => setBreakTime(e.target.outerText)} className='mx-2'>10</button>
                <button onClick={(e) => setBreakTime(e.target.outerText)} className='mx-2'>20</button>
                <button onClick={(e) => setBreakTime(e.target.outerText)} className='mx-2'>30</button>
                <button onClick={(e) => setBreakTime(e.target.outerText)} className='mx-2'>40</button>
                <button onClick={(e) => setBreakTime(e.target.outerText)} className='mx-2'>50</button>
            </div>
        </div>
            <h3 className='mt-3'>Exercise Details</h3>
            <div className="ex-details-info">
                <div className="ex-time d-flex justify-content-evenly">
                    <h5>Exercise time</h5>
                    <p><span className='fw-bold fs-5'>{timer}</span>minutes</p>
                </div>
                <div className="ex-break d-flex justify-content-evenly">
                    <h5>Break time</h5>
                    <p><span className='fw-bold fs-5'>{breakTime}</span>seconds</p>
                </div>
            </div>
        </div>
    );
};

export default ExDetails;