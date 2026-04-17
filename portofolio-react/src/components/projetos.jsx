
function Projetos({ projetos }) {
  return (
    <section id="projetos" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', borderLeft: '5px solid #4caf50', paddingLeft: '1rem' }}>📡 Meus Projetos Estratégicos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {projetos.map(projeto => (
          <div key={projeto.id} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <img src={projeto.imagem} alt={projeto.titulo} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '1.5rem' }}>
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {projeto.tecnologias.map((tech, idx) => (
                  <span key={idx} style={{ background: '#e0e7ff', color: '#1e40af', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>{tech}</span>
                ))}
              </div>
              <a href={projeto.link} target="_blank" rel="noopener noreferrer" style={{ background: '#0a2b3e', color: 'white', padding: '0.5rem 1rem', borderRadius: '30px', textDecoration: 'none', display: 'inline-block' }}>🔗 Ver no GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;