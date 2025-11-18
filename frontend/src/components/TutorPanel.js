import React from 'react';
import './TutorPanel.css';

const TutorPanel = () => {
  const oficinas = [
    { id: 1, titulo: 'Oficina de React', data: '2024-12-01', professor: 'Prof. Silva' },
    { id: 2, titulo: 'Node.js Básico', data: '2024-12-08', professor: 'Prof. Costa' }
  ];

  return (
    <div className="tutor-panel">
      <h2> Painel do Tutor</h2>
      
      <div className="panel-section">
        <h3> Oficinas que Participo</h3>
        <div className="offices-grid">
          {oficinas.map(oficina => (
            <div key={oficina.id} className="office-card">
              <h4>{oficina.titulo}</h4>
              <p> {oficina.professor}</p>
              <p> {new Date(oficina.data).toLocaleDateString()}</p>
              <button className="btn-primary">Ver Detalhes</button>
            </div>
          ))}
        </div>
      </div>

      <div className="panel-section">
        <h3> Tarefas</h3>
        <ul className="tasks-list">
          <li> Preparar material da Oficina de React</li>
          <li> Revisar exercícios práticos</li>
          <li> Auxiliar alunos com dúvidas</li>
        </ul>
      </div>
    </div>
  );
};

export default TutorPanel;