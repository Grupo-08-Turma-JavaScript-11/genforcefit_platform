import { Link } from "react-router-dom"
import type Usuario from "../../../models/Usuario"

interface CardUsuarioProps {
  usuario: Usuario
}

function CardUsuario({ usuario }: CardUsuarioProps) {
  return (
    <div>
      {usuario.foto && (
        <img
          src={usuario.foto}
          alt={usuario.nome}
          width={100}
        />
      )}

      <h3>{usuario.nome}</h3>
      <p>Email: {usuario.usuario}</p>
      <p>Tipo: {usuario.tipo}</p>
      {usuario.IMC && <p>IMC: {usuario.IMC}</p>}

      <Link
        to={`/deletarusuario/${usuario.id}`}
        className="text-red-600 font-bold"
      >
        Deletar
      </Link>
    </div>
  )
}

export default CardUsuario
