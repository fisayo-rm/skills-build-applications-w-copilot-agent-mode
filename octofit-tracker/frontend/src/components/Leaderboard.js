import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://upgraded-meme-6vgqv7vp49c49q4-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Leaderboard</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th style={{ width: '50%' }}>Name</th>
            <th style={{ width: '50%' }}>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map(entry => (
            <tr key={entry._id}>
              <td>{entry.user.username}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
