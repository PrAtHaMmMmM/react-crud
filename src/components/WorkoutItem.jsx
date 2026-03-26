import React from 'react';
import { Edit2, Trash2, Clock, Flame, Calendar } from 'lucide-react';

export default function WorkoutItem({ workout, onEdit, onDelete }) {
  return (
    <div className="workout-item">
      <div className="workout-info">
        <h3>
          {workout.title}
          <span className={`type-indicator type-${workout.type}`}>
            {workout.type}
          </span>
        </h3>
        <div className="workout-meta">
          <div className="workout-meta-item">
            <Calendar size={14} />
            <span>{new Date(workout.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric'})}</span>
          </div>
          <div className="workout-meta-item">
            <Clock size={14} />
            <span>{workout.duration} min</span>
          </div>
          {workout.calories && ( // Add this check so it only renders if there's a value
            <div className="workout-meta-item">
              <Flame size={14} />
              <span>{workout.calories} kcal</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="workout-actions">
        <button 
          className="btn-icon edit" 
          onClick={() => onEdit(workout)}
          title="Edit Workout"
        >
          <Edit2 size={18} />
        </button>
        <button 
          className="btn-icon danger" 
          onClick={() => onDelete(workout.id)}
          title="Delete Workout"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
