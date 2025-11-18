import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css';

const DashboardPage = ({ usuario, onLogout }) => {
  const stats = {
    oficinas: 8,
    inscricoes: 12,
    alunos: 150
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="user-info">
          <h1>Bem-vindo, {usuario.nome}! </h1>
          <p>{usuario.email} | <span className="user-type">{usuario.tipo}</span></p>
          <button onClick={onLogout} className="logout-btn"> Sair</button>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="stats-grid">
          <div className="stat-card">
            <h3> Oficinas</h3>
            <p className="number">{stats.oficinas}</p>
            <p>Disponíveis</p>
          </div>
          <div className="stat-card">
            <h3> Inscrições</h3>
            <p className="number">{stats.inscricoes}</p>
            <p>Ativas</p>
          </div>
          <div className="stat-card">
            <h3> Alunos</h3>
            <p className="number">{stats.alunos}</p>
            <p>Cadastrados</p>
          </div>
        </div>

        <div className="navigation-grid">
          <Link to="/oficinas" className="nav-card">
            <h3> Oficinas</h3>
            <p>Ver e gerenciar oficinas</p>
          </Link>
          
          <Link to="/inscricoes" className="nav-card">
            <h3> Minhas Inscrições</h3>
            <p>Gerenciar minhas inscrições</p>
          </Link>
          
          {usuario.tipo === 'admin' && (
            <Link to="/relatorios" className="nav-card">
              <h3> Relatórios</h3>
              <p>Relatórios do sistema</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;