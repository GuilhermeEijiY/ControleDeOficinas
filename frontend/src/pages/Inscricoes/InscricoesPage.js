import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InscricoesPage.css';

const InscricoesPage = ({ usuario }) => {
  const navigate = useNavigate();

  const inscricoes = [
    { id: 1, titulo: 'Oficina de React', data: '2024-12-15', status: 'confirmada' },
    { id: 2, titulo: 'Oficina de Node.js', data: '2024-12-18', status: 'pendente' }
  ];

  const historico = [
    { id: 3, titulo: 'Oficina de JavaScript', data: '2024-10-15', status: 'concluida' }
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
          <h1> Minhas Inscrições</h1>
          <p>Gerencie suas inscrições</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="content-card">
          <h2>Inscrições Ativas ({inscricoes.length})</h2>
          
          <div className="inscricoes-list">
            {inscricoes.map(insc => (
              <div key={insc.id} className="inscricao-item">
                <div className="inscricao-header">
                  <h3>{insc.titulo}</h3>
                  <span className={`status ${insc.status}`}>
                    {insc.status === 'confirmada' ? '✅ Confirmada' : '⏳ Pendente'}
                  </span>
                </div>
                <p> {new Date(insc.data).toLocaleDateString('pt-BR')}</p>
                <button className="btn btn-danger">Cancelar</button>
              </div>
            ))}
          </div>

          <h2>Histórico ({historico.length})</h2>
          <div className="historico-list">
            {historico.map(item => (
              <div key={item.id} className="historico-item">
                <h3>{item.titulo}</h3>
                <p> {new Date(item.data).toLocaleDateString('pt-BR')} -  Concluída</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InscricoesPage;