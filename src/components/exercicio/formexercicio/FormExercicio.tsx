import { useContext, useEffect,  useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Exercicio from "../../../models/Exercicio";
import { ClipLoader } from "react-spinners";
import type GrupoMuscular from "../../../models/GrupoMuscular";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { autenticarUsuario } from "../../../services/authService";


function FormExercicio() {
    
    const navigate = useNavigate()

    const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [gruposMusculares, setGruposMusculares] = useState<GrupoMuscular[]>([])

    const [grupoMuscular, setGrupoMuscular] = useState<GrupoMuscular>({} as GrupoMuscular)
    

    //onst {usuario, handleLogout} = useContext(autenticarUsuario)

    //const token = usuario.token

    const {id} =  useParams<{id: string}>()


    async function buscarGrupoMuscular() {
        try {
            await buscar('/grupoMuscular', setGruposMusculares)
        }catch (error: any) {
            if(error.toString().includes('401')){
            }
        }
        
    }

    async function buscarExercicioPorId(id: string) {
        try {
            await buscar(`/exercicio/${id}`, setExercicio)
        }catch (error: any) {
            if(error.toString().includes('401')){
            }
        }
        
    }

    async function buscarGrupoMuscularPorId(id: string) {
        try {
            await buscar(`/grupoMuscular/${id}`, setGrupoMuscular)
        }catch (error: any) {
            if(error.toString().includes('401')){
            }
        }
        
    }

    /*useEffect(() => {
        if (token === ''){
            alert("Voce precisa estar logado!")
            navigate('/')
        }
    }, [token]) */

    useEffect(() => {
        buscarGrupoMuscular()
        if (id !== undefined){
            buscarGrupoMuscularPorId(id)
        }
    }, [id])

    useEffect(() => {
        setExercicio({
            ...exercicio,
            grupoMuscular: grupoMuscular,
        })
    }, [grupoMuscular])


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
        setExercicio({
            ...exercicio,
            [e.target.name]: e.target.value,
           //usuario: usuario,
        })
    }

    function retornar() {
        navigate("/exercicios")
    }


    async function gerarNovoExercicio(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if(id !== undefined){
            try{
                await atualizar(`/exercicio/:${id}`, exercicio, setExercicio)
                ToastAlerta("O Exercicio foi atualizado com sucesso!", "sucesso")
            }catch(error: any) {
                if (error.toString().includes('401')){
                }else {
                    ToastAlerta("O Exercico não foi localizado!", "erro")
                }
            }
        }else {
             try {
                await cadastrar(`/exercicio`, exercicio, setExercicio)
                ToastAlerta("O Exercicio foi com sucesso!", "sucesso")
            } catch (error:any) {
                if (error.toString().includes('401')){
                } else {
                    ToastAlerta('Erro ao cadastrar exercicio.', "erro")
                }
            }
        }
        setIsLoading(false)
        retornar()
    }

    const carregandoGrupoMuscular = grupoMuscular.nome === ''

    return (
        <>
            <div className="container flex flex items-center justify-center mx-auto bg-[#0D0D0D]"> 
                <h1 className="text-6x1 text-center my-8 text-white">
                    {id === undefined ? "Cadastrar Exercicio" : "Editar Exercicio"}
                </h1>
                <form className="w-1/2 flex flex-col gap-4" 
                    onSubmit={gerarNovoExercicio}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao">Nome</label>
                        <input 
                            type="text"
                            name="nome"
                            placeholder="Nome do Exercicio"
                            className="border-2 border-slate-700 rounded p-2 bg-slate-300"
                            value={exercicio.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        /> 
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao">Descrição</label>
                        <input 
                            type="text"
                            name="descricao"
                            placeholder="Descrição do Exercicio"
                            className="border-2 border-slate-700 rounded p-2 bg-slate-300"
                            value={exercicio.descricao}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao">Repetição</label>
                        <input 
                            type="text"
                            name="Repeticao"
                            placeholder="Repetições do Exercicio"
                            className="border-2 border-slate-700 rounded p-2 bg-slate-300"
                            value={exercicio.repeticoes}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        /> 
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao">Duração</label>
                        <input 
                            type="text"
                            name="duraçao"
                            placeholder="Duração media do Exercicio"
                            className="border-2 border-slate-700 rounded p-2 bg-slate-300"
                            value={exercicio.duracao}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        /> 
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao">Video</label>
                        <input 
                            type="text"
                            name="video"
                            placeholder="Link do video"
                            className="border-2 border-slate-700 rounded p-2 bg-slate-300"
                            value={exercicio.video}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        /> 
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao">Equipamento</label>
                        <input 
                            type="text"
                            name="equipamento"
                            placeholder="Foto do equipamento"
                            className="border-2 border-slate-700 rounded p-2 bg-slate-300"
                            value={exercicio.equipamento}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        /> 
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Grupo Muscular</p>
                        <select name="grupomuscular" id="grupomuscular"
                                className="border-2 border-slate-700 rounded p-2 bg-slate-300" 
                                onChange={(e) => buscarGrupoMuscularPorId(e.currentTarget.value)}>
                            <option value="" selected disabled>Selecione o grupo muscular</option>
                            {gruposMusculares.map((grupoMuscular) => (
                                        <option value={grupoMuscular.id}> {grupoMuscular.nome}</option>
                                    ))}
                        </select>
                    </div>
                    <button 
                        type="submit"
                        className="rounded disabled:bg-slate-200  bg:[#6FD904] shadow-[#6FD904]/50 hover:[#1B7302] text-[#0D0D0D] font-bold w-1/2 mx-auto py-2 flex justify-center"
                        disabled={carregandoGrupoMuscular}
                    >
                        {isLoading ?
                            <ClipLoader
                                color="[#6FD904]"
                                size={24}
                            />:
                            <span>{ id === undefined ? "Cadastrar" : "Atualizar" }</span>    
                        }
                    </button>
                </form>
            </div>
        </>
    )
}

export default FormExercicio