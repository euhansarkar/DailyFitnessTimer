import React from 'react';

const ExDetails = ({timer}) => {
    console.log(timer);
    return (
        <div className='my-4'>
            <h3>Exercise Details</h3>
            <div className="ex-details-info">
                <div className="ex-time d-flex justify-content-evenly">
                    <h5>Exercise time</h5>
                    <p><span className='fw-bold fs-5'>{timer}</span>minutes</p>
                </div>
                <div className="ex-break d-flex justify-content-evenly">
                    <h5>Break time</h5>
                    <p>200seconds</p>
                </div>
            </div>
        </div>
    );
};

export default ExDetails;