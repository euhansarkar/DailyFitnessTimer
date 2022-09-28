import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Exercise.css'

const Exercise = ({addTimer, exercise}) => {
    const {image, name, time, description} = exercise;
    return (
        <div className='exercise-container'>
            <img className='img-fluid' src={image} alt="" />
            <div className="exercise-info">
                <h2 className='participent-name'>{name}</h2>
                <p className="zym-description">{description}</p>
                <h5>Time Required: {time}m</h5>
            </div>
            <div className='d-flex'>
                <button onClick={() => addTimer(exercise)} className='btn-finish'> <span className='me-2'>add to finished</span>
                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                </button>
                
                </div>
        </div>
    );
};

export default Exercise;