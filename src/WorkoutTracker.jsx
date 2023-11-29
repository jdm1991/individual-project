import { useState } from "react";
import "./WorkoutTracker.css";

export default function WorkoutTracker() {
  const [workouts, setWorkouts] = useState([]); 
  const [currentWorkout, setCurrentWorkout] = useState({
    date: "",
    exercises: [{ // Initialize with one blank exercise
      bodyArea: "upper",
      name: "",
      weight: null, // Initialize with null
      reps: null,  // Initialize with null
      sets: null,  // Initialize with null
    }],
  });

  const updateExercise = (index, key, value) => {
    // Update an exercise at a specific index
    const updatedExercises = currentWorkout.exercises.map((exercise, i) =>
      i === index ? { ...exercise, [key]: value } : exercise
    );
    setCurrentWorkout({ ...currentWorkout, exercises: updatedExercises });
  };

  const addExercise = () => {
    // Add a new blank exercise
    setCurrentWorkout({
      ...currentWorkout,
      exercises: [
        ...currentWorkout.exercises,
        { bodyArea: "upper", name: "", weight: null, reps: null, sets: null },
      ],
    });
  };

  const finalizeWorkout = () => {
    // Finalize the workout and add it to the workouts list
    setWorkouts([...workouts, currentWorkout]);
    // Reset currentWorkout
    setCurrentWorkout({
      date: "",
      exercises: [{ bodyArea: "upper", name: "", weight: null, reps: null, sets: null }],
    });
  };

  return (
    <div className="background-image2">
      <div className="workout-planner">
        <h2 className="tracker-header">Workout Tracker</h2>
        <div className="date-input-container">
          <input
            type="date"
            value={currentWorkout.date}
            onChange={(e) =>
              setCurrentWorkout({ ...currentWorkout, date: e.target.value })
            }
          />
        </div>

        {currentWorkout.exercises.map((exercise, index) => (
          <div className="exercise-form" key={index}>
            <select
              value={exercise.bodyArea}
              onChange={(e) =>
                updateExercise(index, "bodyArea", e.target.value)
              }
            >
              <option value="upper">Upper</option>
              <option value="lower">Lower</option>
            </select>
            <input
              type="text"
              placeholder="Exercise"
              value={exercise.name}
              onChange={(e) =>
                updateExercise(index, "name", e.target.value)
              }
            />
            <input
              type="number"
              placeholder="Weight"
              min="0" // Set minimum value to 0
              value={exercise.weight === null ? '' : exercise.weight}
              onChange={(e) =>
                updateExercise(index, "weight", e.target.value === '' ? null : e.target.value)
              }
            />
            <input
              type="number"
              placeholder="Reps"
              min="0" // Set minimum value to 0
              value={exercise.reps === null ? '' : exercise.reps}
              onChange={(e) =>
                updateExercise(index, "reps", e.target.value === '' ? null : e.target.value)
              }
            />
            <input
              type="number"
              placeholder="Sets"
              min="0" // Set minimum value to 0
              value={exercise.sets === null ? '' : exercise.sets}
              onChange={(e) =>
                updateExercise(index, "sets", e.target.value === '' ? null : e.target.value)
              }
            />
          </div>
        ))}

        <div className="button-container">
          <button className="add-exercise-btn" onClick={addExercise}>
            Add Exercise
          </button>
          <button className="finalize-workout-btn" onClick={finalizeWorkout}>
            Finalize
          </button>
        </div>

        <div className="workout-history">
          {workouts.slice(-10).map((workout, index) => (
            <div
              key={index}
              onClick={() => {
                /* display history logic */
              }}
            >
              {workout.date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
