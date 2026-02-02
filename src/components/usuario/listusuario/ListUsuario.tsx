import { useContext, useEffect, useState } from "react"
import type Usuario from "../../../models/Usuario"
import { buscar } from "../../../services/Service"
import { AuthContext } from "../../../context/AuthContext"

import { Navbar } from "../../navbar/Navbar"
import Footer from "../../footer/Footer"
import CardUsuario from "../cardusuario/CardUsuario"

function ListUsuario() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const { usuario } = useContext(AuthContext)

  useEffect(() => {
    if (!usuario.token) return

    buscar(
      "/usuarios",
      setUsuarios,
      {
        headers: {
          Authorization: usuario.token
        }
      }
    )
  }, [usuario.token])

  return (
    <>
      <Navbar />

      <div
        className="container"
        style={{
          paddingTop: "120px",
          paddingBottom: "60px"
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>
          Lista de Usuários
        </h2>

        {usuarios.length === 0 && (
          <p>Nenhum usuário cadastrado.</p>
        )}

        {usuarios.map((u) => (
          <CardUsuario key={u.id} usuario={u} />
        ))}
      </div>

      <Footer />
    </>
  )
}

export default ListUsuario
