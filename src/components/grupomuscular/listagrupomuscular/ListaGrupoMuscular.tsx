import { useContext, useEffect, useState } from "react";
import type GrupoMuscular from "../../../models/GrupoMuscular";
import { buscar } from "../../../services/Service";
import CardGrupoMuscular from "../cardgrupomuscular/Cardgrupomuscular";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import "../listagrupomuscular/ListaGrupoMuscular.css"

function ListarGrupoMuscular() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [grupos, setGrupos] = useState<GrupoMuscular[]>([]);

  useEffect(() => {
    if (token === "") {


      ToastAlerta("Você precisa estar logado", "erro");
      navigate("/");

    }
  }, [token]);

  useEffect(() => {
    buscarGruposMusculares();
  }, [grupos.length]);

  async function buscarGruposMusculares() {
    try {
      setIsLoading(true);

      await buscar("/grupoMuscular", setGrupos, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("")) {
        handleLogout();
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
   <section className="w-full min-h-screen bg-[#ffffff0a] flex items-center justify-center">
  <div className="w-full max-w-6xl px-8">

  <h1 className="text-4xl font-bold text-center mb-6 titulo-neon">
  Grupos Musculares
</h1>

   

    {isLoading && (
      <div className="flex justify-center w-full my-8">
        <SyncLoader color="#606b66" size={32} />
      </div>
    )}

    {!isLoading && grupos.length === 0 && (
      <span className="block text-3xl text-center my-8">
        Nenhum Grupo muscular foi encontrado!
      </span>
    )}

    <div className="grupos-grid">
      
      {grupos.map((grupo) => (
        <CardGrupoMuscular key={grupo.id} grupoMuscular={grupo} />
      ))}
    </div>
 {/* BOTÃO — agora no lugar certo */}
  
      <div className="flex justify-center mt-8 mb-12">
      <button
        onClick={() => navigate("/cadastrargrupomuscular")}
        className="
          px-8 py-3
          rounded-full
          bg-[#606b66]
          text-white
          font-semibold
          hover:bg-[#13ed34]
          transition-all
        "
      >
        Cadastro 
      </button>
    </div>
  </div>
    </section>
  );
}

export default ListarGrupoMuscular;
