import React from 'react';
import WorkoutList from './components/WorkoutList';
import WorkoutForm from './components/WorkoutForm';
import { useWorkouts } from './hooks/useWorkouts';
import { Dumbbell } from 'lucide-react';

function App() {
  const { workouts, addWorkout, updateWorkout, deleteWorkout } = useWorkouts();
  const [editingWorkout, setEditingWorkout] = React.useState(null);

  const handleEdit = (workout) => {
    setEditingWorkout(workout);
  };

  const cancelEdit = () => {
    setEditingWorkout(null);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>
          <Dumbbell style={{ verticalAlign: 'middle', marginRight: '0.25rem' }} size={36} />
          FitSync
        </h1>
        <p>Your Minimalist Training Log</p>
      </header>

      <main>
        <WorkoutForm 
          addWorkout={addWorkout} 
          updateWorkout={updateWorkout}
          editingWorkout={editingWorkout}
          cancelEdit={cancelEdit}
        />
        <WorkoutList 
          workouts={workouts} 
          onEdit={handleEdit} 
          onDelete={deleteWorkout} 
        />
      </main>
    </div>
  );
}

export default App;
