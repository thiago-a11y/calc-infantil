import React, { useState } from 'react';
import './CalculadoraInfantil.css';

const operacoes = [
  { value: '+', label: 'Somar' },
  { value: '-', label: 'Subtrair' },
  { value: '*', label: 'Multiplicar' },
  { value: '/', label: 'Dividir' },
];

const CalculadoraInfantil = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [operacao, setOperacao] = useState('');
  const [resultado, setResultado] = useState('');
  const [erro, setErro] = useState('');

  const handleNumero1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumero1(e.target.value);
  };

  const handleNumero2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumero2(e.target.value);
  };

  const handleOperacaoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOperacao(e.target.value);
  };

  const calcular = () => {
    try {
      const num1 = parseFloat(numero1);
      const num2 = parseFloat(numero2);

      if (isNaN(num1) || isNaN(num2)) {
        setErro('Preencha os campos com valores numéricos');
        return;
      }

      let resultado;
      switch (operacao) {
        case '+':
          resultado = num1 + num2;
          break;
        case '-':
          resultado = num1 - num2;
          break;
        case '*':
          resultado = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            setErro('Não é possível dividir por zero');
            return;
          }
          resultado = num1 / num2;
          break;
        default:
          setErro('Operação inválida');
          return;
      }

      setResultado(resultado.toString());
      setErro('');
    } catch (error) {
      setErro('Ocorreu um erro durante a execução');
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
          {operacoes.map((op) => (
            <option key={op.value} value={op.value}>
              {op.label}
            </option>
          ))}
        </select>
      </div>
      <button onClick={calcular}>Calcular</button>
      <div className="resultado">
        <label>Resultado:</label>
        <p>{resultado}</p>
        {erro && <p style={{ color: 'red' }}>{erro}</p>}
      </div>
    </div>
  );
};

export default CalculadoraInfantil;