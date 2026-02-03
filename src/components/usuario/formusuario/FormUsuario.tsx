import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Usuario from "../../../models/Usuario"
import { atualizar, buscar, cadastrarUsuario } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { AuthContext } from "../../../context/AuthContext"
import "../../../pages/login/Login.css"

function FormUsuario() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const { usuario: usuarioLogado } = useContext(AuthContext)

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    tipo: "",
    altura: 0,
    peso: 0,
    IMC: 0,
    foto: "",
    exercicio: []
  })

  const [confirmarSenha, setConfirmarSenha] = useState("")
  const [carregando, setCarregando] = useState(false)

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

  function atualizarEstado(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target

    setUsuario({
      ...usuario,
      [name]:
        name === "altura" || name === "peso"
          ? Number(value)
          : value
    })
  }

  async function salvar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!usuario.tipo) {
      ToastAlerta("Selecione o tipo de usuário", "erro")
      return
    }

    if (!id && usuario.senha !== confirmarSenha) {
      ToastAlerta("As senhas não conferem", "erro")
      return
    }

    try {
      setCarregando(true)

      if (id) {
        await atualizar(
          `/usuarios/${id}`,
          usuario,
          () => {},
          {
            headers: {
              Authorization: usuarioLogado.token
            }
          }
        )
        ToastAlerta("Usuário atualizado com sucesso!", "sucesso")
      } else {
        await cadastrarUsuario("/usuarios", usuario)
        ToastAlerta("Usuário cadastrado com sucesso!", "sucesso")
      }

      navigate("/usuariosmariana")
    } catch {
      ToastAlerta("Erro ao salvar usuário", "erro")
    } finally {
      setCarregando(false)
    }
  }

  return (
    <>

      <section className="login-hero">
        <div className="login-hero-content container">

          <div className="login-hero-left">
            <span className="login-badge">Administração</span>

            <h1>
              GEN<span>FORCE</span>FIT
            </h1>

            <div className="login-divider"></div>

            <h2>
              {id ? "EDITAR" : "CRIAR"} <br />
              <span>USUÁRIO</span>
            </h2>
          </div>

          <div className="login-hero-right">
            <form onSubmit={salvar} className="login-form">

              <h3>{id ? "Editar Usuário" : "Novo Usuário"}</h3>

              <input name="nome" placeholder="Nome completo" value={usuario.nome} onChange={atualizarEstado} required />
              <input name="usuario" type="email" placeholder="E-mail" value={usuario.usuario} onChange={atualizarEstado} required />

              {!id && (
                <>
                  <input name="senha" type="password" placeholder="Senha" value={usuario.senha} onChange={atualizarEstado} required />
                  <input type="password" placeholder="Confirmar senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} required />
                </>
              )}

              <select name="tipo" value={usuario.tipo} onChange={atualizarEstado} className="login-select" required>
                <option value="">Selecione o tipo</option>
                <option value="Aluno">Aluno</option>
                <option value="Professor">Professor</option>
              </select>

              <input name="altura" type="number" placeholder="Altura (cm)" value={usuario.altura || ""} onChange={atualizarEstado} />
              <input name="peso" type="number" placeholder="Peso (kg)" value={usuario.peso || ""} onChange={atualizarEstado} />

              <button className="btn-main" disabled={carregando}>
                {carregando ? "Salvando..." : id ? "Atualizar" : "Cadastrar"}
              </button>

            </form>
          </div>

        </div>
      </section>

    </>
  )
}

export default FormUsuario
