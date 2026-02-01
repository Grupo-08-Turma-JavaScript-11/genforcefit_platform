import { useEffect, useState } from "react"
import type Usuario from "../../../models/Usuario"
import { buscar } from "../../../services/Service"

function ListUsuario() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  useEffect(() => {
    buscar("/usuarios", setUsuarios, {})
  }, [])

  return (
    <div style={{ padding: "40px" }}>
      <h2>Lista de Usuários</h2>

      {usuarios.map((usuario) => (
        <div key={usuario.id} style={{ marginBottom: "10px" }}>
          <strong>{usuario.nome}</strong> — {usuario.tipo}
        </div>
      ))}
    </div>
  )
}

export default ListUsuario
