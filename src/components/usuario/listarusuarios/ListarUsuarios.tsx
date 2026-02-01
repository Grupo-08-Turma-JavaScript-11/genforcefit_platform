import { useEffect, useState } from "react"
import { SyncLoader } from "react-spinners"
import type Usuario from "../../../models/Usuario"
import { buscar, deletar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import CardUsuario from "../cardusuario/CardUsuario"

function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [filtro, setFiltro] = useState("")

  useEffect(() => {
    buscarUsuarios()
  }, [])

  async function buscarUsuarios() {
    try {
      setIsLoading(true)
      await buscar("/usuarios", setUsuarios)
    } catch {
      ToastAlerta("Erro ao buscar usuários", "erro")
    } finally {
      setIsLoading(false)
    }
  }

  // Função para deletar usuário
  async function deletarUsuario(id: number) {
    try {
      await deletar(`/usuarios/${id}`); // DESCOMENTADO
      ToastAlerta("Usuário deletado com sucesso", "sucesso")
      buscarUsuarios() // Atualiza a lista após deletar
    } catch {
      ToastAlerta("Erro ao deletar usuário", "erro")
    }
  }

  // Filtro de busca
  const usuariosFiltrados = usuarios.filter(usuario => 
    usuario.nome?.toLowerCase().includes(filtro.toLowerCase()) ||
    usuario.usuario?.toLowerCase().includes(filtro.toLowerCase()) ||
    usuario.grupoMuscular?.toLowerCase().includes(filtro.toLowerCase())
  )

  // Estatísticas
  const totalUsuarios = usuarios.length
  const temAltura = usuarios.filter(u => u.altura && u.altura > 0).length
  const temPeso = usuarios.filter(u => u.peso && u.peso > 0).length

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
      <main className="relative z-10 flex-1 flex flex-col items-center px-6 py-16 lg:py-20">
        <div className="w-full max-w-7xl flex flex-col items-center">
          
          {/* Cabeçalho */}
          <div className="text-center mb-24 w-full">
            <div className="mb-12">
              <span className="inline-block px-6 py-3 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold tracking-widest uppercase rounded-sm">
                Administração
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-10 leading-none tracking-tight">
              Usuários <span className="text-green-500">Cadastrados</span>
            </h1>
            
            <div className="h-1 w-40 bg-green-500 mx-auto mb-12"></div>
            
            <div className="flex justify-center">
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl text-center">
                Gerencie todos os usuários do sistema em um só lugar. 
                <span className="text-green-400 font-semibold"> Controle total</span> sobre as contas e perfis.
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-20 w-full">
            {/* Card 1 - Total de Usuários */}
            <div className="bg-black/30 backdrop-blur-md border border-white/5 p-10 text-center w-full max-w-xs">
              <div className="flex flex-col items-center">
                <div className="p-5 bg-green-500/10 rounded-sm border border-green-500/30 mb-6">
                  <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13 0h-6" />
                  </svg>
                </div>
                <p className="text-gray-400 text-lg font-medium mb-3">Total de Usuários</p>
                <p className="text-5xl font-bold text-white mb-6">{totalUsuarios}</p>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
            </div>

            {/* Card 2 - Com Altura */}
            <div className="bg-black/30 backdrop-blur-md border border-white/5 p-10 text-center w-full max-w-xs">
              <div className="flex flex-col items-center">
                <div className="p-5 bg-green-500/10 rounded-sm border border-green-500/30 mb-6">
                  <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <p className="text-gray-400 text-lg font-medium mb-3">Com Altura</p>
                <p className="text-5xl font-bold text-white mb-6">{temAltura}</p>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
            </div>

            {/* Card 3 - Com Peso */}
            <div className="bg-black/30 backdrop-blur-md border border-white/5 p-10 text-center w-full max-w-xs">
              <div className="flex flex-col items-center">
                <div className="p-5 bg-green-500/10 rounded-sm border border-green-500/30 mb-6">
                  <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-lg font-medium mb-3">Com Peso</p>
                <p className="text-5xl font-bold text-white mb-6">{temPeso}</p>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
            </div>
          </div>

          {/* Wrapper ÚNICO para busca + resultados */}
          <div className="w-full max-w-6xl mx-auto">

            {/* Barra de Pesquisa */}
            <div className="my-12 w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                <input
                  type="text"
                  placeholder="Buscar por nome, email ou grupo muscular..."
                  value={filtro}
                  onChange={(e) => setFiltro(e.target.value)}
                  className="w-full pl-14 pr-4 py-5 bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all rounded-sm text-lg"
                />
              </div>
            </div>

            {/* Contador de resultados */}
            {!isLoading && usuariosFiltrados.length > 0 && (
              <div className="mb-10 p-8 bg-white/5 border border-gray-700/50 text-center w-full">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Resultados da Busca
                </h3>
                <p className="text-gray-400 text-lg">
                  <span className="text-green-400 font-semibold">{usuariosFiltrados.length}</span>
                  {" "}de{" "}
                  <span className="text-green-400 font-semibold">{totalUsuarios}</span> usuários encontrados
                </p>
              </div>
            )}
          </div>

          {/* Conteúdo Principal */}
          <div className="w-full max-w-6xl">
            
            {/* Loading State */}
            {isLoading && (
              <div className="flex flex-col items-center justify-center py-32 bg-black/30 backdrop-blur-md border border-white/5 p-10 lg:p-12 shadow-xl rounded-sm">
                <SyncLoader color="#22c55e" size={16} className="mb-8" />
                <p className="text-gray-400 text-xl">Carregando usuários...</p>
              </div>
            )}

            {/* Empty State */}
            {!isLoading && usuariosFiltrados.length === 0 && (
              <div className="text-center py-32 bg-black/30 backdrop-blur-md border border-white/5 p-10 lg:p-12 shadow-xl rounded-sm">
                <div className="inline-block p-8 bg-white/5 rounded-sm border border-gray-700 mb-8">
                  <svg 
                    className="w-16 h-16 text-gray-500 mx-auto" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.67 3.137a4 4 0 00-5.667-5.667"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {filtro ? "Nenhum resultado encontrado" : "Nenhum usuário cadastrado"}
                </h3>
                <p className="text-gray-400 text-lg max-w-md mx-auto">
                  {filtro 
                    ? "Tente ajustar sua busca ou remover filtros."
                    : "Os usuários aparecerão aqui assim que forem cadastrados no sistema."
                  }
                </p>
              </div>
            )}

            {/* Grid de cards */}
            {!isLoading && usuariosFiltrados.length > 0 && (
              <div className="bg-black/30 backdrop-blur-md border border-white/5 p-10 lg:p-12 shadow-xl rounded-sm">
                {/* Container que centraliza o grid */}
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full justify-items-center">
                    {usuariosFiltrados.map((usuario) => (
                      <div 
                        key={usuario.id}
                        className="w-full"
                      >
                        <CardUsuario 
                          usuario={usuario} 
                          onDeletar={() => deletarUsuario(usuario.id!)} 
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão Atualizar */}
                <div className="mt-16 pt-10 border-t border-gray-800 text-center">
                  <button
                    onClick={buscarUsuarios}
                    className="px-10 py-4 bg-transparent hover:bg-white/5 border border-gray-600 text-white font-medium transition-colors hover:border-green-500 text-base mx-auto rounded-sm"
                  >
                    Atualizar Lista
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </main>
    </div>
  )
}

export default ListarUsuarios