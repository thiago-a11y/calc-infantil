import React, { useState } from 'react';
import './CalculadoraInfantil.css';

const CalculadoraInfantil = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [operacao, setOperacao] = useState('');
  const [resultado, setResultado] = useState('');

  const handleNumero1Change = (e) => {
    setNumero1(e.target.value);
  };

  const handleNumero2Change = (e) => {
    setNumero2(e.target.value);
  };

  const handleOperacaoChange = (e) => {
    setOperacao(e.target.value);
  };

  const calcular = () => {
    if (numero1 !== '' && numero2 !== '' && operacao !== '') {
      let resultado;
      switch (operacao) {
        case '+':
          resultado = parseInt(numero1) + parseInt(numero2);
          break;
        case '-':
          resultado = parseInt(numero1) - parseInt(numero2);
          break;
        case '*':
          resultado = parseInt(numero1) * parseInt(numero2);
          break;
        case '/':
          resultado = parseInt(numero1) / parseInt(numero2);
          break;
        default:
          resultado = 'Operação inválida';
      }
      setResultado(resultado.toString());
    } else {
      setResultado('Preencha todos os campos');
    }
  };

  return (
    <div className="calculadora-infantil">
      <h1>Calculadora Infantil</h1>
      <div className="bichinhos">
        <img src="bichinho1.png" alt="Bichinho 1" />
        <img src="bichinho2.png" alt="Bichinho 2" />
      </div>
      <div className="campo-numero1">
        <label>Numero 1:</label>
        <input type="number" value={numero1} onChange={handleNumero1Change} />
      </div>
      <div className="campo-numero2">
        <label>Numero 2:</label>
        <input type="number" value={numero2} onChange={handleNumero2Change} />
      </div>
      <div className="campo-operacao">
        <label>Operação:</label>
        <select value={operacao} onChange={handleOperacaoChange}>
          <option value="">Selecione uma operação</option>
          <option value="+">Somar</option>
          <option value="-">Subtrair</option>
          <option value="*">Multiplicar</option>
          <option value="/">Dividir</option>
        </select>
      </div>
      <button onClick={calcular}>Calcular</button>
      <div className="resultado">
        <label>Resultado:</label>
        <p>{resultado}</p>
      </div>
    </div>
  );
};

export default CalculadoraInfantil;