import React, { useState } from 'react';
import LoginPage from './pages/Login/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import './App.css';

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  const handleLogin = (dadosLogin) => {
    // Simulando login bem-sucedido
    setUsuarioLogado({
      email: dadosLogin.email,
      tipo: dadosLogin.tipoUsuario,
      nome: `Usuário ${dadosLogin.tipoUsuario}`
    });
  };

  const handleLogout = () => {
    setUsuarioLogado(null);
  };

  return (
    <div className="App">
      {!usuarioLogado ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <DashboardPage usuario={usuarioLogado} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;