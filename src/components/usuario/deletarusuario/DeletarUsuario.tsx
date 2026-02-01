import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import type Usuario from "../../../models/Usuario"
import { buscar, deletar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"

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
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-lg px-6">
        <div className="bg-black/30 backdrop-blur-md border border-white/5 p-10 shadow-xl">

          {/* Título */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white mb-4">
              CONFIRMAR EXCLUSÃO
            </h1>
            <p className="text-gray-400">
              Confirme a exclusão do usuário abaixo
            </p>
          </div>

          {/* Informações do usuário */}
          <div className="bg-white/5 border border-gray-700 p-6 mb-10">
            <p className="text-white mb-3">
              <span className="text-gray-400">Nome:</span>{" "}
              <strong>{usuario.nome}</strong>
            </p>
            <p className="text-white">
              <span className="text-gray-400">Email:</span>{" "}
              <strong>{usuario.usuario}</strong>
            </p>
          </div>

          {/* Ações */}
          <div className="flex gap-6">
            <button
              onClick={deletarUsuario}
              disabled={isLoading}
              className="w-1/2 h-14 bg-green-500 hover:bg-green-600 text-black font-bold transition disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ borderRadius: "2px" }}
            >
              {isLoading ? "DELETANDO..." : "CONFIRMAR"}
            </button>

            <button
              onClick={() => navigate("/listarusuarios")}
              className="w-1/2 h-14 bg-transparent border border-gray-600 text-white hover:border-green-500 transition"
              style={{ borderRadius: "2px" }}
            >
              CANCELAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeletarUsuario
