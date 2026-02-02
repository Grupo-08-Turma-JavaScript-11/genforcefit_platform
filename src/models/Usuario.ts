import type Exercicio from "./Exercicio"

export default interface Usuario {
  id: number
  nome: string
  usuario: string
  senha: string
  tipo: string
  altura: number
  peso: number
  IMC: number
  foto?: string
  token: string
  exercicio: Exercicio[]
}
