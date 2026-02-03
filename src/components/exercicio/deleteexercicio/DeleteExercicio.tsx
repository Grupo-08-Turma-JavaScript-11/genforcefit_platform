import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Exercicio from "../../../models/Exercicio";
import { buscar, deletar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { AuthContext } from "../../../context/AuthContext";

function DeleteExercicio() {

    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()

    const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try{
            await buscar(`/exercicio/${id}`, setExercicio, {
                headers: {Authorization: token}
            })
        } catch {
            ToastAlerta("Exercicio não encontrado", "erro")
        }
    }

    useEffect(() => {
        if (token === ''){
            alert("Voce precisa estar logado!")
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if(id) buscarPorId(id)
    }, [id])

    async function deletarExercicio() {
        try{
            await deletar(`/exercicio/${id}`, {
                headers: {Authorization: token}
            })
            ToastAlerta("Exercicio deletado com sucesso", "sucesso")
            retornar()
        } catch (error:any){
            if (error.toString().includes('401')){
                handleLogout()}
            else{    
                ToastAlerta(" Erro ao deletar exercicio", "erro")
                retornar()
            }
        }
    }

    function retornar() {
    navigate("/exercicios");
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-[#0D0D0D]">
            <div className="relative z-10 w-full max-w-xl bg-slate-300
                backdrop-blur-md border border-white/40 rounded-3xl shadow-2xl
                p-8 flex flex-col gap-6">
                <h1 className="text-4xl font-extrabold text-center 
                    text-[#0D0D0D]">
                Deletar Exercicio
                </h1>
                <p className="text-center text-[#1E3A8A]/80 font-medium">
                    Você tem certeza que deseja deletar este exercicio?
                </p>
                <div className="flex">
                    {exercicio.id}
                </div> 
                <div className="flex gap-4 mt-4">

                    <button onClick={deletarExercicio}
                        className="flex-1 rounded-full bg-[#22C55E] py-3 
                            text-whitefont-black text-lg shadow-lg hover:bg-[#16a34a]
                            transition-all hover:-translate-y-1 active:scale-95">
                        Sim, deletar
                    </button>

                    <button
                        onClick={retornar}
                        className="flex-1 rounded-full bg-[#1E3A8A] py-3 text-white font-black 
                            text-lg shadow-lg hover:bg-[#162c63] transition-all 
                            hover:-translate-y-1 active:scale-95">
                        Cancelar
                    </button>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default DeleteExercicio