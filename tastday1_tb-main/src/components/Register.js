import React, { useState } from 'react';

function Register({ setLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleRegister = () => {
    if (username && password) {
     
      localStorage.setItem('user', JSON.stringify({ username, password }));
      setSuccess('Registration successful! You can now log in.');
      setError(null);
    } else {
      setError('Please enter a valid username and password');
    }
  };

  return (
    <div >
      <h1>Register</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br></br><br></br>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br></br><br></br>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
