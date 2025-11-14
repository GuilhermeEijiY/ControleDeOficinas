import React from 'react';
import LoginForm from '../../components/LoginForm';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  return (
    <div className="login-page">
      <div className="login-header">
        <h1> Sistema de Controle de Oficinas</h1>
        <p>Projeto de Extensão ELLP</p>
      </div>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;