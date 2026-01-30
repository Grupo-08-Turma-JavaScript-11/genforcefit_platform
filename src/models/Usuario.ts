export default interface Usuario {
  id?: number
  nome: string
  usuario: string // email
  senha?: string
  tipo: "Aluno"
  altura?: number
  peso?: number
  IMC?: number
  foto?: string
  exercicio?: string[]
}
