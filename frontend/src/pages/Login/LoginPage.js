import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import api from "../../api/api";
import "./LoginPage.css";

// Altera o nome da prop para onLoginSuccess para refletir a nova responsabilidade
const LoginPage = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const handleLogin = async (dadosFormulario) => {
    const { email, senha, tipoUsuario } = dadosFormulario;

    const payload = {
      email: email,
      password: senha,
      role: tipoUsuario,
    };

    try {
      const response = await api.post("/auth/login", payload);

      const { token, user } = response.data;

      localStorage.setItem("authToken", token);

      onLoginSuccess({
        email: user.email,
        tipo: user.role,
        nome: user.name || user.email,
      });

      alert(`Login bem-sucedido! Bem-vindo(a), ${user.name || email}.`);

      navigate("/dashboard");
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Erro de conexão ou credenciais inválidas. Verifique se o backend está rodando na porta 3001.";
      alert(`Falha no Login: ${message}`);
    }
  };

  return (
    <div className="login-page">
      <div className="login-header">
        <h1> Sistema de Controle de Oficinas</h1>
        <p>Projeto de Extensão ELLP</p>
      </div>
      {}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
