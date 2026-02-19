import "./MenuFichas.css";
import { useNavigate } from "react-router-dom";

function MenuFichas() {

  const navigate = useNavigate();

  return (
    <div className="fichas-container">
      <div className="fichas-content">

        <h1 className="titulo">Minhas Fichas</h1>

        <button 
          className="btn-criar"
          onClick={() => navigate("/criar-treino")}
        >
          + Criar Novo Treino
        </button>

        <h2 className="subtitulo">Meus Treinos</h2>

        <div className="treinos-grid">
          <div className="card">
            <h3>Treino A</h3>
            <p>Nível: Intermediário</p>
            <p>8 exercícios</p>

            <div className="acoes">
              <button 
                className="btn-ver"
                onClick={() => navigate("/treino/1")}
              >
                Ver
              </button>

              <button 
                className="btn-editar"
                onClick={() => navigate("/editar-treino/1")}
              >
                Editar
              </button>
            </div>
          </div>
        </div>

        <h2 className="subtitulo">Treinos Prontos</h2>

        <div className="card">
          <h3>Corpo Inteiro - Iniciante</h3>
          <p className="badge">Pré-definido</p>

          <button 
            className="btn-usar"
            onClick={() => navigate("/criar-treino")}
          >
            Usar Treino
          </button>
        </div>

      </div>
    </div>
  );
}

export default MenuFichas;
