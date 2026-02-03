import { useContext, useEffect,  useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Exercicio from "../../../models/Exercicio";
import { ClipLoader } from "react-spinners";
import type GrupoMuscular from "../../../models/GrupoMuscular";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { AuthContext } from "../../../context/AuthContext";
import type Usuario from "../../../models/Usuario";


function FormExercicio() {
    
    const navigate = useNavigate()

    const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [gruposMusculares, setGruposMusculares] = useState<GrupoMuscular[]>([])
    const [grupoMuscular, setGrupoMuscular] = useState<GrupoMuscular>({} as GrupoMuscular)

    const [usuarioCadastro, setUsuarioCadastro] = useState<Usuario>({} as Usuario)

    const {usuario, handleLogout} = useContext(AuthContext)
    const token = usuario.token

    const {id} =  useParams<{id: string}>()

    async function buscarExercicioPorId(id: string) {
        try {
            await buscar(`/exercicio/${id}`, setExercicio, {
                headers: {Authorization: token}
            })
        }catch (error: any) {
            if(error.toString().includes('401')){
                handleLogout()
            }
        }
        
    }

    async function buscarGrupoMuscular() {
        try {
            await buscar('/grupoMuscular', setGruposMusculares, {
                headers: {Authorization: token}
            })
        }catch (error: any) {
            if(error.toString().includes('401')){
                handleLogout()
            }
        }
        
    }

    async function buscarUsuarioPorId(id: string) {
        try {
            await buscar(`/usuarios/${id}`, setUsuarioCadastro, {
                headers: {Authorization: token}
            })  
        }catch (error: any) {
            if(error.toString().includes('401')){
                handleLogout()
            }
        }
        
    }

    async function buscarGrupoMuscularPorId(id: string) {
        try {
            await buscar(`/grupoMuscular/${id}`, setGrupoMuscular, {
                headers: {Authorization: token}
            })
        }catch (error: any) {
            if(error.toString().includes('401')){
                handleLogout()
            }
        }
        
    }

    useEffect(() => {
        if (token === ''){
            ToastAlerta("Voce precisa estar logado!","erro")
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
    buscarGrupoMuscular()
    buscarUsuarioPorId(usuario.id.toString())

    if (id) {
        buscarExercicioPorId(id)
    }
}, [])


    //useEffect(() => {
    //    buscarGrupoMuscular()
    //    buscarUsuarioPorId(usuario.id.toString());
    //    if (id !== undefined){
   //         buscarExercicioPorId(id)
   //     }
    //    setExercicio({
    //        ...exercicio,
    //        usuario: usuarioCadastro
   //     });
   // }, [gruposMusculares.length])

    //useEffect(() => {
    //    setExercicio({
   //         ...exercicio,
   //         grupoMuscular: grupoMuscular,
   //     })
  //  }, [grupoMuscular])

    useEffect(() => {
    if (grupoMuscular.id) {
        setExercicio(prev => ({
        ...prev,
        grupoMuscular: grupoMuscular
        }))
    }
    }, [grupoMuscular])

    useEffect(() => {
        if (usuarioCadastro.id) {
            setExercicio(prev => ({
            ...prev,
            usuario: usuarioCadastro
            }))
        }
    }, [usuarioCadastro])


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
        setExercicio({
            ...exercicio,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/exercicios")
    }


    async function gerarNovoExercicio(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)


        if(id){
            try{
                await atualizar(`/exercicio`, exercicio, setExercicio, {
                    headers: { Authorization: token }
                })
                ToastAlerta("O Exercicio foi atualizado com sucesso!", "sucesso")
            }catch(error: any) {
                if (error.toString().includes('401')){
                    handleLogout()
                }else {
                    ToastAlerta("O Exercico não foi localizado!", "erro")
                }
            }
        }else {
             try {
                await cadastrar(`/exercicio`, exercicio, setExercicio, {
                    headers: { Authorization: token }
                })
                ToastAlerta("O Exercicio foi com sucesso!", "sucesso")
            } catch (error:any) {
                if (error.toString().includes('401')){
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao cadastrar exercicio.', "erro")
                }
            }
        }
        setIsLoading(false)
        retornar()
    }

    //const carregandoGrupoMuscular = grupoMuscular.nome === ''

    return (
        <>
            <section className="bg:[url('https://vfitclub.netlify.app/image/hero-background.webp')] ">
            <div className="container flex items-center justify-center mx-auto"> 

                <form className="w-1/2 flex flex-col gap-4 m-28" 
                    onSubmit={gerarNovoExercicio}>
                    <h1 className="text-[36px] text-center text-[var(--green-soft)]">
                    {id === undefined ? "Cadastrar Exercicio" : "Editar Exercicio"}
                    </h1>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nome">Nome</label>
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
                        <label htmlFor="repeticoes">Repetição</label>
                        <input 
                            type="text"
                            name="repeticoes"
                            placeholder="Repetições do Exercicio"
                            className="border-2 border-slate-700 rounded p-2 bg-slate-300"
                            value={exercicio.repeticoes}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        /> 
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="duracao">Duração</label>
                        <input 
                            type="text"
                            name="duracao"
                            placeholder="Duração media do Exercicio"
                            className="border-2 border-slate-700 rounded p-2 bg-slate-300"
                            value={exercicio.duracao}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        /> 
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="video">Video</label>
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
                        <label htmlFor="equipamento">Equipamento</label>
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
                        <select
                            className="border-2 border-slate-700 rounded p-2 bg-slate-300"
                            value={grupoMuscular.id ?? ""}
                            onChange={(e) => buscarGrupoMuscularPorId(e.currentTarget.value)}>
                            <option value="" disabled>Selecione o grupo muscular</option>
                            {gruposMusculares.map((grupoMuscular) => (
                                        <option value={grupoMuscular.id}> {grupoMuscular.nome}</option>
                                    ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Usuario</p>
                        <select
                            name="usuario"
                            id="usuario"
                            className="border-2 border-slate-700 rounded p-2 bg-slate-300"
                            value={usuario?.id ?? ""}
                            onChange={(e) => buscarUsuarioPorId(e.currentTarget.value)}
                            >
                            <option value="" disabled>
                                Selecione o usuário
                            </option>

                            {usuario && (
                                <option value={usuario.id}>
                                {usuario.nome}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className="flex m-8 gap-8 justify-center">
                    <button 
                        type="button"
                        onClick={retornar}
                        className="px-8 py-3
                            w-[150px]
                            items-center 
                            justify-center
                            text-center
                            rounded-full
                            bg-[#606b66]
                            text-black
                            font-semibold
                            hover:bg-[#D99A41]
                            transition-all
                        "    
                    >Cancelar</button>

                    <button 
                        type="submit"
                        className="px-8 py-3
                            w-[150px]
                            items-center 
                            justify-center
                            text-center
                            rounded-full
                            bg-[#606b66]
                            text-black
                            font-semibold
                            hover:bg-[#13ed34]
                            transition-all
                        "    
                    >
                        {isLoading ?
                            <ClipLoader
                                color="[#6FD904]"
                                size={24}
                            />:
                            <span>{ id === undefined ? "Cadastrar" : "Atualizar" }</span>    
                        }
                    </button>
                    </div>
                </form>
            </div>
            </section>
        </>
    )
}

export default FormExercicio