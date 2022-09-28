import React, { useEffect, useState } from "react";
import Break from "../Break/Break";
import BtnCompleted from "../BtnCompleted/BtnCompleted";
import ExDetails from "../ExDetails/ExDetails";
import Exercise from "../Exercise/Exercise";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import "./Exercises.css";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [timer, setTimer] = useState([]);

  useEffect(() => {
    fetch(`zym.json`)
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  const addTimerToDetails = (exercise) => {
    console.log(exercise);
    const newTimer = [...timer, exercise];
    setTimer(newTimer);
  };

  return (
    <div className="exercises-container">
      <div className="expart-container">
      {exercises.map((exercise) => (
        <Exercise
          addTimer={addTimerToDetails}
          key={exercise.id}
          exercise={exercise}
        ></Exercise>
      ))}
      </div>
      <div className="timer-container">
        <Profile></Profile>
        <Break></Break>
        <ExDetails timer={timer}></ExDetails>
        <BtnCompleted></BtnCompleted>
      </div>
    </div>
  );
};

export default Exercises;
