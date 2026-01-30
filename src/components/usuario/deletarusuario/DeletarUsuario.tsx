import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import type Usuario from "../../../models/Usuario"
import { buscar, deletar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { ClipLoader } from "react-spinners"

function DeletarUsuario() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const [usuario, setUsuario] = useState<Usuario>({} as Usuario)
  const [isLoading, setIsLoading] = useState(false)

  async function buscarPorId(id: string) {
    try {
      await buscar(`/usuarios/${id}`, setUsuario)
    } catch {
      ToastAlerta("Erro ao buscar o usuário", "erro")
    }
  }

  useEffect(() => {
    if (id) buscarPorId(id)
  }, [id])

  async function deletarUsuario() {
    setIsLoading(true)
    try {
      await deletar(`/usuarios/${id}`)
      ToastAlerta("Usuário deletado com sucesso!", "sucesso")
      navigate("/listarusuarios")
    } catch {
      ToastAlerta("Erro ao deletar o usuário", "erro")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">

        <h1 className="text-2xl font-bold mb-4 text-center">
          Deletar usuário
        </h1>

        <p className="text-sm text-gray-600 text-center mb-6">
          Tem certeza que deseja excluir este usuário?
        </p>

        <div className="text-sm text-gray-700 space-y-2 mb-6">
          <p><strong>Nome:</strong> {usuario.nome}</p>
          <p><strong>Email:</strong> {usuario.usuario}</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={deletarUsuario}
            disabled={isLoading}
            className="w-1/2 bg-black text-white py-2 rounded hover:bg-gray-800 transition flex justify-center"
          >
            {isLoading ? <ClipLoader size={20} color="#fff" /> : "Deletar"}
          </button>

          <button
            onClick={() => navigate("/listarusuarios")}
            className="w-1/2 bg-gray-300 text-black py-2 rounded hover:bg-gray-400 transition"
          >
            Cancelar
          </button>
        </div>

      </div>
    </div>
  )
}

export default DeletarUsuario
