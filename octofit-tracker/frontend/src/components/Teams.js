import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://upgraded-meme-6vgqv7vp49c49q4-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Teams</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th style={{ width: '50%' }}>ID</th>
            <th style={{ width: '50%' }}>Name</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team._id}>
              <td>{team._id}</td>
              <td>{team.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
