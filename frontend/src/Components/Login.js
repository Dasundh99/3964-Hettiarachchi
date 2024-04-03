import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    


    const predefinedUser = {
      email: 'dasundhammasara9@gmail.com',
      password: 'dasun', 
    };

    if (email === predefinedUser.email && password === predefinedUser.password) {
      setError(null);
      console.log('Login Successful');
      setLoggedIn(true);
    } else {
      setError('Invalid email or password');
    }
  };

  const handleEditContent = () => {
    navigate('/editcontent');
  };

  const handleAddGame = () => {
    navigate('/addgame');
  };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {loggedIn && (
        <div>
          <button onClick={handleEditContent}>Edit Content</button>
          <button onClick={handleAddGame}>Add Game</button>
        </div>
      )}
    </div>
  );
}
