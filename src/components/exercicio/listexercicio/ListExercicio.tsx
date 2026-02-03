import { useContext, useEffect, useState } from "react";
import type Exercicio from "../../../models/Exercicio";
import { buscar } from "../../../services/Service";
import CardExercicio from "../cardexercicio/CardExercicio";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { SyncLoader } from "react-spinners";

function ListExercicio() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [exercicios, setExercicios] = useState<Exercicio[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);

  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Voce precisa estar logado", "erro");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarExercicios();
  }, [exercicios.length]);

  async function buscarExercicios() {
    try {
      setIsLoading(true);
      await buscar("/exercicio", setExercicios, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        ToastAlerta("Sua sessao expirou", "erro");
        handleLogout();
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && (
                <div className="flex justify-center w-full my-8">
                    <SyncLoader
                        color="#312e81"
                        size={32}
                    />
                </div>
            )}

          <div className="flex justify-center w-full my-35">
            <div className="container flex flex-col">
               <h1 className="text-[36px] font-bold text-center text-[var(--green-soft)] my-8">
                    Exercicios
                    </h1>
              {(!isLoading && exercicios.length === 0) && (
                      <span className="text-3xl text-center my-8">
                          Nenhum Exercicio foi encontrado!
                      </span>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                {exercicios.map((exercicio) => (
                  <CardExercicio key={exercicio.id} exercicio={exercicio} />
                ))}
              </div>
              <div className="flex justify-center mb-10">
              <button
                  onClick={() => navigate("/cadastrarexercicio")}
                  className="
                    px-8 py-3
                    w-[300px]
                    items-center 
                    justify
                    text-center
                    rounded-full
                    bg-[#A7FF83]
                    text-black
                    font-semibold
                    hover:bg-[#39FF14]
                    transition-all
                  "
                >
                Cadastrar Exercicio
            </button>
            </div>
            </div>
          </div>
    </>
  );
}

export default ListExercicio;
