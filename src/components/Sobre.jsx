import React from 'react';

const Sobre = () => {
  return (
    <section id="sobre">
      <h2>🔐 Sobre mim</h2>
      <div className="sobre-container">
        <img src="/foto_trabalho.jpg" alt="Antonio J.B. Silva" className="foto-perfil" onError={(e) => e.target.src='https://via.placeholder.com/120?text=Foto'} />
        <h3>ANTONIO J.B. SILVA</h3>
        <p><strong>Pesquisador em criptografia pós-quântica | Desenvolvedor para a soberania digital</strong></p>
        <p>Com a iminente chegada do primeiro computador quântico brasileiro (2026) e a crescente ameaça do Q-Day, criei o primeiro Verificador de Resiliência Quântica (IRQ) do país. Minha missão é antecipar vulnerabilidades e capacitar cidadãos com ferramentas práticas, alinhadas à Estratégia Nacional de Cibersegurança (E-Ciber) e às normas do ITI.</p>
        <div className="frase-autor">
          “A segurança digital é um direito. Na era quântica, ela será uma questão de soberania.”
          <div className="autor-nome">(Autor desconhecido)</div>
        </div>
        <div className="bandeiras">
          <img src="/bandeira_brasil.jpg" alt="Bandeira do Brasil" className="bandeira" onError={(e) => e.target.src='https://via.placeholder.com/60?text=Brasil'} />
          <img src="/bandeira_piaui.jpg" alt="Bandeira do Piauí" className="bandeira" onError={(e) => e.target.src='https://via.placeholder.com/60?text=Piauí'} />
        </div>
        <div className="badges">
          <span className="badge">🇧🇷 Brasil</span>
          <span className="badge">⚛️ Pós-Quântico</span>
          <span className="badge">🛡️ E-Ciber</span>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
