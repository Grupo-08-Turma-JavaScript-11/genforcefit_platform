import { useEffect, useState } from "react"
import type GrupoMuscular from "../../../models/GrupoMuscular"
import CardGrupoMuscular from "../cardgrupomuscular/CardGrupoMuscular";
import { buscar} from "../../../services/Service"
import FormGrupoMuscular from "../formgrupomuscular/FormGrupoMuscular"

function ListarGrupoMuscular() {
  const [grupos, setGrupos] = useState<GrupoMuscular[]>([]);

  useEffect(() => {
    buscar("/grupoMuscular", setGrupos);
  }, []);

  return (
    <section className="w-full min-h-screen py-20 bg-[#F6F8FA]">
      <div className="max-w-6xl mx-auto px-8">

        <h1 className="text-4xl font-bold text-center mb-12 text-[#1E3A8A]">
          Grupos Musculares
        </h1>
            <FormGrupoMuscular>

            </FormGrupoMuscular>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {grupos.map((grupo) => (
            <CardGrupoMuscular
              key={grupo.id}
              grupoMuscular={grupo}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ListarGrupoMuscular;
