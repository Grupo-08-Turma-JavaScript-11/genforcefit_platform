import { useState } from "react"
import type { ChangeEvent, FormEvent } from "react"

import Usuario from "../../../models/Usuario"
import { cadastrar } from "../../../services/Service"

function FormUsuario() {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: "",
    usuario: "",
    senha: "",
    tipo: "" as "Aluno",
    altura: undefined,
    peso: undefined,
    IMC: undefined,
    foto: "",
    exercicio: []
  })

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  function calcularIMC(peso?: number, altura?: number) {
    if (peso && altura) {
      return Number((peso / (altura * altura)).toFixed(2))
    }
    return undefined
  }

  async function cadastrarUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const imcCalculado = calcularIMC(usuario.peso, usuario.altura)

    const usuarioFinal: Usuario = {
      ...usuario,
      IMC: imcCalculado
    }

    await cadastrar("/usuarios/cadastrar", usuarioFinal, setUsuario)

    alert("Usuário cadastrado com sucesso!")
  }

  return (
    <form onSubmit={cadastrarUsuario}>
      <h2>Cadastro de Usuário</h2>

      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={usuario.nome}
        onChange={atualizarEstado}
        required
      />

      <input
        type="email"
        name="usuario"
        placeholder="Email"
        value={usuario.usuario}
        onChange={atualizarEstado}
        required
      />

      <input
        type="password"
        name="senha"
        placeholder="Senha"
        value={usuario.senha}
        onChange={atualizarEstado}
        required
      />

      {/* SELECT DE TIPO */}
      <select
        name="tipo"
        value={usuario.tipo}
        onChange={atualizarEstado}
        required
      >
        <option value="" disabled>
          Selecione o tipo
        </option>
        <option value="Aluno">Aluno</option>
      </select>

      <input
        type="number"
        name="altura"
        placeholder="Altura (ex: 1.70)"
        step="0.01"
        value={usuario.altura ?? ""}
        onChange={(e) =>
          setUsuario({
            ...usuario,
            altura: Number(e.target.value)
          })
        }
      />

      <input
        type="number"
        name="peso"
        placeholder="Peso (kg)"
        step="0.1"
        value={usuario.peso ?? ""}
        onChange={(e) =>
          setUsuario({
            ...usuario,
            peso: Number(e.target.value)
          })
        }
      />

      <input
        type="text"
        name="foto"
        placeholder="URL da foto"
        value={usuario.foto}
        onChange={atualizarEstado}
      />

      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default FormUsuario
