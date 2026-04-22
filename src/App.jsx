import AnaliseRisco from './components/AnaliseRisco';
import CuriosityAnimation from './components/CuriosityAnimation';
import React, { useState, useEffect } from 'react';
import Cabecalho from './components/Cabecalho';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Verificador from './components/Verificador';
import { projetos } from './data/projetosData';

function App() {
  const [visitas, setVisitas] = useState(0);
  const [testesIniciados, setTestesIniciados] = useState(0);

  useEffect(() => {
    const atualizarContadores = () => {
      const visitCount = localStorage.getItem('visitas_irq');
      setVisitas(visitCount ? Number(visitCount) : 0);
      const testesCount = localStorage.getItem('testes_iniciados_irq');
      setTestesIniciados(testesCount ? Number(testesCount) : 0);
    };

    atualizarContadores();
    window.addEventListener('storage', atualizarContadores);
    return () => window.removeEventListener('storage', atualizarContadores);
  }, []);

  return (
    <div>
      <Cabecalho />
      <CuriosityAnimation />
      <main>
       <AnaliseRisco />
        <Sobre />
        <Projetos projetos={projetos} />
        <Verificador />
      </main>
      <footer>
        <p>© 2026 – Antonio J.B. Silva | Verificador de Segurança Pessoal – Era Quântica</p>
         <div className="footer-links">
  <a href="#">🔗 GitHub</a> | <a href="#">💼 LinkedIn</a> | <a href="#">📄 Lattes</a> | <a href="#">✉️ antonio@ajbsilva.tec.br</a> | <a href="/privacidade.html">🔒 Privacidade (LGPD)</a>
</div>
        <div className="credito-frase">
          🛡️ Alinhado à Estratégia Nacional de Cibersegurança (Decreto 12.573/2025)<br />
          📜 Conforme normas do ITI para ICP-Brasil | 🔒 LGPD<br />
          ♿ Acessibilidade: WCAG 2.1 AA<br />
          📊 Visitantes: {visitas} | 🧪 Testes iniciados: {testesIniciados}
        </div>
        <a href="#" className="voltar-topo" id="voltarTopo">↥ Voltar ao topo</a>
      </footer>
    </div>
  );
}

export default App;
