import React from 'react';
import './BtnCompleted.css'
import Swal from 'sweetalert2'

const handleButton = () => {
    Swal.fire(
        'Good job!',
        'You completed tadays exercise tasks!',
        'success'
      )
}

const BtnCompleted = () => {
    return (
        <div>
            <button className='task-btn' onClick={handleButton}>Task Completed</button>
        </div>
    );
};

export default BtnCompleted;