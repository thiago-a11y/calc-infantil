import { useState } from "react";

const CalculadoraInfantil = () => {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operacao, setOperacao] = useState("");
  const [resultado, setResultado] = useState("");

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
    if (numero1 !== "" && numero2 !== "" && operacao !== "") {
      let res: number | string;
      switch (operacao) {
        case "+":
          res = parseInt(numero1) + parseInt(numero2);
          break;
        case "-":
          res = parseInt(numero1) - parseInt(numero2);
          break;
        case "*":
          res = parseInt(numero1) * parseInt(numero2);
          break;
        case "/":
          res = parseInt(numero1) / parseInt(numero2);
          break;
        default:
          res = "Operacao invalida";
      }
      setResultado(res.toString());
    } else {
      setResultado("Preencha todos os campos");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-pink-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">🧸 Calculadora Infantil 🎈</h1>
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Numero 1:</label>
          <input type="number" value={numero1} onChange={handleNumero1Change}
            className="w-full border-2 border-purple-200 rounded-lg px-3 py-2 text-lg focus:outline-none focus:border-purple-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Numero 2:</label>
          <input type="number" value={numero2} onChange={handleNumero2Change}
            className="w-full border-2 border-purple-200 rounded-lg px-3 py-2 text-lg focus:outline-none focus:border-purple-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Operacao:</label>
          <select value={operacao} onChange={handleOperacaoChange}
            className="w-full border-2 border-purple-200 rounded-lg px-3 py-2 text-lg focus:outline-none focus:border-purple-500">
            <option value="">Selecione</option>
            <option value="+">➕ Somar</option>
            <option value="-">➖ Subtrair</option>
            <option value="*">✖️ Multiplicar</option>
            <option value="/">➗ Dividir</option>
          </select>
        </div>
        <button onClick={calcular}
          className="w-full bg-purple-500 text-white font-bold py-3 rounded-lg text-lg hover:bg-purple-600 transition-colors">
          🎯 Calcular
        </button>
        {resultado && (
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 text-center">
            <span className="text-sm text-gray-600">Resultado:</span>
            <p className="text-3xl font-bold text-green-600">{resultado}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculadoraInfantil;
