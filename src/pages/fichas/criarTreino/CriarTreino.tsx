import { useNavigate } from "react-router-dom";
import "./CriarTreino.css";

function CriarTreino() {

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 👈 evita recarregar página

    // aqui depois você pode colocar lógica de salvar no backend

    navigate("/fichas"); // 👈 volta para página das fichas
  };

  return (
    <div className="pagina-container">

      <h1>Criar Treino</h1>

      <form className="form-treino" onSubmit={handleSubmit}>

        <input 
          type="text" 
          placeholder="Nome do treino"
        />

        <select>
          <option>Iniciante</option>
          <option>Intermediário</option>
          <option>Avançado</option>
        </select>

        <button type="submit">
          Salvar Treino
        </button>

        <button 
          type="button"
          onClick={() => navigate("/fichas")}
        >
          Voltar
        </button>

      </form>
    </div>
  );
}

export default CriarTreino;
