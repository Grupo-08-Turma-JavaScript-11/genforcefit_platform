import { useNavigate } from "react-router-dom"; 
import type Usuario from "../../models/Usuario"; 
import { useContext, useEffect, useState } from "react"; 
import { AuthContext } from "../../context/AuthContext"; 
import { buscar } from "../../services/Service"; 
import { ToastAlerta } from "../../utils/ToastAlerta"; 
import CardPerfil from "../../components/perfil/cardperfil/CardPerfil"; 

function Perfil() { 
    const navigate = useNavigate(); 

    const [usuarioCadastrado, setUsuarioCadastrado] = useState<Usuario>({} as Usuario); 

    const [isLoading, setIsLoading] = useState<boolean>(false); 

    const { usuario, handleLogout } = useContext(AuthContext);

    const token = usuario?.token ?? "";
    const userId = usuario?.id;

    async function buscarUsuarioPorId(id: number) {
        try {
        await buscar(`/usuarios/${id}`, setUsuarioCadastrado, {
        headers: { Authorization: token },
        });
        } catch (error: any) {
        if (error.toString().includes("401")) {
        handleLogout();
        }
        }
    }

    async function carregarDados() {
        setIsLoading(true);
        try {
            await buscarUsuarioPorId(userId!);
        } catch {
            ToastAlerta("Erro ao acessar perfil", "erro");
            navigate("/login");
        } finally {
            setIsLoading(false);
        }
    }
            
    useEffect(() => {
        if (!token || !userId) {
            ToastAlerta("Você precisa estar logado!", "erro");
            navigate("/login");
        }

        carregarDados();
    }, [token, userId]);


            return (
                <> 
                    
                    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-2"> 
                        <div className="container flex flex-col justify-center items-center">
                        <div> 
                            <h1 className="text-[56px] font-bold text-center text-[var(--green-soft)] my-8">
                                Meu Perfil 
                            </h1> 
                        </div> 
                        
                        {isLoading ? (<p className="text-white">Carregando perfil...</p>)
                            : (<CardPerfil usuario={usuarioCadastrado} />)} 
                        </div>    
                    </div> 
                </>
                ); 
            } 
            
            export default Perfil;