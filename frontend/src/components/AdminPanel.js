import React, { useState } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  const [oficinas, setOficinas] = useState([
    { id: 1, titulo: 'Oficina de React', data: '2024-12-01', vagas: 20, inscritos: 15 },
    { id: 2, titulo: 'Oficina de Node.js', data: '2024-12-05', vagas: 15, inscritos: 10 }
  ]);

  const [novaOficina, setNovaOficina] = useState({ titulo: '', data: '', vagas: '' });

  const handleCriarOficina = (e) => {
    e.preventDefault();
    const oficina = {
      id: oficinas.length + 1,
      titulo: novaOficina.titulo,
      data: novaOficina.data,
      vagas: parseInt(novaOficina.vagas),
      inscritos: 0
    };
    setOficinas([...oficinas, oficina]);
    setNovaOficina({ titulo: '', data: '', vagas: '' });
  };

  return (
    <div className="admin-panel">
      <h2> Painel Administrativo</h2>
      
      <div className="admin-section">
        <h3>➕ Criar Nova Oficina</h3>
        <form onSubmit={handleCriarOficina} className="office-form">
          <input
            type="text"
            placeholder="Título da oficina"
            value={novaOficina.titulo}
            onChange={(e) => setNovaOficina({...novaOficina, titulo: e.target.value})}
            required
          />
          <input
            type="date"
            value={novaOficina.data}
            onChange={(e) => setNovaOficina({...novaOficina, data: e.target.value})}
            required
          />
          <input
            type="number"
            placeholder="Número de vagas"
            value={novaOficina.vagas}
            onChange={(e) => setNovaOficina({...novaOficina, vagas: e.target.value})}
            required
          />
          <button type="submit">Criar Oficina</button>
        </form>
      </div>

      <div className="admin-section">
        <h3> Oficinas Cadastradas</h3>
        <div className="offices-grid">
          {oficinas.map(oficina => (
            <div key={oficina.id} className="office-card">
              <h4>{oficina.titulo}</h4>
              <p> {new Date(oficina.data).toLocaleDateString()}</p>
              <p> {oficina.inscritos}/{oficina.vagas} vagas</p>
              <div className="office-actions">
                <button className="btn-primary">Ver Inscritos</button>
                <button className="btn-danger">Excluir</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="admin-section">
        <h3> Relatórios</h3>
        <div className="reports">
          <div className="report-card">
            <h4>Total de Oficinas</h4>
            <p className="report-number">{oficinas.length}</p>
          </div>
          <div className="report-card">
            <h4>Total de Inscrições</h4>
            <p className="report-number">{oficinas.reduce((acc, curr) => acc + curr.inscritos, 0)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;