import React from 'react';

const CuriosityAnimation = () => {
  const showFact = () => {
    const facts = [
      '🇧🇷 Brasil publicou a 1ª norma pós-quântica da América Latina (IN ITI 35/2026).',
      '🛡️ A Estratégia E-Ciber (Decreto 12.573) prioriza a criptografia pós-quântica.',
      '⏳ Especialistas estimam que o Q-Day pode chegar em menos de 10 anos.',
      '🧠 O IRQ é a primeira ferramenta brasileira de resiliência quântica.'
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    alert(randomFact);
  };

  return (
    <div className="curiosity-animation">
      <div className="quantum-pulse">
        <div className="pulse-ring"></div>
        <div className="pulse-ring"></div>
        <div className="pulse-ring"></div>
        <div className="quantum-core" onClick={showFact} style={{ cursor: 'pointer' }}>⚛️</div>
      </div>
      <div className="curiosity-text">
        <p className="typewriter">O futuro da soberania digital depende de você.</p>
        <p>A computação quântica pode comprometer dados estratégicos do Brasil. Conhecer o risco é o primeiro passo para proteger o país.</p>
        <div className="progress-container">
          <div className="progress-bar"></div>
          <span className="progress-label">Brasil preparado para o Q-Day? →</span>
        </div>
      </div>
    </div>
  );
};

export default CuriosityAnimation;
