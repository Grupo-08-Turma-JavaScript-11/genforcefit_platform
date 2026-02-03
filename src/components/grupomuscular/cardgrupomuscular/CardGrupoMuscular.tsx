import { Link } from "react-router-dom";
import type GrupoMuscular from "../../../models/GrupoMuscular";
import './CardGrupoMuscular.css';

interface CardGrupoMuscularProps {
  grupoMuscular: GrupoMuscular;
}

function CardGrupoMuscular({ grupoMuscular }: CardGrupoMuscularProps) {
  return (
    <div className="card-grupomuscular">
      {/* ESQUERDA */}
      <div className="card-left">
        <div className="card-icon">💪</div>
        <div className="card-content">
          <h3>{grupoMuscular.nome}</h3>
          <span>{grupoMuscular.descricao}</span>
        </div>
      </div>

      {/* AÇÕES */}
      <div className="card-actions">
        <Link to={`/editargrupomuscular/${grupoMuscular.id}`} className="edit">Editar</Link>
        <Link to={`/deletargrupomuscular/${grupoMuscular.id}`} className="delete">Deletar</Link>
      </div>
    </div>
  );
}

export default CardGrupoMuscular;
