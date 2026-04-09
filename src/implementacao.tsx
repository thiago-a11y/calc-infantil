import React, { useState } from 'react';
import './CalculadoraInfantil.css';

/**
 * Lista de operações suportadas pela calculadora.
 * @typedef {Object} Operacao
 * @property {string} value - Valor da operação (ex: '+', '-', '*', '/').
 * @property {string} label - Label da operação (ex: 'Somar', 'Subtrair', 'Multiplicar', 'Dividir').
 */
const operacoes = [
  { value: '+', label: 'Somar' },
  { value: '-', label: 'Subtrair' },
  { value: '*', label: 'Multiplicar' },
  { value: '/', label: 'Dividir' },
];

/**
 * Componente CalculadoraInfantil.
 * @returns {JSX.Element} Elemento JSX do componente.
 */
const CalculadoraInfantil = () => {
  /**
   * Estado do número 1.
   * @type {string}
   */
  const [numero1, setNumero1] = useState('');

  /**
   * Estado do número 2.
   * @type {string}
   */
  const [numero2, setNumero2] = useState('');

  /**
   * Estado da operação.
   * @type {string}
   */
  const [operacao, setOperacao] = useState('');

  /**
   * Estado do resultado.
   * @type {string}
   */
  const [resultado, setResultado] = useState('');

  /**
   * Estado do erro.
   * @type {string}
   */
  const [erro, setErro] = useState('');

  /**
   * Função de callback para lidar com a mudança do número 1.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de mudança do input.
   */
  const handleNumero1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumero1(e.target.value);
  };

  /**
   * Função de callback para lidar com a mudança do número 2.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de mudança do input.
   */
  const handleNumero2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumero2(e.target.value);
  };

  /**
   * Função de callback para lidar com a mudança da operação.
   * @param {React.ChangeEvent<HTMLSelectElement>} e - Evento de mudança do select.
   */
  const handleOperacaoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOperacao(e.target.value);
  };

  /**
   * Função para calcular o resultado da operação.
   */
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