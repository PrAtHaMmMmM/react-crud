import React from 'react';
import WorkoutItem from './WorkoutItem';

export default function WorkoutList({ workouts, onEdit, onDelete }) {
  if (workouts.length === 0) {
    return (
      <div className="empty-state">
        <p>No workouts logged yet. Start crushing your goals!</p>
      </div>
    );
  }

  return (
    <div className="workout-list">
      {workouts.map(workout => (
        <WorkoutItem 
          key={workout.id} 
          workout={workout} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
}
