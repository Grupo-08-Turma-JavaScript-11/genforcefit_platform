import { useParams, useNavigate } from "react-router-dom";
import "./DetalheTreino.css";

function DetalheTreino() {

  const { id } = useParams();
  const navigate = useNavigate();

  // Simulação de dados
  const treino = {
    nome: "Treino A",
    nivel: "Intermediário",
    exercicios: [
      "Supino reto",
      "Agachamento",
      "Remada curvada",
      "Desenvolvimento"
    ]
  };

  return (
    <div className="pagina-container">
      <div className="card-detalhe">
        <h1>{treino.nome}</h1>

        <span className="badge-id">
          Nível: {treino.nivel}
        </span>

        <h3>Exercícios:</h3>

        <ul className="lista-exercicios">
          {treino.exercicios.map((ex, index) => (
            <li key={index}>{ex}</li>
          ))}
        </ul>

        <div className="acoes-detalhe">
          <button 
            className="btn-editar"
            onClick={() => navigate(`/editar-treino/${id}`)}
          >
            Editar
          </button>

          <button 
            className="btn-voltar"
            onClick={() => navigate("/fichas")}
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetalheTreino;
