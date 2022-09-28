import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Exercises.css'

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const [timer, setTimer] = useState([]);

    useEffect(() => {
        fetch(`zym.json`)
        .then(res => res.json())
        .then(data => setExercises(data))
    }, [])

    const addTimerToDetails = (exercise) => {
        console.log(exercise)
        const newTimer = [...timer, exercise];
        setTimer(newTimer)
    }

    return (
        <div className='exercises-container'>
            {
                exercises.map(exercise => <Exercise 
                    addTimer={addTimerToDetails} 
                    key={exercise.id} 
                    exercise={exercise}
                    ></Exercise>)
            }
        </div>
    );
};

export {Exercises};