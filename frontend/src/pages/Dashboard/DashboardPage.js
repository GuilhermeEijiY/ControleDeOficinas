import React from 'react';
import './DashboardPage.css';

const DashboardPage = ({ usuario, onLogout }) => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="user-info">
          <h1>Bem-vindo, {usuario.nome}! 👋</h1>
          <p>Email: {usuario.email} | Tipo: {usuario.tipo}</p>
          <button onClick={onLogout} className="logout-btn">
            Sair
          </button>
        </div>
      </div>
      
      <div className="dashboard-content">
        <h2>Dashboard do {usuario.tipo}</h2>
        <div className="dashboard-card">
          <h3>Funcionalidades disponíveis:</h3>
          <p>Esta é a área do {usuario.tipo}. Aqui serão exibidas as funcionalidades específicas.</p>
          {/* Componentes específicos serão adicionados aqui depois */}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;