import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users`);
      setUsers(data);
    };

    fetchUsers();
  }, []);

  // Add a new user
  const addUser = async () => {
    try {
      const newUser = { name, email };
      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users`, newUser);
      setUsers([...users, data]);  // Update the users list
      setName('');  // Clear input fields after adding
      setEmail('');
    } catch (error) {
      console.error('Error adding user', error);
    }
  };

  return (
    <div>
      <h1>User List</h1>

      {/* Form to add a new user */}
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={addUser}>Add User</button>
      </div>

      {/* List of users */}
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
