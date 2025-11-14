import React, { useState } from 'react';
import './StudentPanel.css';

const StudentPanel = () => {
  const [oficinas, setOficinas] = useState([
    { 
      id: 1, 
      titulo: 'Oficina de React', 
      descricao: 'Aprenda os fundamentos do React.js', 
      data: '2024-12-01', 
      vagas: 20, 
      inscritos: 15,
      professor: 'Prof. Silva',
      inscrito: false
    },
    { 
      id: 2, 
      titulo: 'Oficina de Node.js', 
      descricao: 'Desenvolvimento backend com Node.js', 
      data: '2024-12-05', 
      vagas: 15, 
      inscritos: 10,
      professor: 'Prof. Costa',
      inscrito: true
    }
  ]);

  const [minhasInscricoes, setMinhasInscricoes] = useState(
    oficinas.filter(o => o.inscrito)
  );

  const handleInscrever = (oficinaId) => {
    const oficinasAtualizadas = oficinas.map(oficina => 
      oficina.id === oficinaId 
        ? { ...oficina, inscrito: true, inscritos: oficina.inscritos + 1 }
        : oficina
    );
    
    setOficinas(oficinasAtualizadas);
    setMinhasInscricoes(oficinasAtualizadas.filter(o => o.inscrito));
  };

  const handleCancelarInscricao = (oficinaId) => {
    const oficinasAtualizadas = oficinas.map(oficina => 
      oficina.id === oficinaId 
        ? { ...oficina, inscrito: false, inscritos: oficina.inscritos - 1 }
        : oficina
    );
    
    setOficinas(oficinasAtualizadas);
    setMinhasInscricoes(oficinasAtualizadas.filter(o => o.inscrito));
  };

  return (
    <div className="student-panel">
      <div className="panel-section">
        <h3> Oficinas Disponíveis</h3>
        <div className="offices-grid">
          {oficinas.map(oficina => (
            <div key={oficina.id} className="office-card">
              <h4>{oficina.titulo}</h4>
              <p className="office-description">{oficina.descricao}</p>
              <p> {oficina.professor}</p>
              <p> {new Date(oficina.data).toLocaleDateString()}</p>
              <p> {oficina.inscritos}/{oficina.vagas} vagas</p>
              
              {oficina.inscrito ? (
                <button 
                  className="btn-cancel"
                  onClick={() => handleCancelarInscricao(oficina.id)}
                >
                   Inscrito - Cancelar
                </button>
              ) : (
                <button 
                  className="btn-enroll"
                  onClick={() => handleInscrever(oficina.id)}
                  disabled={oficina.inscritos >= oficina.vagas}
                >
                  {oficina.inscritos >= oficina.vagas ? 'Vagas Esgotadas' : 'Inscrever-se'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="panel-section">
        <h3> Minhas Inscrições</h3>
        {minhasInscricoes.length === 0 ? (
          <p className="no-data">Você não está inscrito em nenhuma oficina.</p>
        ) : (
          <div className="my-enrollments">
            {minhasInscricoes.map(oficina => (
              <div key={oficina.id} className="enrollment-card">
                <h4>{oficina.titulo}</h4>
                <p> {new Date(oficina.data).toLocaleDateString()}</p>
                <p> {oficina.professor}</p>
                <button 
                  className="btn-cancel"
                  onClick={() => handleCancelarInscricao(oficina.id)}
                >
                  Cancelar Inscrição
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentPanel;