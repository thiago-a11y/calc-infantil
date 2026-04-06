import { useState } from "react"

const BICHINHOS = ["🐱", "🐶", "🐰", "🦊", "🐻", "🐼", "🐸", "🦁", "🐯"]

export default function App() {
  const [n1, setN1] = useState("")
  const [n2, setN2] = useState("")
  const [op, setOp] = useState("")
  const [resultado, setResultado] = useState<string | null>(null)
  const [bichinho, setBichinho] = useState("🐱")
  const [acertos, setAcertos] = useState(0)

  const calcular = () => {
    const a = parseFloat(n1), b = parseFloat(n2)
    if (isNaN(a) || isNaN(b) || !op) return
    let r = 0
    if (op === "+") r = a + b
    else if (op === "-") r = a - b
    else if (op === "x") r = a * b
    else if (op === "/") r = b !== 0 ? a / b : 0
    setResultado(Number.isInteger(r) ? String(r) : r.toFixed(2))
    setAcertos(prev => prev + 1)
    setBichinho(BICHINHOS[Math.floor(Math.random() * BICHINHOS.length)])
  }

  const limpar = () => { setN1(""); setN2(""); setOp(""); setResultado(null) }

  const operacoes = [
    { simbolo: "+", cor: "bg-green-400", label: "Somar" },
    { simbolo: "-", cor: "bg-blue-400", label: "Subtrair" },
    { simbolo: "x", cor: "bg-yellow-400", label: "Multiplicar" },
    { simbolo: "/", cor: "bg-red-400", label: "Dividir" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 via-pink-100 to-yellow-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">

        <div className="text-center mb-6">
          <div className="text-6xl mb-2 animate-bounce">{bichinho}</div>
          <h1 className="text-2xl font-bold text-purple-700">Calculadora dos Bichinhos</h1>
          <p className="text-sm text-purple-500">Aprenda matematica brincando!</p>
          {acertos > 0 && (
            <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-300 text-yellow-800 text-xs font-bold">
              ⭐ {acertos} calculos!
            </div>
          )}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 space-y-4 border-4 border-purple-300">

          <div>
            <label className="text-sm font-bold text-purple-600 mb-1 block">Primeiro numero 🔢</label>
            <input type="number" value={n1} onChange={e => setN1(e.target.value)}
              placeholder="Digite aqui..."
              className="w-full px-4 py-3 rounded-2xl text-lg text-center font-bold border-3 border-purple-200 focus:border-purple-500 focus:outline-none bg-purple-50" />
          </div>

          <div>
            <label className="text-sm font-bold text-purple-600 mb-2 block">Operacao ✨</label>
            <div className="grid grid-cols-4 gap-2">
              {operacoes.map(o => (
                <button key={o.simbolo} onClick={() => setOp(o.simbolo)}
                  className={`py-3 rounded-2xl text-xl font-bold text-white transition-all active:scale-90 ${
                    op === o.simbolo ? o.cor + " scale-110 shadow-lg ring-4 ring-white" : "bg-gray-300 hover:" + o.cor
                  }`}>
                  {o.simbolo}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-bold text-purple-600 mb-1 block">Segundo numero 🔢</label>
            <input type="number" value={n2} onChange={e => setN2(e.target.value)}
              placeholder="Digite aqui..."
              className="w-full px-4 py-3 rounded-2xl text-lg text-center font-bold border-3 border-purple-200 focus:border-purple-500 focus:outline-none bg-purple-50" />
          </div>

          <div className="flex gap-2">
            <button onClick={calcular}
              className="flex-1 py-3 rounded-2xl text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg hover:shadow-xl transition-all active:scale-95">
              Calcular! 🎉
            </button>
            <button onClick={limpar}
              className="px-4 py-3 rounded-2xl text-lg font-bold bg-gray-200 text-gray-500 hover:bg-gray-300 transition-all active:scale-95">
              🧹
            </button>
          </div>

          {resultado !== null && (
            <div className="bg-gradient-to-r from-yellow-200 to-orange-200 rounded-2xl p-4 text-center border-2 border-yellow-400">
              <div className="text-sm text-yellow-700 font-bold mb-1">Resultado:</div>
              <div className="text-4xl font-bold text-yellow-800">{resultado}</div>
              <div className="text-lg mt-1">{bichinho} Muito bem!</div>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-purple-400 mt-4">Feito com ❤️ pelo Synerium Factory</p>
      </div>
    </div>
  )
}
