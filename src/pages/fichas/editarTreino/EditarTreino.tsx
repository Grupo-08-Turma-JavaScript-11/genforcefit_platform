import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./EditarTreino.css";

function EditarTreino() {

  const { id } = useParams();
  const navigate = useNavigate();

  // 🔥 Simulação de dados iniciais
  const [nome, setNome] = useState("Treino A");
  const [nivel, setNivel] = useState("Intermediário");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Treino atualizado:", {
      id,
      nome,
      nivel
    });

    navigate("/fichas");
  };

  return (
    <div className="pagina-container">
      <div className="card-editar">

        <h1>Editar Treino</h1>

        <form onSubmit={handleSubmit} className="form-editar">

          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <select
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
          >
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>

          <div className="acoes-editar">
            <button type="submit" className="btn-salvar">
              Salvar Alterações
            </button>

            <button
              type="button"
              className="btn-cancelar"
              onClick={() => navigate("/fichas")}
            >
              Cancelar
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default EditarTreino;
