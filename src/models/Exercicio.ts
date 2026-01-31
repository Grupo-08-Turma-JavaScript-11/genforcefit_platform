import type GrupoMuscular from "./GrupoMuscular";
import type Usuario from "./Usuario";

export default interface Exercicio {
    id: number;
    nome: string;
    descricao: string;
    repeticoes: string;
    duracao: string;
    video: string;
    equipamento: string ;
    usuario?: Usuario | null;
    grupoMuscular?: GrupoMuscular | null
}