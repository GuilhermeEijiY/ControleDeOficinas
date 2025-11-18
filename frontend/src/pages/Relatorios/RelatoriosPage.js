import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RelatoriosPage.css';

const RelatoriosPage = ({ usuario }) => {
  const navigate = useNavigate();

  const relatorios = [
    { id: 1, titulo: ' Participação em Oficinas', descricao: 'Relatório de frequência dos alunos' },
    { id: 2, titulo: ' Usuários Cadastrados', descricao: 'Estatísticas de usuários por tipo' },
    { id: 3, titulo: ' Oficinas Realizadas', descricao: 'Histórico e métricas das oficinas' }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="header-content">
          <div className="header-top">
            <button className="back-btn" onClick={() => navigate('/dashboard')}>← Voltar</button>
            <div className="user-badge">
              <span className="user-role">{usuario.tipo}</span>
              <span className="user-name">{usuario.nome}</span>
            </div>
          </div>
          <h1> Relatórios</h1>
          <p>Relatórios do sistema</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="content-card">
          <h2>Relatórios Disponíveis</h2>
          
          <div className="relatorios-grid">
            {relatorios.map(rel => (
              <div key={rel.id} className="relatorio-card">
                <h3>{rel.titulo}</h3>
                <p>{rel.descricao}</p>
                <button className="btn btn-primary">Gerar Relatório</button>
              </div>
            ))}
          </div>

          <div className="estatisticas">
            <h2> Estatísticas Rápidas</h2>
            <div className="stats">
              <div className="stat">
                <h3>150</h3>
                <p>Total de Alunos</p>
              </div>
              <div className="stat">
                <h3>25</h3>
                <p>Oficinas Realizadas</p>
              </div>
              <div className="stat">
                <h3>85%</h3>
                <p>Taxa de Participação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatoriosPage;