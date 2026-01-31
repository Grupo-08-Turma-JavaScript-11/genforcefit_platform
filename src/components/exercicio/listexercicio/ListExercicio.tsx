import { useEffect, useState } from "react";
import type Exercicio from "../../../models/Exercicio";
import { buscar } from "../../../services/Service";
import CardExercicio from "../cardexercicio/CardExercicio";


function ListExercicio() {
    
    const [exercicios, setExercicios] = useState<Exercicio[]>([])

    useEffect(() => {
        buscar("/exercicio", setExercicios)
    }, [])

    return (
        <div className="w-full min-h-screen py-20 bg-[#0D0D0D]">
            <div className="max-w-6xl mx-auto px-8">
                <h1 className="text-4xl font-bold text-center mb-12 text-[#1E3A8A]">
                    Lista de Exercicios
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                    {exercicios.map((exercicio) => (
                        <CardExercicio key={exercicio.id} exercicio={exercicio}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListExercicio
