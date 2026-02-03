import { useEffect, useState, useContext, type FormEvent } from "react";



import {  useNavigate, useParams } from "react-router-dom";

import type GrupoMuscular from "../../../models/GrupoMuscular"
import { buscar, cadastrar, atualizar } from "../../../services/Service"
import { AuthContext } from "../../../context/AuthContext"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import"../formgrupomuscular/FormGrupoMuscular.css"

function FormGrupoMuscular() {
  const navigate = useNavigate();

  const [grupoMuscular, setGrupoMuscular] = useState<GrupoMuscular>({
    id: 0,
    nome: "",
    descricao: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Voce precisa estar logado", "erro");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function buscarPorId(id: string) {
    setIsLoading(true);
    try {
      await buscar(`/grupoMuscular/${id}`, setGrupoMuscular, {
  headers: {
    Authorization: token,
  },
});

    } catch (error: any) {
      if (error.response.status === 401) {
        handleLogout();
      }
      ToastAlerta("Grupo muscular não encontrado!", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setGrupoMuscular({
      ...grupoMuscular,
      [e.target.name]: e.target.value,
    });
  }

  async function salvar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id) {
        await atualizar("/grupoMuscular", grupoMuscular, setGrupoMuscular, {
          headers: {
            Authorization: token,
          },
        });

        ToastAlerta("Grupo muscular atualizado com sucesso!", "sucesso");
      } else {
        await cadastrar("/grupoMuscular", grupoMuscular, setGrupoMuscular, {
          headers: {
            Authorization: token,
          },
        });
        ToastAlerta("Grupo muscular cadastrado com sucesso!", "sucesso");
      }

      navigate("/grupoMuscular");
    } catch (error: any) {
      if (error.response.status === 401) {
        handleLogout();
      }
      ToastAlerta("Erro ao salvar grupo muscular.", "erro");
    } finally {
      setIsLoading(false);
    }
  }

   return (
    <section className="form-container">
      <form className="form-card" onSubmit={salvar}>
        <h2>Cadastro Grupo Muscular</h2>

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

        <button className="btn-primary" disabled={isLoading}>
          {isLoading ? "Salvando..." : "Salvar"}
        </button>
      </form>
    </section>
  );
}

export default FormGrupoMuscular;
