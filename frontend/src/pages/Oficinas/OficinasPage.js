import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OficinasPage.css';

const OficinasPage = ({ usuario }) => {
  const navigate = useNavigate();

  const oficinas = [
    { id: 1, titulo: 'Oficina de React', data: '2024-12-15', vagas: 20, inscritos: 15, professor: 'Prof. Carlos Silva', status: 'disponivel' },
    { id: 2, titulo: 'Oficina de Node.js', data: '2024-12-18', vagas: 15, inscritos: 10, professor: 'Prof. Ana Costa', status: 'disponivel' },
    { id: 3, titulo: 'Oficina de UI/UX', data: '2024-12-20', vagas: 25, inscritos: 25, professor: 'Prof. Mariana Lima', status: 'esgotado' }
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
          <h1> Oficinas</h1>
          <p>Encontre e participe das oficinas</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="content-card">
          <h2>Oficinas Disponíveis ({oficinas.length})</h2>
          
          <div className="oficinas-list">
            {oficinas.map(oficina => (
              <div key={oficina.id} className={`oficina-item ${oficina.status}`}>
                <div className="oficina-header">
                  <h3>{oficina.titulo}</h3>
                  <span className={`status ${oficina.status}`}>
                    {oficina.status === 'esgotado' ? ' Cheia' : ' Disponível'}
                  </span>
                </div>
                
                <div className="oficina-info">
                  <p> {oficina.professor}</p>
                  <p> {new Date(oficina.data).toLocaleDateString('pt-BR')}</p>
                  <p> {oficina.inscritos}/{oficina.vagas} vagas</p>
                </div>

                <div className="oficina-actions">
                  {usuario.tipo === 'aluno' && (
                    <button className={`btn ${oficina.status}`} disabled={oficina.status === 'esgotado'}>
                      {oficina.status === 'esgotado' ? 'Vagas Esgotadas' : 'Inscrever-se'}
                    </button>
                  )}
                  
                  {(usuario.tipo === 'admin' || usuario.tipo === 'professor') && (
                    <div className="admin-buttons">
                      <button className="btn btn-secondary">Editar</button>
                      {usuario.tipo === 'admin' && <button className="btn btn-danger">Excluir</button>}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {(usuario.tipo === 'admin' || usuario.tipo === 'professor') && (
            <button className="btn btn-primary create-btn"> Criar Nova Oficina</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OficinasPage;