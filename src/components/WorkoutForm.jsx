import React, { useState, useEffect } from 'react';
import { Plus, Save, X } from 'lucide-react';

export default function WorkoutForm({ addWorkout, updateWorkout, editingWorkout, cancelEdit }) {
  const [formData, setFormData] = useState({
    title: '',
    type: 'strength',
    duration: '',
    calories: '',
    date: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    if (editingWorkout) {
      setFormData(editingWorkout);
    } else {
      setFormData({
        title: '',
        type: 'strength',
        duration: '',
        calories: '',
        date: new Date().toISOString().split('T')[0]
      });
    }
  }, [editingWorkout]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingWorkout) {
      updateWorkout(formData);
      cancelEdit();
    } else {
      addWorkout(formData);
    }
    if (!editingWorkout) {
      setFormData({
        title: '',
        type: 'strength',
        duration: '',
        calories: '',
        date: new Date().toISOString().split('T')[0]
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Workout Name</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            className="form-control" 
            placeholder="e.g. Morning Run, Push Day..." 
            value={formData.title} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="type">Activity</label>
            <select 
              id="type" 
              name="type" 
              className="form-control" 
              value={formData.type} 
              onChange={handleChange}
            >
              <option value="strength">Strength</option>
              <option value="cardio">Cardio</option>
              <option value="flexibility">Flexibility</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              className="form-control" 
              value={formData.date} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="duration">Duration (min)</label>
            <input 
              type="number" 
              id="duration" 
              name="duration" 
              className="form-control" 
              min="1" 
              placeholder="e.g. 45" 
              value={formData.duration} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="calories">Calories (optional)</label>
            <input 
              type="number" 
              id="calories" 
              name="calories" 
              className="form-control" 
              min="0" 
              placeholder="e.g. 300" 
              value={formData.calories} 
              onChange={handleChange} 
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
          <button type="submit" className="btn btn-primary">
            {editingWorkout ? <><Save size={18} /> Update Workout</> : <><Plus size={18} /> Log Workout</>}
          </button>
          
          {editingWorkout && (
            <button type="button" className="btn btn-danger" onClick={cancelEdit}>
              <X size={18} /> Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
