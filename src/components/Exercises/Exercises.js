import React, { useEffect, useState } from "react";
import BtnCompleted from "../BtnCompleted/BtnCompleted";
import Content from "../Content/Content";
import ExDetails from "../ExDetails/ExDetails";
import Exercise from "../Exercise/Exercise";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import "./Exercises.css";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    fetch(`zym.json`)
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  const addTimerToDetails = (time) => {
    const newTimer = (parseInt(timer) + parseInt(time));
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
        <ExDetails timer={timer}></ExDetails>
        <BtnCompleted></BtnCompleted>
      </div>
      <Content></Content>
    </div>
  );
};

export default Exercises;
