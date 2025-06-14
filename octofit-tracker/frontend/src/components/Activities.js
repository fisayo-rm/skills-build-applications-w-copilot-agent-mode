import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://upgraded-meme-6vgqv7vp49c49q4-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Activities</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th style={{ width: '50%' }}>Activity Type</th>
            <th style={{ width: '50%' }}>Duration</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity._id}>
              <td>{activity.activity_type}</td>
              <td>{activity.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
