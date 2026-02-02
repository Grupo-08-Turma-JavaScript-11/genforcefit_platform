import { Link } from "react-router-dom";
import type Exercicio from "../../../models/Exercicio";


interface CardExercicioProps{
    exercicio: Exercicio
}

function CardExercicio({exercicio}: CardExercicioProps){

    return(
        <>
            <div className="border-bg-[#0D0D0D] flex flex-col rounded 
                overflow-hidden justify-between">
                <div>
                    <div  className="flex w-full bg-slate-400 py-2 px-4 items-center gap-4">
                        <h3 className="text-lg font-bold text-center uppercase text-[#0D0D0D]">
                            {exercicio.nome}
                        </h3> 
                    </div>
                    <div className="p-4">
                        <h4 className="text-lg font-semibold uppercase text-[#0D0D0D]">
                            Informalções do exercicio
                        </h4>
                        <p>{exercicio.descricao}</p>
                        <p><span className="font-semibold">Repetições:</span> {exercicio.repeticoes} </p>
                        <p><span className="font-semibold">Duração:</span> {exercicio.duracao} </p> 
                    </div>
                </div>
                <div className="flex">
                   <Link to={`/editarexercicio/${exercicio.id}`} className="w-full bg:[#6FD904] shadow-[#6FD904]/50 hover:[#1B7302] text-[#0D0D0D] flex items-center justify-center py-2">
                        <button>Editar</button> 
                    </Link>
                    <Link to={`/deletarexercicio/${exercicio.id}`} className="text-white bg-red-400
                        hover:bg-red-700 w-full flex items-center justify-center">
                        <button>Deletar</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CardExercicio