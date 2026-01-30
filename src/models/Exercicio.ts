export default interface Exercicio {
    id: number;
    nome: string;
    descricao: string;
    repeticao: string;
    intervalo: string;
    intensidade: string;
    equipamento: string | null;
    usuario?: Usuario | null;
    grupoMuscular?: GrupoMucular | null
}