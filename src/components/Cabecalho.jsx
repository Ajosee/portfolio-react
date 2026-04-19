import React from 'react';
import AcessibilidadeToolbar from './AcessibilidadeToolbar';

const Cabecalho = () => {
  return (
    <header>
      <div className="logo"><span>⚛️</span> A.J.B. Silva</div>
      <nav>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#verificador">Verificador Quântico</a></li>
        </ul>
      </nav>
      <AcessibilidadeToolbar />
    </header>
  );
};

export default Cabecalho;
