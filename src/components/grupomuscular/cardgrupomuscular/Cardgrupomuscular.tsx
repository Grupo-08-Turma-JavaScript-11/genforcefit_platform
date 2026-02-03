import { Link } from "react-router-dom";

import type GrupoMuscular from "../../../models/GrupoMuscular"

//import './CardGrupoMuscular.css';


interface CardGrupoMuscularProps {
  grupoMuscular: GrupoMuscular;
}

function CardGrupoMuscular({ grupoMuscular }: CardGrupoMuscularProps) {
  return (
    <div className="card-grupomuscular">

      {/* CONTEÚDO */}
      <div className="card-content">
        <div className="card-title">
          <span className="card-icon">💪</span>
          <h3>{grupoMuscular.nome}</h3>
        </div>

        <span className="card-description">
          {grupoMuscular.descricao}
        </span>
      </div>

      {/* AÇÕES */}
      <div className="card-actions">
        <Link
          to={`/editargrupomuscular/${grupoMuscular.id}`}
          className="edit"
        >
          Editar
        </Link>

        <Link
          to={`/deletargrupomuscular/${grupoMuscular.id}`}
          className="delete"
        >
          Excluir
        </Link>
      </div>

    </div>
  );
}

export default CardGrupoMuscular;