
function Cabecalho() {
  return (
    <header style={{ backgroundColor: '#0a2b3e', color: 'white', padding: '1.5rem 2rem', textAlign: 'center' }}>
      <h1>ANTONIO J.B. SILVA</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>
        Pesquisador em criptografia pós-quântica | Desenvolvedor para a soberania digital
      </p>
      <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
        🇧🇷 Brasil | ⚛️ Pós-Quântico | 🛡️ E-Ciber
      </p>
      <nav style={{ marginTop: '1rem' }}>
        <a href="#sobre" style={{ color: 'white', margin: '0 1rem' }}>Sobre</a>
        <a href="#projetos" style={{ color: 'white', margin: '0 1rem' }}>Projetos</a>
      </nav>
    </header>
  );
}

export default Cabecalho;