import { useState } from "react"
import { useNavigate } from "react-router-dom"
import type UsuarioLogin from "../../models/UsuarioLogin"
import { autenticarUsuario } from "../../services/authService"
import { ToastAlerta } from "../../utils/ToastAlerta"

function Login() {
  const navigate = useNavigate()

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    usuario: "",
    senha: "",
  })

  const [carregando, setCarregando] = useState(false)

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    })
  }

  async function entrar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setCarregando(true)
    
    try {
      const response = await autenticarUsuario(usuarioLogin)
      
      localStorage.setItem("token", response.token)
      localStorage.setItem("tipo", response.tipo)
      
      ToastAlerta("Login realizado com sucesso!", "sucesso")
      navigate("/home")
    } catch {
      ToastAlerta("Email ou senha inválidos", "erro")
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
              Espaço do Cliente
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-none tracking-tight">
            GEN<span className="text-green-500">FORCE</span>FIT
          </h1>
          
          <div className="h-1 w-32 bg-green-500 mb-10"></div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-10 leading-tight">
            MOVIMENTO <br />
            <span className="text-green-500">QUE TRANSFORMA</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-14 leading-relaxed max-w-lg">
            Treinamento funcional de <span className="text-green-400 font-semibold">alta performance</span> para resultados reais e transformação física.
          </p>
          
        </div>

        {/* Lado Direito - Formulário de Login  */}
        <div className="lg:w-1/3 max-w-md">
          
          <div className="bg-black/30 backdrop-blur-md border border-white/5 p-10 shadow-xl">
            
            {/* Cabeçalho */}
            <div className="mb-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                LOGIN
              </h3>
              <p className="text-gray-400">
                Se você já é cliente, insira seus dados:
              </p>
            </div>

            <form onSubmit={entrar}>
              {/* Email = */}
              <div className="mb-10">
                <label className="block text-white font-semibold mb-4 text-lg">
                  E-MAIL
                </label>
                <input
                  type="email"
                  name="usuario"
                  placeholder="seu@email.com"
                  value={usuarioLogin.usuario}
                  onChange={atualizarEstado}
                  className="w-full h-14 px-5 bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all"
                  style={{ borderRadius: '2px' }}
                  required
                  disabled={carregando}
                />
              </div>

              {/* Senha */}
              <div className="mb-8">
                <label className="block text-white font-semibold mb-4 text-lg">
                  SENHA
                </label>
                <input
                  type="password"
                  name="senha"
                  placeholder="••••••••"
                  value={usuarioLogin.senha}
                  onChange={atualizarEstado}
                  className="w-full h-14 px-5 bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all"
                  style={{ borderRadius: '2px' }}
                  required
                  disabled={carregando}
                />
                
                {/* Esqueceu a senha? */}
                <div className="mt-6 text-right">
                  <button
                    type="button"
                    onClick={() => navigate("/recuperar-senha")}
                    className="text-green-400 hover:text-green-300 text-sm transition-colors"
                  >
                    Esqueceu a senha?
                  </button>
                </div>
              </div>

              {/* Botão Entrar */}
              <div className="mt-20 mb-16">
                <button
                  type="submit"
                  disabled={carregando}
                  className="w-full h-14 bg-green-500 hover:bg-green-600 text-black font-bold text-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ borderRadius: '2px' }}
                >
                  {carregando ? (
                    <div className="flex items-center justify-center">
                      <div className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                      ENTRANDO...
                    </div>
                  ) : (
                    "ENTRAR"
                  )}
                </button>
              </div>
            </form>

            {/* Divisor visual */}
            <div className="my-12 border-t border-gray-800"></div>

            {/* Cadastro */}
            <div className="text-center space-y-6">
              <p className="text-gray-400 text-base">
                Ainda não tem uma conta?
              </p>
              <button
                type="button"
                onClick={() => navigate("/cadastro")}
                className="w-full h-12 bg-transparent hover:bg-white/5 border border-gray-600 text-white font-medium transition-colors hover:border-green-500"
                style={{ borderRadius: '2px' }}
              >
                Criar Nova Conta
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}

export default Login