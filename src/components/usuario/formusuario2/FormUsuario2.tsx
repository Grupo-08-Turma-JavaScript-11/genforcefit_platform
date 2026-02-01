import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type Usuario from "../../../models/Usuario";
import { cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormUsuario() {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: "",
    usuario: "",
    senha: "",
    altura: undefined,
    peso: undefined,
    foto: "",
  });

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setUsuario({
      ...usuario,
      [name]:
        name === "altura" || name === "peso"
          ? Number(value)
          : value,
    });
  }

  async function cadastrarUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await cadastrar("/usuarios", usuario, setUsuario);
      ToastAlerta("Usuário cadastrado com sucesso!", "sucesso");
    } catch {
      ToastAlerta("Erro ao cadastrar usuário", "erro");
    }
  }

  return (
    <form onSubmit={cadastrarUsuario}>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={usuario.nome}
        onChange={atualizarEstado}
        className="w-full mb-4 p-2 border rounded"
        required
      />

      <input
        type="email"
        name="usuario"
        placeholder="Email"
        value={usuario.usuario}
        onChange={atualizarEstado}
        className="w-full mb-4 p-2 border rounded"
        required
      />

      <input
        type="password"
        name="senha"
        placeholder="Senha"
        value={usuario.senha}
        onChange={atualizarEstado}
        className="w-full mb-4 p-2 border rounded"
        required
      />

      <input
        type="number"
        name="altura"
        placeholder="Altura (cm)"
        value={usuario.altura ?? ""}
        onChange={atualizarEstado}
        className="w-full mb-4 p-2 border rounded"
      />

      <input
        type="number"
        name="peso"
        placeholder="Peso (kg)"
        value={usuario.peso ?? ""}
        onChange={atualizarEstado}
        className="w-full mb-4 p-2 border rounded"
      />

      <input
        type="text"
        name="foto"
        placeholder="URL da foto"
        value={usuario.foto ?? ""}
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
  );
}

export default FormUsuario;
