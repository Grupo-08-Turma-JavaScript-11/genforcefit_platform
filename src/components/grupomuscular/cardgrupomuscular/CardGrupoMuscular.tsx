import { Link } from "react-router-dom";
import type GrupoMuscular from "../../../models/GrupoMuscular"


interface CardGrupoMuscularProps {
  grupoMuscular: GrupoMuscular;
}

function CardGrupoMuscular({ grupoMuscular }: CardGrupoMuscularProps) {
  return (
    <div
      className="
        w-full max-w-md
        bg-white/80 backdrop-blur-md
        border border-white/40
        rounded-2xl p-6
        flex items-center justify-between
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {/* ESQUERDA */}
      <div className="flex items-center gap-4">
        <div
          className="
            w-12 h-12 rounded-full
            bg-[#22C55E]/20 text-[#22C55E]
            flex items-center justify-center
            text-xl font-bold
          "
        >
          💪
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-[#1E3A8A]">
            {grupoMuscular.nome}
          </h3>
          <span className="text-sm text-[#1E3A8A]/70">
            {grupoMuscular.descricao}
          </span>
        </div>
      </div>

      {/* AÇÕES */}
      <div className="flex gap-2">
        <Link
          to={`/editargrupomuscular/${grupoMuscular.id}`}
          className="px-6 py-3 text-sm rounded-full bg-[#1E3A8A] text-white font-semibold"
        >
          Editar
        </Link>

        <Link
          to={`/deletargrupomuscular/${grupoMuscular.id}`}
          className="px-6 py-3 text-sm rounded-full bg-[#22C55E] text-white font-semibold"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardGrupoMuscular;