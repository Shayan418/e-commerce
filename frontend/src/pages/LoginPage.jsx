import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/authContext';

function LoginForm() {
  const { loginUser } = useContext(AuthContext);
  return (
    <div>
      <form onSubmit={loginUser} method="POST">
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" />
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default LoginForm;
