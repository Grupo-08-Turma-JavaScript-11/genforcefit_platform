import { useContext, useEffect, useState } from "react";
import type Usuario from "../../../models/Usuario";
import { buscar } from "../../../services/Service";
import { AuthContext } from "../../../context/AuthContext";

import CardUsuario from "../cardusuario/CardUsuario";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";

function ListUsuario() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  
  const { usuario, handleLogout } = useContext(AuthContext);

  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "erro");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarUsuarios();
  }, [usuarios.length]);

  async function buscarUsuarios() {
        try {

            setIsLoading(true)

            await buscar('/usuarios', setUsuarios, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }finally {
            setIsLoading(false)
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
      <div
        className="container"
        style={{
          paddingTop: "120px",
          paddingBottom: "60px",
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>Lista de Usuários</h2>

        {(usuarios.length === 0 && !isLoading) && <p>Nenhum usuário cadastrado.</p>}

        {usuarios.map((u) => (
          <CardUsuario key={u.id} usuario={u} />
        ))}
      </div>
    </>
  );
}

export default ListUsuario;
