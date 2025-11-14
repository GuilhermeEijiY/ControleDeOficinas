import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import OficinasPage from './pages/Oficinas/OficinasPage';
import InscricoesPage from './pages/Inscricoes/InscricoesPage';
import RelatoriosPage from './pages/Relatorios/RelatoriosPage';
import './App.css';

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  const handleLogin = (dadosLogin) => {
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
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/login" 
            element={
              !usuarioLogado ? 
                <LoginPage onLogin={handleLogin} /> : 
                <Navigate to="/dashboard" />
            } 
          />
          
          <Route 
            path="/dashboard" 
            element={
              usuarioLogado ? 
                <DashboardPage usuario={usuarioLogado} onLogout={handleLogout} /> : 
                <Navigate to="/login" />
            } 
          />
          
          <Route 
            path="/oficinas" 
            element={
              usuarioLogado ? 
                <OficinasPage usuario={usuarioLogado} /> : 
                <Navigate to="/login" />
            } 
          />
          
          <Route 
            path="/inscricoes" 
            element={
              usuarioLogado ? 
                <InscricoesPage usuario={usuarioLogado} /> : 
                <Navigate to="/login" />
            } 
          />
          
          <Route 
            path="/relatorios" 
            element={
              usuarioLogado && usuarioLogado.tipo === 'admin' ? 
                <RelatoriosPage usuario={usuarioLogado} /> : 
                <Navigate to="/dashboard" />
            } 
          />
          
          <Route path="/" element={<Navigate to="/login" />} />
          
          <Route path="*" element={<div className="page-not-found"><h1>404 - Página Não Encontrada</h1></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;