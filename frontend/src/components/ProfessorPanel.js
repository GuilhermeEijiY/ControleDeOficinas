import React from 'react';
import './ProfessorPanel.css';

const ProfessorPanel = () => {
  const minhasOficinas = [
    { id: 1, titulo: 'Oficina de React', data: '2024-12-01', inscritos: 15, vagas: 20 },
    { id: 2, titulo: 'JavaScript Avançado', data: '2024-12-10', inscritos: 12, vagas: 15 }
  ];

  return (
    <div className="professor-panel">
      <h2> Painel do Professor</h2>
      
      <div className="panel-section">
        <h3> Minhas Oficinas</h3>
        <div className="offices-grid">
          {minhasOficinas.map(oficina => (
            <div key={oficina.id} className="office-card">
              <h4>{oficina.titulo}</h4>
              <p> {new Date(oficina.data).toLocaleDateString()}</p>
              <p> {oficina.inscritos}/{oficina.vagas} alunos</p>
              <button className="btn-primary">Ver Lista de Alunos</button>
            </div>
          ))}
        </div>
      </div>

      <div className="panel-section">
        <h3> Estatísticas</h3>
        <div className="stats">
          <div className="stat-card">
            <h4>Total de Oficinas</h4>
            <p className="stat-number">{minhasOficinas.length}</p>
          </div>
          <div className="stat-card">
            <h4>Total de Alunos</h4>
            <p className="stat-number">
              {minhasOficinas.reduce((acc, curr) => acc + curr.inscritos, 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorPanel;