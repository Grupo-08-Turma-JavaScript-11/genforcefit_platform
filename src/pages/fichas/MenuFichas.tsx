import { Link } from "react-router-dom";

function MenuFichas() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-4">
        Minhas Fichas
      </h1>

      <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-2 rounded mb-6">
        + Criar Novo Treino
      </button>

      <h2 className="text-xl font-semibold mb-3">
        Meus Treinos
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div className="bg-gray-800 p-4 rounded shadow">
          <h3 className="text-lg font-bold">Treino A</h3>
          <p>Nível: Intermediário</p>
          <p>8 exercícios</p>

          <div className="flex gap-2 mt-3">
            <button className="bg-blue-500 px-3 py-1 rounded">
              Ver
            </button>
            <button className="bg-yellow-500 px-3 py-1 rounded text-black">
              Editar
            </button>
          </div>
        </div>

      </div>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Treinos Prontos
      </h2>

      <div className="bg-gray-800 p-4 rounded shadow">
        <h3 className="text-lg font-bold">
          Corpo Inteiro - Iniciante
        </h3>
        <p className="text-sm text-green-400">
          Pré-definido
        </p>

        <button className="bg-purple-500 px-3 py-1 rounded mt-3">
          Usar Treino
        </button>
      </div>

    </div>
  );
}

export default MenuFichas;
