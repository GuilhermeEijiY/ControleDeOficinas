import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    tipoUsuario: 'aluno'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2> Login - Sistema de Oficinas</h2>
        
        <div className="form-group">
          <label>Tipo de Usuário:</label>
          <select 
            name="tipoUsuario" 
            value={formData.tipoUsuario}
            onChange={handleChange}
          >
            <option value="aluno">Aluno</option>
            <option value="professor">Professor</option>
            <option value="tutor">Tutor</option>
            <option value="admin">Administrador</option>
          </select>
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            placeholder="Sua senha"
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;