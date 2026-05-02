import React from 'react';

const QuantumSimulatorLink = () => {
  const divStyle = {
    textAlign: "center",
    margin: "2rem"
  };
  const linkStyle = {
    display: "inline-block",
    background: "#4caf50",
    color: "black",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    textDecoration: "none"
  };
  return (
    <div style={divStyle}>
      <a 
        href="/quantum-simulator/index.html" 
        target="_blank" 
        rel="noopener noreferrer"
        style={linkStyle}
      >
        🚀 Simulador Quântico (PQC)
      </a>
    </div>
  );
};

export default QuantumSimulatorLink;
