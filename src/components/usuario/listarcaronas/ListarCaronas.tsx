import { useEffect, useState } from "react"
import type Usuario from "../../../models/Usuario"
import { buscar } from "../../../services/Service"
import CardUsuario from "../../usuario/cardcarona/CardUsuario"

function ListarCaronas() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  useEffect(() => {
    buscar("/usuarios", setUsuarios)
  }, [])

  return (
    <div>
      <h1>Usuários cadastrados</h1>

      {usuarios.length === 0 && <p>Nenhum usuário encontrado</p>}

      <div>
        {usuarios.map((usuario) => (
          <CardUsuario key={usuario.id} usuario={usuario} />
        ))}
      </div>
    </div>
  )
}

export default ListarCaronas
