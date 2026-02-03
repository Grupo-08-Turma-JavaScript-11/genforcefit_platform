import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { buscar, deletar } from "../../../services/Service"
import type GrupoMuscular from "../../../models/GrupoMuscular"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { AuthContext } from "../../../context/AuthContext"
import "./DeleteGrupoMuscular.css"

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
   <section className="delete-container">
  <div className="delete-card">

    <h1>Deletar Grupo Muscular</h1>

    <p className="delete-warning">
      Você tem certeza que deseja deletar este grupo muscular?
    </p>

    <div className="delete-info">
      <span className="icon">💪</span>
      <strong>{grupoMuscular.nome}</strong>
      <p>{grupoMuscular.descricao}</p>
    </div>

    <div className="delete-actions">
      <button
        disabled={isLoading}
        onClick={deletarGrupoMuscular}
        className="btn-delete"
      >
        {isLoading ? "Deletando..." : "Sim, deletar"}
      </button>

      <button
        disabled={isLoading}
        onClick={retornar}
        className="btn-cancel"
      >
        Cancelar
      </button>
    </div>

  </div>
</section>

  );
}

export default DeletarGrupoMuscular;
