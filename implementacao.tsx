import React, { useState } from 'react';
import './CalculadoraInfantil.css';

interface CalculadoraInfantilProps {
  // props
}

const CalculadoraInfantil: React.FC<CalculadoraInfantilProps> = () => {
  const [numero1, setNumero1] = useState<number | null>(null);
  const [numero2, setNumero2] = useState<number | null>(null);
  const [operacao, setOperacao] = useState<string>('');
  const [resultado, setResultado] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const handleNumero1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = parseInt(e.target.value, 10);
    if (!isNaN(valor)) {
      setNumero1(valor);
      setErro(null);
    } else {
      setErro('Valor inválido');
    }
  };

  const handleNumero2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = parseInt(e.target.value, 10);
    if (!isNaN(valor)) {
      setNumero2(valor);
      setErro(null);
    } else {
      setErro('Valor inválido');
    }
  };

  const handleOperacaoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOperacao(e.target.value);
    setErro(null);
  };

  const calcular = () => {
    if (numero1 !== null && numero2 !== null && operacao !== '') {
      let resultado;
      switch (operacao) {
        case '+':
          resultado = numero1 + numero2;
          break;
        case '-':
          resultado = numero1 - numero2;
          break;
        case '*':
          resultado = numero1 * numero2;
          break;
        case '/':
          if (numero2 !== 0) {
            resultado = numero1 / numero2;
          } else {
            setErro('Erro: divisão por zero');
            return;
          }
          break;
        default:
          setErro('Operação inválida');
          return;
      }
      setResultado(resultado.toString());
      setErro(null);
    } else {
      setErro('Preencha todos os campos');
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
        <input type="number" value={numero1 !== null ? numero1.toString() : ''} onChange={handleNumero1Change} />
      </div>
      <div className="campo-numero2">
        <label>Numero 2:</label>
        <input type="number" value={numero2 !== null ? numero2.toString() : ''} onChange={handleNumero2Change} />
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
        <p>{resultado !== null ? resultado : ''}</p>
        {erro !== null && <p style={{ color: 'red' }}>{erro}</p>}
      </div>
    </div>
  );
};

export default CalculadoraInfantil;