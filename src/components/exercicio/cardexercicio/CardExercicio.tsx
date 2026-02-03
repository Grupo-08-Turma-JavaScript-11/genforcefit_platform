import { Link } from "react-router-dom";
import type Exercicio from "../../../models/Exercicio";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";

interface CardExercicioProps {
  exercicio: Exercicio;
}

function CardExercicio({ exercicio }: CardExercicioProps) {
  const { usuario } = useContext(AuthContext);

  const tipo = usuario.tipo;

  return (
    <div className="py-8 bg-[var(--fit-black)] border rounded-[20px] mx-8 my-10">
      {/* Card principal */}
      <div
        className="
          w-full max-w-md mx-auto
          bg-black/60 backdrop-blur-md
          rounded-[20px]
          p-6
          flex flex-col gap-4
          shadow-[0_8px_30px_rgba(0,0,0,0.5)]
          transition-all duration-300 ease-in-out
          hover:-translate-y-[5px]
          hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)]
        "
      >
        {/* Nome */}
        <h3 className="text-[25px] font-bold text-center uppercase text-[var(--green-soft)]">
          {exercicio.nome}
        </h3>

        {/* Imagem do equipamento */}
        {exercicio.equipamento && (
          <img
            src={exercicio.equipamento}
            alt={`Equipamento do exercício ${exercicio.nome}`}
            className="w-60 h-40 object-cover rounded bg-black/400 mx-auto my-4"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        )}

        {/* Informações */}
        <div>
          <h4 className="text-lg font-semibold uppercase text-[var(--green-soft)]">
            Informações do exercício
          </h4>
          <p>{exercicio.descricao}</p>
          <p>
            <span className="font-semibold">Repetições:</span>{" "}
            {exercicio.repeticoes}
          </p>
          <p>
            <span className="font-semibold">Duração:</span> {exercicio.duracao}
          </p>
        </div>

        {tipo === "Professor" && (
          <>
            {/* Ações */}
            <div className="flex justify-center gap-6 mt-4">
              <Link
                to={`/editarexercicio/${exercicio.id}`}
                className="
              px-8 py-3 w-[150px]
              text-center rounded-full
              bg-[#A7FF83] text-black font-semibold
              hover:bg-[#39FF14]
              transition-all
            "
              >
                Editar
              </Link>

              <Link
                to={`/deletarExercicio/${exercicio.id}`}
                className="
              px-8 py-3 w-[150px]
              text-center rounded-full
              bg-[#606b66] text-black font-semibold
              hover:bg-[#D99A41]
              transition-all
            "
              >
                Deletar
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CardExercicio;
