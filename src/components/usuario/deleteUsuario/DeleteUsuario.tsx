import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import type Usuario from "../../../models/Usuario"
import { buscar, deletar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { AuthContext } from "../../../context/AuthContext"

function DeleteUsuario() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { usuario: usuarioLogado } = useContext(AuthContext)

  const [usuario, setUsuario] = useState<Usuario>({} as Usuario)

  useEffect(() => {
    if (!id) return

    buscar(
      `/usuarios/${id}`,
      setUsuario,
      {
        headers: {
          Authorization: usuarioLogado.token
        }
      }
    )
  }, [id, usuarioLogado.token])

  async function confirmar() {
    try {
      await deletar(
        `/usuarios/${id}`,
        {
          headers: {
            Authorization: usuarioLogado.token
          }
        }
      )
      ToastAlerta("Usuário removido com sucesso!", "sucesso")
      navigate("/usuariosmariana")
    } catch {
      ToastAlerta("Erro ao remover usuário", "erro")
    }
  }

  return (
    <>

      <div
        style={{
          minHeight: "60vh",
          padding: "80px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          textAlign: "center"
        }}
      >
        <h2>
          Excluir usuário{" "}
          <span style={{ color: "#39FF14" }}>
            {usuario.nome}
          </span>
          ?
        </h2>

        <p style={{ opacity: 0.7 }}>
          Essa ação não poderá ser desfeita.
        </p>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <button className="login-link-btn" onClick={() => navigate("/usuariosmariana")}>
            Cancelar
          </button>

          <button
            className="login-link-btn"
            style={{ borderColor: "#ff4d4d", color: "#ff4d4d" }}
            onClick={confirmar}
          >
            Confirmar exclusão
          </button>
        </div>
      </div>

    </>
  )
}

export default DeleteUsuario
