import type Usuario from "../../../models/Usuario"

interface CardUsuarioProps {
  usuario: Usuario
}

function CardUsuario({ usuario }: CardUsuarioProps) {
  return (
    <div className="bg-black/30 backdrop-blur-md border border-white/5 p-8 w-full hover:border-green-500/50 transition-all duration-300 hover:bg-white/5 shadow-lg">
      
      {/* Cabeçalho do Card */}
      <div className="flex flex-col items-center text-center mb-6">
        
        {/* Avatar/Ícone */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/30 flex items-center justify-center mb-5">
          <svg 
            className="w-10 h-10 text-green-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        
        {/* Nome do Usuário */}
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
          {usuario.nome || "Usuário"}
        </h3>
        
        {/* Email */}
        <div className="flex items-center justify-center gap-2 text-gray-400 text-base mb-5">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="truncate max-w-xs">{usuario.usuario}</span>
        </div>
      </div>

      {/* Divisor */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent mb-6"></div>

      {/* Informações do Usuário */}
      <div className="space-y-5">
        
        {/* Altura */}
        <div className="flex justify-between items-center bg-white/5 p-4 rounded-sm border border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/10 rounded-sm border border-green-500/20">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <span className="text-gray-300 text-base">Altura</span>
          </div>
          <span className="text-white font-bold text-lg">
            {usuario.altura && usuario.altura > 0 ? `${usuario.altura} cm` : 
              <span className="text-gray-500 text-base">Não informado</span>
            }
          </span>
        </div>
        
        {/* Peso */}
        <div className="flex justify-between items-center bg-white/5 p-4 rounded-sm border border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/10 rounded-sm border border-green-500/20">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className="text-gray-300 text-base">Peso</span>
          </div>
          <span className="text-white font-bold text-lg">
            {usuario.peso && usuario.peso > 0 ? `${usuario.peso} kg` : 
              <span className="text-gray-500 text-base">Não informado</span>
            }
          </span>
        </div>
        
        {/* Grupo Muscular */}
        {usuario.grupoMuscular && (
          <div className="flex justify-between items-center bg-white/5 p-4 rounded-sm border border-white/5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/10 rounded-sm border border-green-500/20">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-gray-300 text-base">Grupo Muscular</span>
            </div>
            <span className="text-green-400 font-semibold text-base bg-green-500/10 px-4 py-2 rounded-sm border border-green-500/30">
              {usuario.grupoMuscular}
            </span>
          </div>
        )}
        
        {/* Status */}
        <div className="mt-6 pt-5 border-t border-white/10">
          <div className="flex items-center justify-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Usuário Ativo</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardUsuario