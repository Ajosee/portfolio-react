import Cabecalho from './components/Cabecalho';
import Projetos from './components/Projetos';
import { projetos } from './data/projetosData';

function App() {
  return (
    <div>
      <Cabecalho />
      <main>
        <Projetos projetos={projetos} />
      </main>
    </div>
  );
}

export default App;