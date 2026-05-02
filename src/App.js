import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.location.href = '/quantum-simulator/index.html';
  }, []);
  return <div>Carregando simulador quântico...</div>;
}

export default App;
