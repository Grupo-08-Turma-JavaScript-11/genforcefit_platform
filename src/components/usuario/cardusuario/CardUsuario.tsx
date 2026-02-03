import { useNavigate } from "react-router-dom"
import type Usuario from "../../../models/Usuario"

type CardUsuarioProps = {
  usuario: Usuario
}

const CardUsuario: React.FC<CardUsuarioProps> = ({ usuario }) => {
  const navigate = useNavigate()

  return (
    <div
      style={{
        padding: "16px 20px",
        marginBottom: "15px",
        border: "1px solid #1f1f1f",
        background: "#0a0a0a",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px"
      }}
    >
      {/* INFO */}
      <div style={{ minWidth: "200px" }}>
        <strong>{usuario.nome}</strong>
        <div style={{ opacity: 0.7, fontSize: "0.9rem" }}>
          {usuario.usuario}
        </div>
      </div>

      {/* AÇÕES */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        <span
          style={{
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "0.75rem",
            fontWeight: 700,
            background:
              usuario.tipo === "Professor"
                ? "#39FF14"
                : "#1f1f1f",
            color:
              usuario.tipo === "Professor"
                ? "#000"
                : "#fff"
          }}
        >
          {usuario.tipo.toUpperCase()}
        </span>

        <button
          className="login-link-btn"
          onClick={() => navigate(`/editarusuarios/${usuario.id}`)}
        >
          Editar
        </button>

        <button
          className="login-link-btn"
          style={{ borderColor: "#ff4d4d", color: "#ff4d4d" }}
          onClick={() => navigate(`/deletarusuarios/${usuario.id}`)}
        >
          Deletar
        </button>
      </div>
    </div>
  )
}

export default CardUsuario
