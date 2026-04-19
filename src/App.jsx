import React from 'react';
import Cabecalho from './components/Cabecalho';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Verificador from './components/Verificador';
import { projetos } from './data/projetosData';

function App() {
  return (
    <div>
      <Cabecalho />
      <main>
        <Sobre />
        <Projetos projetos={projetos} />
        <Verificador />
      </main>
      <footer>
        <p>© 2026 – Antonio J.B. Silva | Verificador de Segurança Pessoal – Era Quântica</p>
        <div className="footer-links">
          <a href="#">🔗 GitHub</a> | <a href="#">💼 LinkedIn</a> | <a href="#">📄 Lattes</a> | <a href="#">✉️ antonio@ajbsilva.tec.br</a>
        </div>
        <div className="credito-frase">
          🛡️ Alinhado à Estratégia Nacional de Cibersegurança (Decreto 12.573/2025)<br />
          📜 Conforme normas do ITI para ICP-Brasil | 🔒 LGPD<br />
          ♿ Acessibilidade: WCAG 2.1 AA<br />
          📊 <span id="contadorVisitantes">Carregando...</span> | 🧪 <span id="contadorTestes">Carregando...</span>
        </div>
        <a href="#" className="voltar-topo" id="voltarTopo">↥ Voltar ao topo</a>
      </footer>
    </div>
  );
}

export default App;
