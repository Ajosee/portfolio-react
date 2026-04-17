
function Sobre() {
  return (
    <section id="sobre" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', borderLeft: '5px solid #4caf50', paddingLeft: '1rem', textAlign: 'left' }}>Sobre mim</h2>
      <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', marginTop: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <p style={{ fontStyle: 'italic', fontSize: '1.2rem', marginBottom: '1rem' }}>
          “A segurança digital é um direito. Na era quântica, ela será uma questão de soberania.”
        </p>
        <p>
          Com a iminente chegada do primeiro computador quântico brasileiro (2026) e a crescente ameaça do Q-Day, 
          criei o primeiro <strong>Verificador de Resiliência Quântica (IRQ)</strong> do país. Minha missão é antecipar 
          vulnerabilidades e capacitar cidadãos com ferramentas práticas, alinhadas à Estratégia Nacional de 
          Cibersegurança (E-Ciber) e às normas do ITI.
        </p>
      </div>
    </section>
  );
}

export default Sobre;