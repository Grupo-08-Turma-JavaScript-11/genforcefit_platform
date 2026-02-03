<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
>>>>>>> 5f14cdd4523ca2cf17156456fbd923c20d298f94

export const Navbar = () => {
  const { usuario, handleLogout } = useContext(AuthContext);

  const location = useLocation();

  return (
    <header className="absolute top-0 left-0 w-full z-[1000]
         flex justify-between items-center
         px-6 md:px-[10%]
         py-5 md:py-[35px]
         bg-transparent">
      {/* lado esquerdo (logo) */}
      <div className="logo-content">
        <img
          src="https://vfitclub.netlify.app/image/logo.png"
          alt="Logo"
          width="45"
        />
      </div>

      {/* lado direito (menu) */}
      <nav className="hidden md:flex">
<<<<<<< HEAD
        <ul className="flex items-center gap-[35px] list-none m-0 p-0">
          <li><a href="#cadastro"
=======
        {!usuario.token && location.pathname !== "/login" && (
        <ul className="flex items-center gap-[35px] list-none m-0 p-0">
          <li>
            <a href="#cadastro"
              className="text-white no-underline font-bold text-[0.9rem]
              whitespace-nowrap normal-case
              transition duration-300 ease-out
              hover:text-[var(--green-soft)]
              hover:shadow-[0_0_2px_rgba(0,0,0,0.4)]">
                CADASTRE-SE
              </a>
          </li>
          <li>
            <a href="#planos"
              className="text-white no-underline font-bold text-[0.9rem]
              whitespace-nowrap normal-case
              transition duration-300 ease-out
              hover:text-[var(--green-soft)]
              hover:shadow-[0_0_2px_rgba(0,0,0,0.4)]">
                PLANOS
              </a>
          </li>
          <li>
            <a href="#calculo"
>>>>>>> 5f14cdd4523ca2cf17156456fbd923c20d298f94
            className="text-white no-underline font-bold text-[0.9rem]
            whitespace-nowrap normal-case
            transition duration-300 ease-out
            hover:text-[var(--green-soft)]
<<<<<<< HEAD
            hover:shadow-[0_0_2px_rgba(0,0,0,0.4)]"
            >CADASTRE-SE</a></li>
          <li><a href="#planos"
=======
            hover:shadow-[0_0_2px_rgba(0,0,0,0.4)]">
              CÁLCULO IMC
            </a>
          </li>
          <li>
            <a href="#sobrenos"
>>>>>>> 5f14cdd4523ca2cf17156456fbd923c20d298f94
            className="text-white no-underline font-bold text-[0.9rem]
            whitespace-nowrap normal-case
            transition duration-300 ease-out
            hover:text-[var(--green-soft)]
<<<<<<< HEAD
            hover:shadow-[0_0_2px_rgba(0,0,0,0.4)]">PLANOS</a></li>
          <li><a href="#calculo"
            className="text-white no-underline font-bold text-[0.9rem]
            whitespace-nowrap normal-case
            transition duration-300 ease-out
            hover:text-[var(--green-soft)]
            hover:shadow-[0_0_2px_rgba(0,0,0,0.4)]">CÁLCULO IMC</a></li>
          <li><a href="#sobrenos"
            className="text-white no-underline font-bold text-[0.9rem]
            whitespace-nowrap normal-case
            transition duration-300 ease-out
            hover:text-[var(--green-soft)]
            hover:shadow-[0_0_2px_rgba(0,0,0,0.4)]">SOBRE NÓS</a></li>
          <li><Link to="/login" className="bg-transparent text-[var(--green-neon)] font-bold
         border-2 border-[var(--green-neon)]
         px-[18px] py-[6px]
         text-[0.85rem]
         rounded-full
         shadow-[0_4px_15px_rgba(57,255,20,0.3)]
         cursor-pointer
         transition-all duration-300 ease-out
         hover:text-white
         hover:shadow-[0_6px_20px_rgba(57,255,20,0.5)]
         hover:-translate-y-[2px]">LOGIN</Link></li> {/* igual botão newsletter */}
=======
            hover:shadow-[0_0_2px_rgba(0,0,0,0.4)]">
              SOBRE NÓS
            </a>
          </li>
          <li>
            <Link to="/login" className="bg-transparent text-[var(--green-neon)] font-bold
              border-2 border-[var(--green-neon)]
              px-[18px] py-[6px]
              text-[0.85rem]
              rounded-full
              shadow-[0_4px_15px_rgba(57,255,20,0.3)]
              cursor-pointer
              transition-all duration-300 ease-out
              hover:text-white
              hover:shadow-[0_6px_20px_rgba(57,255,20,0.5)]
              hover:-translate-y-[2px]">
                LOGIN
              </Link>
          </li> {/* igual botão newsletter */}
>>>>>>> 5f14cdd4523ca2cf17156456fbd923c20d298f94
        </ul>
        )}
        {!usuario.token && location.pathname === "/login" && (
          <ul className="nav-links">
            <li>
              <Link to="/" className="bg-transparent text-[var(--green-neon)] font-bold
                border-2 border-[var(--green-neon)]
                px-[18px] py-[6px]
                text-[0.85rem]
                rounded-full
                shadow-[0_4px_15px_rgba(57,255,20,0.3)]
                cursor-pointer
                transition-all duration-300 ease-out
                hover:text-white
                hover:shadow-[0_6px_20px_rgba(57,255,20,0.5)]
                hover:-translate-y-[2px]">
                Home
              </Link>
            </li>
          </ul>
        )}
        {usuario.token && (
          <ul className="nav-links">
            {usuario.tipo === "Professor" && (
              <>
                <li>
                  <Link to="/exercicios" className="text-white no-underline font-bold text-[0.9rem]
                    whitespace-nowrap normal-case
                    transition duration-300 ease-out
                    hover:text-[var(--green-soft)]
                    hover:shadow-[0_0_2px_rgba(0,0,0,0.4)]">
                    Exercícios
                  </Link>
                </li>
                <li>
                  <Link to="/grupomuscular" className="text-white no-underline font-bold text-[0.9rem]
                    whitespace-nowrap normal-case
                    transition duration-300 ease-out
                    hover:text-[var(--green-soft)]
                    hover:shadow-[0_0_2px_rgba(0,0,0,0.4)]">
                    Grupo Muscular
                  </Link>
                </li>
                <li>
                  <Link to="/usuarios" className="text-white no-underline font-bold text-[0.9rem]
                    whitespace-nowrap normal-case
                    transition duration-300 ease-out
                    hover:text-[var(--green-soft)]
                    hover:shadow-[0_0_2px_rgba(0,0,0,0.4)]">
                    Usuarios
                  </Link>
                </li>
              </>
            )}
            <li>
              <button onClick={handleLogout} className="bg-transparent text-[#D99A41] font-bold
                  border-2 border-[#D99A41]
                  px-[18px] py-[6px]
                  text-[0.85rem]
                  rounded-full
                  shadow-[0_4px_15px_rgb(227,150,48)]
                  cursor-pointer
                  transition-all duration-300 ease-out
                  hover:text-white
                  hover:shadow-[0_6px_20px_rgba(227,150,50)]
                  hover:-translate-y-[2px]">
                Logout
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
