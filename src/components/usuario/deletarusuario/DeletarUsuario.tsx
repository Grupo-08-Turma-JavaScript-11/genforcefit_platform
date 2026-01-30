import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import type Usuario from "../../../models/Usuario"
import { buscar, deletar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { ClipLoader } from "react-spinners"

function DeletarUsuario({ onClose }: { onClose?: () => void }) {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const [usuario, setUsuario] = useState<Usuario>({} as Usuario)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function buscarPorId(id: string) {
    try {
      await buscar(`/usuarios/${id}`, setUsuario)
    } catch {
      ToastAlerta("Erro ao buscar o usuário.", "erro")
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
      retornar()
    } catch {
      ToastAlerta("Erro ao deletar o usuário.", "erro")
    } finally {
      setIsLoading(false)
    }
  }

  function retornar() {
    if (onClose) {
      onClose()
    } else {
      navigate("/listarcaronas")
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">

      {/* FUNDO */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9A8D4] via-[#FDBA74] to-[#F37021]" />

      {/* CARD */}
      <div
        className="
          relative z-10 w-full max-w-xl
          bg-white/80 backdrop-blur-md
          border border-white/40
          rounded-3xl shadow-2xl
          p-8 flex flex-col gap-6
        "
      >
        <h1 className="text-4xl font-extrabold text-center text-[#1E3A8A]">
          Deletar usuário
        </h1>

        <p className="text-center text-[#1E3A8A]/80 font-medium">
          Você tem certeza que deseja apagar este usuário?
        </p>

        {/* INFO */}
        <div className="flex flex-col gap-2 text-lg text-[#1E3A8A] font-semibold">
          <span>👤 Nome: {usuario.nome}</span>
          <span>📧 Email: {usuario.usuario}</span>
          <span>🎓 Tipo: {usuario.tipo}</span>
        </div>

        {/* BOTÕES */}
        <div className="flex gap-4 mt-4">
          <button
            type="button"
            onClick={deletarUsuario}
            disabled={isLoading}
            className="
              flex-1 rounded-full bg-[#F37021]
              py-3 text-white font-black text-lg
              shadow-lg hover:bg-[#d65d18]
              transition-all hover:-translate-y-1 active:scale-95
              flex items-center justify-center
            "
          >
            {isLoading ? <ClipLoader color="#ffffff" size={22} /> : "Sim, deletar"}
          </button>

          <button
            type="button"
            onClick={retornar}
            className="
              flex-1 rounded-full bg-[#1E3A8A]
              py-3 text-white font-black text-lg
              shadow-lg hover:bg-[#162c63]
              transition-all hover:-translate-y-1 active:scale-95
            "
          >
            Cancelar
          </button>
        </div>
      </div>
    </section>
  )
}

export default DeletarUsuario
