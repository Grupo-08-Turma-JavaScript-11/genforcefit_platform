<<<<<<< Updated upstream
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type GrupoMuscular from "../../../models/GrupoMuscular"
import { buscar,cadastrar,atualizar } from "../../../services/Service"
=======
import { useEffect, useState, useContext, type FormEvent } from "react";

import {  useNavigate, useParams } from "react-router-dom";

import type GrupoMuscular from "../../../models/GrupoMuscular";
import { buscar, cadastrar, atualizar } from "../../../services/Service";
import { AuthContext } from "../../../context/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import "../formgrupomuscular/FormGrupoMuscular.css"
>>>>>>> Stashed changes

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
  <section className="form-container">
    <form onSubmit={salvar} className="form-card">

      <h2>
        {id ? "Editar Grupo Muscular" : "Cadastrar Grupo Muscular"}
      </h2>

      <input
        type="text"
        name="nome"
        placeholder="Nome do grupo muscular"
        value={grupoMuscular.nome}
        onChange={atualizarEstado}
        required
      />

      <input
        type="text"
        name="descricao"
        placeholder="Descrição"
        value={grupoMuscular.descricao}
        onChange={atualizarEstado}
        required
      />

      <button type="submit" disabled={isLoading} className="btn-primary">
        {isLoading ? "Salvando..." : "Salvar"}
      </button>

    </form>
  </section>
);

<<<<<<< Updated upstream
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-[#1E3A8A] text-white font-semibold"
        >
          Salvar
        </button>
      </form>
    </section>
  );
=======
>>>>>>> Stashed changes
}

export default FormGrupoMuscular;
