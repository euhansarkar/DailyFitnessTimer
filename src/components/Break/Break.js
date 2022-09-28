import React from 'react';
import './Break.css'

const Break = () => {
    return (
        <div>
            <h4 className='my-4'>add a break</h4>
            <div className="break-container d-flex">
                <button className='mx-2'>10s</button>
                <button className='mx-2'>20s</button>
                <button className='mx-2'>30s</button>
                <button className='mx-2'>40s</button>
                <button className='mx-2'>50s</button>
            </div>
        </div>
    );
};

export default Break;