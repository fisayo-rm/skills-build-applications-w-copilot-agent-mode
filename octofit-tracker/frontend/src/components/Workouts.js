import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://upgraded-meme-6vgqv7vp49c49q4-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Workouts</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th style={{ width: '50%' }}>ID</th>
            <th style={{ width: '50%' }}>Name</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map(workout => (
            <tr key={workout._id}>
              <td>{workout._id}</td>
              <td>{workout.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;
