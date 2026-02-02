import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type GrupoMuscular from "../../../models/GrupoMuscular"
import { buscar,cadastrar,atualizar } from "../../../services/Service"

function FormGrupoMuscular() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [grupoMuscular, setGrupoMuscular] = useState<GrupoMuscular>({
    id: 0,
    nome: "",
    descricao: ""
  });

  useEffect(() => {
    if (id) {
      buscar(`/grupoMuscular/${id}`, setGrupoMuscular);
    }
  }, [id]);

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setGrupoMuscular({
      ...grupoMuscular,
      [e.target.name]: e.target.value
    });
  }

  async function salvar(e: React.FormEvent) {
    e.preventDefault();

    if (id) {
      await atualizar("/grupoMuscular", grupoMuscular, setGrupoMuscular);
    } else {
      await cadastrar("/grupoMuscular", grupoMuscular, setGrupoMuscular);
    }

    navigate("/grupoMuscular");
  }

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#F6F8FA]">
      <form
        onSubmit={salvar}
        className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#1E3A8A]">
          {id ? "Editar Grupo Muscular" : "Cadastrar Grupo Muscular"}
        </h2>

        <input
          type="text"
          name="nome"
          placeholder="Nome do grupo muscular"
          value={grupoMuscular.nome}
          onChange={atualizarEstado}
          className="w-full p-3 mb-4 border rounded-lg"
          required
        />

        <input
          type="text"
          name="descricao"
          placeholder="Descrição"
          value={grupoMuscular.descricao}
          onChange={atualizarEstado}
          className="w-full p-3 mb-6 border rounded-lg"
          required
        />

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-[#1E3A8A] text-white font-semibold"
        >
          Salvar
        </button>
      </form>
    </section>
  );
}

export default FormGrupoMuscular;
