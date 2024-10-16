import React, { useState } from 'react';

function Login({ setLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    // Retrieve the registered user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && username === storedUser.username && password === storedUser.password) {
      setLoggedIn(true); // Successful login
      setError(null); // Clear any previous errors
    } else {
      setError('Invalid credentials'); // Show error if credentials don't match
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
