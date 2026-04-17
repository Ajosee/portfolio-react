
import Cabecalho from './components/Cabecalho';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import { projetos } from './data/projetosData';

function App() {
  return (
    <div>
      <Cabecalho />
      <main>
        <Sobre />
        <Projetos projetos={projetos} />
      </main>
    </div>
  );
}

export default App;