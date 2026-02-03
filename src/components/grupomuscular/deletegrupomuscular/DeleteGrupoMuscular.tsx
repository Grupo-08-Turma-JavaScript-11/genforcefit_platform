import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { buscar, deletar } from "../../../services/Service"
import type GrupoMuscular from "../../../models/GrupoMuscular"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { AuthContext } from "../../../context/AuthContext"

function DeletarGrupoMuscular() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [grupoMuscular, setGrupoMuscular] = useState<GrupoMuscular>(
    {} as GrupoMuscular
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const header = {
    headers: {
      Authorization: token,
    },
  };

  async function buscarPorId(id: string) {
    try {
      setIsLoading(true);
      await buscar(`/grupoMuscular/${id}`, setGrupoMuscular, header);
    } catch (error: any) {
      if (error.response.status === 401) {
        handleLogout();
      }
      ToastAlerta("Grupo muscular não encontrado!", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (id) buscarPorId(id);
  }, [id]);

  async function deletarGrupoMuscular() {
    try {
      setIsLoading(true);
      await deletar(`/grupoMuscular/${id}`, header);
      ToastAlerta("Grupo muscular deletado com sucesso!", "sucesso");
      retornar();
    } catch (error: any) {
      if (error.response.status === 401) {
        handleLogout();
      }
      ToastAlerta("Erro ao deletar grupo muscular.", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  function retornar() {
    navigate("/grupoMuscular");
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-[#86EFAC] via-[#4ADE80] to-[#22C55E]" />

      <div className="
        relative z-10 w-full max-w-xl
        bg-white/80 backdrop-blur-md
        border border-white/40
        rounded-3xl shadow-2xl
        p-8 flex flex-col gap-6
      ">
        <h1 className="text-4xl font-extrabold text-center text-[#1E3A8A]">
          Deletar Grupo Muscular
        </h1>

        <p className="text-center text-[#1E3A8A]/80 font-medium">
          Você tem certeza que deseja deletar este grupo muscular?
        </p>

        <div className="bg-white/70 rounded-xl p-6 text-center shadow">
          <span className="text-2xl font-bold text-[#1E3A8A]">
            💪 {grupoMuscular.nome}
          </span>
          <p className="mt-2 text-[#1E3A8A]/70">
            {grupoMuscular.descricao}
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <button
            disabled={isLoading}
            onClick={deletarGrupoMuscular}
            className="
              flex-1 rounded-full bg-[#22C55E]
              py-3 text-white font-black text-lg
              shadow-lg hover:bg-[#16a34a]
              transition-all hover:-translate-y-1 active:scale-95
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {isLoading ? "Deletando..." : "Sim, deletar"}
          </button>

          <button
            disabled={isLoading}
            onClick={retornar}
            className="
              flex-1 rounded-full bg-[#1E3A8A]
              py-3 text-white font-black text-lg
              shadow-lg hover:bg-[#162c63]
              transition-all hover:-translate-y-1 active:scale-95
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            Cancelar
          </button>
        </div>
      </div>
    </section>
  );
}

export default DeletarGrupoMuscular;
