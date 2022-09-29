import React from 'react';

const Profile = () => {
    return (
        <div>
            <div>
            <img src="" alt="" />
            <div className="intro">
                <h5>Euhan Sarkar</h5>
                <p>Saint Petersburg, Russia</p>
            </div>
            </div>
            <div className="d-flex gap-5">
                <div className="d-flex flex-column">
                    <span><span className='fw-bolder fs-3'>75</span>kg</span>
                    <span className='fs-6'>Weight</span>
                </div>
                <div className="d-flex flex-column">
                    <span><span className='fw-bolder fs-3'>6.3</span></span>
                    <span className='fs-6'>Height</span>
                </div>
                <div className="d-flex flex-column">
                    <span><span className='fw-bolder fs-3'>25</span>yrs</span>
                    <span className='fs-6'>Age</span>
                </div>
            </div>
        </div>
    );
};

export default Profile;