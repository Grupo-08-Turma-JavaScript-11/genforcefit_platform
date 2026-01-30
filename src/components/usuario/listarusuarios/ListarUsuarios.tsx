import { useEffect, useState } from "react"
import { SyncLoader } from "react-spinners"
import type Usuario from "../../../models/Usuario"
import { buscar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import CardUsuario from "../cardusuario/CardUsuario"


function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    buscarUsuarios()
  }, [])

  async function buscarUsuarios() {
    try {
      setIsLoading(true)
      await buscar("/usuarios", setUsuarios)
    } catch {
      ToastAlerta("Erro ao buscar usuários", "erro")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Usuários cadastrados
      </h1>

      {isLoading && (
        <div className="flex justify-center my-12">
          <SyncLoader color="#000000" size={12} />
        </div>
      )}

      {!isLoading && usuarios.length === 0 && (
        <p className="text-center text-gray-600">
          Nenhum usuário encontrado.
        </p>
      )}

      {!isLoading && usuarios.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {usuarios.map((usuario) => (
            <CardUsuario key={usuario.id} usuario={usuario} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ListarUsuarios
