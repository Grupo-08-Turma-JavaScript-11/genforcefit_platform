import { useState } from "react"
import { useNavigate } from "react-router-dom"

import type Usuario from "../../models/Usuario"
import { cadastrar } from "../../services/Service"
import { ToastAlerta } from "../../utils/ToastAlerta"

function CadastroUsuario() {
  const navigate = useNavigate()

  const [usuario, setUsuario] = useState<Usuario>({
    nome: "",
    usuario: "",
    senha: "",
    grupoMuscular: "",
    altura: undefined,
    peso: undefined,
    foto: "",
  })

  const [confirmarSenha, setConfirmarSenha] = useState("")
  const [carregando, setCarregando] = useState(false)

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    setUsuario({
      ...usuario,
      [name]: name === "altura" || name === "peso" ? Number(value) : value,
    })
  }

  async function cadastrarUsuario(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setCarregando(true)

    if (usuario.senha !== confirmarSenha) {
      ToastAlerta("As senhas não conferem", "erro")
      setCarregando(false)
      return
    }

    try {
      await cadastrar("/usuarios", usuario, setUsuario)
      ToastAlerta("Usuário cadastrado com sucesso!", "sucesso")
      navigate("/login")
    } catch {
      ToastAlerta("Erro ao cadastrar usuário", "erro")
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div 
      className="min-h-screen flex flex-col bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48')",
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/80" />
      
      {/* Conteúdo Principal */}
      <main className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-32 px-6 py-12 lg:py-0">
        
        {/* Lado Esquerdo */}
        <div className="lg:w-1/2 max-w-2xl text-center lg:text-left">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold tracking-widest uppercase rounded-sm">
              Transforme Seu Corpo
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-none tracking-tight">
            GEN<span className="text-green-500">FORCE</span>FIT
          </h1>
          
          <div className="h-1 w-32 bg-green-500 mb-10"></div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-10 leading-tight">
            SUA JORNADA <br />
            <span className="text-green-500">COMEÇA AQUI</span>
          </h2>
          
          <button 
            onClick={() => navigate("/login")}
            className="bg-transparent hover:bg-white/5 border border-gray-600 text-white font-bold py-4 px-12 text-lg transition-colors hover:border-green-500"
            style={{ borderRadius: '2px' }}
          >
            JÁ TENHO UMA CONTA
          </button>
        </div>

        {/* Lado Direito - Formulário de Cadastro */}
        <div className="lg:w-1/2 max-w-2xl">
          
          <div className="bg-black/30 backdrop-blur-md border border-white/5 p-10 shadow-xl">
            
            {/* Cabeçalho */}
            <div className="mb-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                CRIE SUA CONTA
              </h3>
              <p className="text-gray-400">
                Preencha os dados abaixo para começar sua transformação
              </p>
            </div>

            <form onSubmit={cadastrarUsuario} className="space-y-8">
              
              {/* Linha 1: Nome e Email */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Nome */}
                <div>
                  <label className="block text-white font-semibold mb-4 text-lg">
                    NOME COMPLETO
                  </label>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Seu nome completo"
                    value={usuario.nome}
                    onChange={atualizarEstado}
                    className="w-full h-14 px-5 bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all"
                    style={{ borderRadius: '2px' }}
                    required
                    disabled={carregando}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-semibold mb-4 text-lg">
                    E-MAIL
                  </label>
                  <input
                    type="email"
                    name="usuario"
                    placeholder="seu@email.com"
                    value={usuario.usuario}
                    onChange={atualizarEstado}
                    className="w-full h-14 px-5 bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all"
                    style={{ borderRadius: '2px' }}
                    required
                    disabled={carregando}
                  />
                </div>
              </div>

              {/* Linha 2: Senha e Confirmar Senha */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Senha */}
                <div>
                  <label className="block text-white font-semibold mb-4 text-lg">
                    SENHA
                  </label>
                  <input
                    type="password"
                    name="senha"
                    placeholder="••••••••"
                    value={usuario.senha ?? ""}
                    onChange={atualizarEstado}
                    className="w-full h-14 px-5 bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all"
                    style={{ borderRadius: '2px' }}
                    required
                    disabled={carregando}
                  />
                </div>

                {/* Confirmar Senha */}
                <div>
                  <label className="block text-white font-semibold mb-4 text-lg">
                    CONFIRMAR SENHA
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    className="w-full h-14 px-5 bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all"
                    style={{ borderRadius: '2px' }}
                    required
                    disabled={carregando}
                  />
                </div>
              </div>

              {/* Linha 3: Grupo Muscular */}
              <div>
                <label className="block text-white font-semibold mb-4 text-lg">
                  GRUPO MUSCULAR PREFERIDO
                </label>
                <input
                  type="text"
                  name="grupoMuscular"
                  placeholder="Ex: Peito, Costas, Pernas, Geral"
                  value={usuario.grupoMuscular ?? ""}
                  onChange={atualizarEstado}
                  className="w-full h-14 px-5 bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all"
                  style={{ borderRadius: '2px' }}
                  required
                  disabled={carregando}
                />
              </div>

              {/* Linha 4: Altura e Peso */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Altura */}
                <div>
                  <label className="block text-white font-semibold mb-4 text-lg">
                    ALTURA (cm)
                  </label>
                  <input
                    type="number"
                    name="altura"
                    placeholder="Ex: 175"
                    value={usuario.altura ?? ""}
                    onChange={atualizarEstado}
                    className="w-full h-14 px-5 bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all"
                    style={{ borderRadius: '2px' }}
                    disabled={carregando}
                  />
                </div>

                {/* Peso */}
                <div>
                  <label className="block text-white font-semibold mb-4 text-lg">
                    PESO (kg)
                  </label>
                  <input
                    type="number"
                    name="peso"
                    placeholder="Ex: 75"
                    value={usuario.peso ?? ""}
                    onChange={atualizarEstado}
                    className="w-full h-14 px-5 bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all"
                    style={{ borderRadius: '2px' }}
                    disabled={carregando}
                  />
                </div>
              </div>

              <div className="h-8"></div>

              {/* Botão Cadastrar */}
              <div className="mt-16 mb-12 border-t border-gray-800 pt-10">
                <button
                  type="submit"
                  disabled={carregando}
                  className="w-full h-16 bg-green-500 hover:bg-green-600 text-black font-bold text-xl transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ borderRadius: '2px' }}
                >
                  {carregando ? (
                    <div className="flex items-center justify-center">
                      <div className="h-6 w-6 border-2 border-black border-t-transparent rounded-full animate-spin mr-3"></div>
                      CRIANDO CONTA...
                    </div>
                  ) : (
                    "CRIAR MINHA CONTA"
                  )}
                </button>
              </div>
            </form>

            <div className="my-12 border-t border-gray-800"></div>


          </div>
        </div>
      </main>
    </div>
  )
}

export default CadastroUsuario