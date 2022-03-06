import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginForm from './pages/LoginPage';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/authContext';

import Newheader from './components/navbar/index';
import RegisterForm from './pages/RegisterPage';
import PublicRoute from './utils/PublicRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Newheader />
        <Routes>
          <Route path="/" exact element={<PublicRoute outlet={<HomePage />} />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="logout" />
          <Route path="register" element={<PublicRoute outlet={<RegisterForm />} />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
