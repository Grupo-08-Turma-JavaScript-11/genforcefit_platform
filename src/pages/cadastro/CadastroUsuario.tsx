import { useState } from "react"
import { useNavigate } from "react-router-dom"

import type Usuario from "../../models/Usuario"
import { cadastrar } from "../../services/Service"
import { ToastAlerta } from "../../utils/ToastAlerta"

function CadastroUsuario() {
  const navigate = useNavigate()

  const [usuario, setUsuario] = useState<Usuario>({
    nome: "",
    usuario: "",
    senha: "",
    grupoMuscular: "",
    altura: undefined,
    peso: undefined,
    foto: "",
  })

  const [confirmarSenha, setConfirmarSenha] = useState("")

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    setUsuario({
      ...usuario,
      [name]:
        name === "altura" || name === "peso"
          ? Number(value)
          : value,
    })
  }

  async function cadastrarUsuario(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (usuario.senha !== confirmarSenha) {
      ToastAlerta("As senhas não conferem", "erro")
      return
    }

    try {
      await cadastrar("/usuarios", usuario, setUsuario)
      ToastAlerta("Usuário cadastrado com sucesso!", "sucesso")
      navigate("/login") // 👈 REDIRECIONA PARA LOGIN
    } catch {
      ToastAlerta("Erro ao cadastrar usuário", "erro")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={cadastrarUsuario}
        className="bg-white p-8 rounded shadow-md w-[420px]"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Criar conta
        </h1>

        <label className="text-sm font-medium">Nome</label>
        <input
          type="text"
          name="nome"
          value={usuario.nome}
          onChange={atualizarEstado}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          name="usuario"
          value={usuario.usuario}
          onChange={atualizarEstado}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <label className="text-sm font-medium">Senha</label>
        <input
          type="password"
          name="senha"
          value={usuario.senha ?? ""}
          onChange={atualizarEstado}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <label className="text-sm font-medium">Confirmar senha</label>
        <input
          type="password"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <label className="text-sm font-medium">Grupo muscular</label>
        <input
          type="text"
          name="grupoMuscular"
          placeholder="Ex: geral"
          value={usuario.grupoMuscular ?? ""}
          onChange={atualizarEstado}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <label className="text-sm font-medium">Altura (cm)</label>
        <input
          type="number"
          name="altura"
          value={usuario.altura ?? ""}
          onChange={atualizarEstado}
          className="w-full mb-4 p-2 border rounded"
        />

        <label className="text-sm font-medium">Peso (kg)</label>
        <input
          type="number"
          name="peso"
          value={usuario.peso ?? ""}
          onChange={atualizarEstado}
          className="w-full mb-6 p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default CadastroUsuario
