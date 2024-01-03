import React, { useState, useEffect } from 'react';
import './BreathingExercise.css'

function BreathingExercisesPage() {
  const [breathingExercises] = useState([
    {
      id: 1,
      title: "4-7-8 Breathing Technique",
      description: "Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds. Repeat.",
      durations: [4, 7, 8],
    },
    {
      id: 2,
      title: "Box Breathing",
      description: "Inhale, hold, exhale, hold – each for 4 seconds. Repeat.",
      durations: [4, 4, 4, 4],
    },
    {
      id: 3,
      title: "Alternate Nostril Breathing",
      description: "Close one nostril, inhale, switch, exhale through the other nostril. Repeat.",
      durations: [5, 5, 5, 5], 
    },
    {
      id: 4,
      title: "Diaphragmatic Breathing",
      description: "Focus on breathing using your diaphragm. Inhale deeply, exhale slowly.",
      durations: [6, 6], 
    },
    {
      id: 5,
      title: "Equal Breathing",
      description: "Inhale for 4 seconds, exhale for 4 seconds. Balance inhalation and exhalation.",
      durations: [4, 4], 
    },
    {
      id: 6,
      title: "Resonant or Coherent Breathing",
      description: "Breathe at a rate of 5 breaths per minute to achieve coherence.",
      durations: [15], 
    },
    
  ]);

  const [selectedExercise, setSelectedExercise] = useState(null);
  const [exerciseInProgress, setExerciseInProgress] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    let timer;
    if (exerciseInProgress) {
      timer = setInterval(() => {
        if (secondsLeft > 0) {
          setSecondsLeft(secondsLeft - 1);
        } else {
          if (currentPhase < breathingExercises[selectedExercise - 1].durations.length - 1) {
            setCurrentPhase(currentPhase + 1);
            setSecondsLeft(breathingExercises[selectedExercise - 1].durations[currentPhase + 1]);
          } else {
            stopExercise();
          }
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [exerciseInProgress, secondsLeft, currentPhase, breathingExercises, selectedExercise]);

  const startExercise = (exerciseId) => {
    setSelectedExercise(exerciseId);
    setCurrentPhase(0);
    setSecondsLeft(breathingExercises[exerciseId - 1].durations[0]);
    setExerciseInProgress(true);
  };

  const stopExercise = () => {
    setSelectedExercise(null);
    setCurrentPhase(0);
    setSecondsLeft(0);
    setExerciseInProgress(false);
  };

  return (
    <div className="breathing-exercises-page">
      <h1>Breathing Exercises</h1>
      <div className="breathing-exercises-container">
        {breathingExercises.map((exercise) => (
          <div key={exercise.id} className="breathing-exercise">
            <h2>{exercise.title}</h2>
            <p>{exercise.description}</p>
            {selectedExercise === exercise.id && exerciseInProgress ? (
              <div>
                <p>Phase: {currentPhase + 1}</p>
                <p>Time left: {secondsLeft} seconds</p>
                <button onClick={stopExercise}>Stop</button>
              </div>
            ) : (
              <button onClick={() => startExercise(exercise.id)}>Start</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


export default BreathingExercisesPage;
