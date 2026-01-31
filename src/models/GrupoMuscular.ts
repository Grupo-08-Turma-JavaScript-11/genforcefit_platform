import type Exercicio from "./Exercicio"

export default interface GrupoMuscular {
  id: number
  nome: string
  descricao: string
  exercicio?: Exercicio[]
}