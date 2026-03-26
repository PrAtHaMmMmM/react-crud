import { useState, useEffect } from 'react';

export function useWorkouts() {
  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem('fit_sync_workouts');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('fit_sync_workouts', JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = (workout) => {
    const newWorkout = {
      ...workout,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setWorkouts([newWorkout, ...workouts]);
  };

  const updateWorkout = (updatedWorkout) => {
    setWorkouts(workouts.map(w => w.id === updatedWorkout.id ? updatedWorkout : w));
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter(w => w.id !== id));
  };

  return { workouts, addWorkout, updateWorkout, deleteWorkout };
}
