import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Exercicio from "../../../models/Exercicio"
import { buscar, deletar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { AuthContext } from "../../../context/AuthContext"

function DeleteExercicio() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio)

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token


  async function buscarPorId(id: string) {
    try {
      await buscar(`/exercicio/${id}`, setExercicio, {
        headers: { Authorization: token },
      })
    } catch {
      ToastAlerta("Exercício não encontrado", "erro")
      navigate("/exercicios")
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "erro")
      navigate("/login")
    }
  }, [token])

  useEffect(() => {
    if (id) buscarPorId(id)
  }, [id])

  async function deletarExercicio() {
    try {
      await deletar(`/exercicio/${id}`, {
        headers: { Authorization: token },
      })
      ToastAlerta("Exercício deletado com sucesso", "sucesso")
      navigate("/exercicios")
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout()
      } else {
        ToastAlerta("Erro ao deletar exercício", "erro")
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--fit-black)] px-6">
      
      {/* Card de confirmação */}
      <div
        className="
          w-full max-w-md
          bg-black/60 backdrop-blur-md
          rounded-[20px]
          border
          p-6
          flex flex-col gap-6
          shadow-[0_8px_30px_rgba(0,0,0,0.5)]
        "
      >
        {/* Título */}
        <h1 className="text-3xl font-bold text-center text-red-500">
          Deletar Exercício
        </h1>

        <p className="text-center text-slate-300">
          Você tem certeza que deseja deletar este exercício?
        </p>

        {/* Nome */}
        <h2 className="text-xl font-bold text-center uppercase text-[var(--green-soft)]">
          {exercicio.nome}
        </h2>

        {/* Imagem do equipamento */}
        {exercicio.equipamento && (
          <img
            src={exercicio.equipamento}
            alt={`Equipamento do exercício ${exercicio.nome}`}
            className="
              w-56 h-36
              object-cover
              rounded-2xl
              mx-auto
              shadow-md
            "
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        )}

        {/* Ações */}
        <div className="flex justify-center gap-6 mt-4">
          <button
            onClick={deletarExercicio}
            className="
              px-8 py-3 w-[150px]
              rounded-full
              bg-red-600 text-white font-semibold
              hover:bg-red-700
              transition-all
            "
          >
            Sim, Deletar
          </button>

          <button
            onClick={() => navigate("/exercicios")}
            className="
              px-8 py-3 w-[150px]
              rounded-full
              bg-[#606b66] text-black font-semibold
              hover:bg-[#D99A41]
              transition-all
            "
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteExercicio