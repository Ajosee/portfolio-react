/*
 * Copyright (c) 2026 Antonio J.B. Silva
 * SPDX-License-Identifier: GPL-3.0-only
 */

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Verificador = () => {
  const [visitas, setVisitas] = useState(0);
  const [testesIniciados, setTestesIniciados] = useState(0);
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [etapa, setEtapa] = useState('email');
  const [respostas, setRespostas] = useState(Array(7).fill(null));
  const [score, setScore] = useState(null);
  const [percentual, setPercentual] = useState(0);
  const [frase, setFrase] = useState('');

  const perguntas = [
    { texto: "Você usa autenticação em dois fatores (2FA) nas principais contas?", opcaoNao: "❌ Não uso" },
    { texto: "Suas senhas têm 12+ caracteres com letras, números e símbolos?", opcaoNao: "❌ Senhas curtas ou repetidas" },
    { texto: "Você mantém seus sistemas e aplicativos sempre atualizados?", opcaoNao: "❌ Raramente ou nunca" },
    { texto: "Você utiliza um gerenciador de senhas criptografado?", opcaoNao: "❌ Não utilizo" },
    { texto: "Você conhece a ameaça da computação quântica e já tomou medidas de proteção?", opcaoNao: "❌ Não conheço o risco" },
    { texto: "Você utiliza criptografia de ponta a ponta em aplicações sensíveis (e-mail, mensagens)?", opcaoNao: "❌ Não uso" },
    { texto: "Você já ouviu falar sobre algoritmos pós-quânticos (CRYSTALS-Kyber) e acompanha as recomendações do NIST/ITI?", opcaoNao: "❌ Não conheço" }
  ];

  emailjs.init("7TC5If25qSsb3p-0S");

  useEffect(() => {
    let visitCount = localStorage.getItem('visitas_irq');
    visitCount = visitCount ? Number(visitCount) + 1 : 1;
    localStorage.setItem('visitas_irq', visitCount);
    setVisitas(visitCount);

    let testesCount = localStorage.getItem('testes_iniciados_irq');
    testesCount = testesCount ? Number(testesCount) : 0;
    setTestesIniciados(testesCount);
  }, []);

  const handleIniciar = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !consent || !emailRegex.test(email)) {
      alert('E-mail inválido ou consentimento não marcado.');
      return;
    }
    localStorage.setItem('email_usuario_irq', email);
    let testes = Number(localStorage.getItem('testes_iniciados_irq') || 0) + 1;
    localStorage.setItem('testes_iniciados_irq', testes);
    setTestesIniciados(testes);
    setEtapa('perguntas');
  };

  const handleResposta = (idx, valor) => {
    const novas = [...respostas];
    novas[idx] = valor === 'sim';
    setRespostas(novas);
  };

  const calcularResultado = () => {
    if (respostas.some(r => r === null)) {
      alert('Responda todas as 7 perguntas antes de calcular.');
      return;
    }
    const total = respostas.filter(r => r === true).length;
    const perc = Math.round((total / 7) * 100);
    let texto = '';
    if (total <= 2) texto = "📘 Educativa: Você ainda está no início da jornada quântica. Comece ativando o 2FA e conhecendo os riscos.";
    else if (total <= 4) texto = "🚀 Motivadora: Bom caminho! Com pequenos ajustes, sua resiliência quântica vai disparar.";
    else if (total <= 6) texto = "🧠 Inteligente: Você está acima da média. Continue acompanhando as normas do ITI.";
    else texto = "🏆 Técnica: Excelente! Você domina as práticas atuais e já pensa no futuro pós-quântico. Quem age agora protege o amanhã.";
    setScore(total);
    setPercentual(perc);
    setFrase(texto);
    setEtapa('resultado');
  };

  const enviarEmailReal = (score, frase) => {
    if (!email) {
      alert("E-mail não informado.");
      return;
    }
    const perc = Math.round((score / 7) * 100);
    emailjs.send("service_3ea5o84", "template_1g9ou0p", {
      to_email: email,
      irq: `${score}/7`,
      percentual: perc,
      frase: frase,
      data: new Date().toLocaleString("pt-BR")
    }).then(() => {
      alert("✅ Resultado enviado para seu e-mail!");
    }).catch((error) => {
      console.error(error);
      alert("❌ Falha ao enviar. Verifique suas credenciais do EmailJS.");
    });
  };

  const copiarResultado = () => {
    navigator.clipboard.writeText(`Meu IRQ: ${score}/7 (${percentual}%)\n${frase}`);
    alert('Resultado copiado!');
  };

  const compartilharWhatsApp = () => {
    const texto = `Meu IRQ: ${score}/7 (${percentual}%) - ${frase}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank');
  };

  const respondidas = respostas.filter(r => r !== null).length;

  return (
    <div className="quiz-container">
      <p>Responda <strong>7 perguntas</strong> rápidas e descubra seu Índice de Resiliência Quântica.</p>

      {etapa === 'email' && (
        <div className="email-section">
          <label>✉️ Seu e-mail (obrigatório):</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="seuemail@exemplo.com" />
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.5rem 0' }}>
            <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} /> 🔒 Li e concordo em fornecer meu e-mail (LGPD)
          </label>
          <button onClick={handleIniciar} className="btn-iniciar">▶️ Começar teste</button>
        </div>
      )}

      {etapa === 'perguntas' && (
        <>
          <div className="progresso">📊 Progresso: {respondidas}/7</div>
          <div className="barra-progresso"><div className="barra-preenchida" style={{ width: `${(respondidas / 7) * 100}%` }}></div></div>
          {perguntas.map((p, idx) => (
            <div key={idx} className="pergunta">
              <p>{idx+1}️⃣ {p.texto}</p>
              <div className="opcoes">
                <label><input type="radio" name={`q${idx}`} value="nao" onChange={() => handleResposta(idx, 'nao')} /> {p.opcaoNao}</label>
                <label><input type="radio" name={`q${idx}`} value="sim" onChange={() => handleResposta(idx, 'sim')} /> ○ Sim</label>
              </div>
            </div>
          ))}
          <button onClick={calcularResultado} className="btn-calcular">⚡ Calcular meu IRQ</button>
        </>
      )}

      {etapa === 'resultado' && (
        <div className="resultado-area">
          <div className="irq-score">Seu IRQ: {score}/7 ({percentual}%)</div>
          <div>{frase}</div>
          <div style={{ marginTop: '1rem' }}>
            <button onClick={() => enviarEmailReal(score, frase)} className="btn-enviar">📧 Enviar resultado</button>
            <button onClick={copiarResultado} className="btn-copiar">📋 Copiar resultado</button>
            <button onClick={compartilharWhatsApp} className="btn-compartilhar">📱 Compartilhar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Verificador;
