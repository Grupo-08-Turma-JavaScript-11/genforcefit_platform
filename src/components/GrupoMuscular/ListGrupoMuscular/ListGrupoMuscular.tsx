import { useContext, useEffect, useState } from "react";
import type GrupoMuscular from "../../../models/GrupoMuscular";
import { buscar } from "../../../services/Service";
import CardGrupoMuscular from "../cardgrupomuscular/CardGrupoMuscular";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListarGrupoMuscular() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [grupos, setGrupos] = useState<GrupoMuscular[]>([]);

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado"+token, "erro");
      navigate("/login");
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
      if (error.toString().includes("401")) {
        handleLogout();
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="w-full min-h-screen py-20 bg-[#F6F8FA]">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#1E3A8A]">
          Grupos Musculares
        </h1>
{isLoading && (
          <div className="flex justify-center w-full my-8">
            <SyncLoader color="#312e81" size={32} />
          </div>
        )}

        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            {!isLoading && grupos.length === 0 && (
              <span className="text-3xl text-center my-8">
                Nenhum Grupo muscular foi encontrado!
              </span>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {grupos.map((grupo) => (
                <CardGrupoMuscular key={grupo.id} grupoMuscular={grupo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListarGrupoMuscular;