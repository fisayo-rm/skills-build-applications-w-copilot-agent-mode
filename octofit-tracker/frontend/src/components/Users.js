import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://upgraded-meme-6vgqv7vp49c49q4-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Users</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th style={{ width: '50%' }}>ID</th>
            <th style={{ width: '50%' }}>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
