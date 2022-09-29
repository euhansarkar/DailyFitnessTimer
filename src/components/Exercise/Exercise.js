import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Exercise.css'

const Exercise = ({addTimer, exercise}) => {
    const {image, name, time, description} = exercise;
    return (
        <div className='exercise-container'>
            <img src={image} className="img-fluid" alt="" />
            <div className="exercise-info">
                <h2 className='participent-name'>{name}</h2>
                <p className="zym-description">{description.slice(0, 150)}</p>
                <h5>Time Required: {time}m</h5>
            </div>
            <div className='d-flex'>
                <button onClick={() => addTimer(time)} className='btn-finish'> <span className='me-2'>add to finished</span>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
                
                </div>
        </div>
    );
};

export default Exercise;