import { Link, useLocation } from "react-router-dom";
import "./Footer.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Footer = () => {
  const { usuario , handleLogout } = useContext(AuthContext);
  const location = useLocation();

  const tipo = usuario.tipo;
  const token = usuario.token;

  return (
    <footer className=" flex items-center bg-[var(--fit-black)] text-white pt-20 pb-10 border-t border-[#111]">
      <div className=" mt-8 flex flex-wrap gap-10 justify-start md:justify-between container">
        {/* lado esquerdo - detalhes */}

        <div className="text-[var(--green-soft)] mb-[5px] normal-case">
          <h2>Gen Force Fit</h2>
          <div className="opacity-80 leading-[1.6] !normal-case text-white">
            Uma plataforma completa de treinos
            <br />
            <br />
          </div>
          <div className="flex mt-2 gap-5 items-center">
            <Link
              to="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="cursor-pointer transition duration-300 hover:drop-shadow-[0_0_8px_var(--green-neon)] hover:-translate-y-[3px]"
                src="https://vfitclub.netlify.app/image/whatsapp.svg"
                alt="whatsapp"
                width="30"
                height="30"
              />
            </Link>

            <Link
              to="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="cursor-pointer transition duration-300 hover:drop-shadow-[0_0_8px_var(--green-neon)] hover:-translate-y-[3px]"
                src="https://vfitclub.netlify.app/image/facebook.svg"
                alt="facebook"
                width="30"
                height="30"
              />
            </Link>

            {/* instagram */}

            <Link
              to="https://www.instagram.com/genforcefit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="cursor-pointer transition duration-300 hover:drop-shadow-[0_0_8px_var(--green-neon)] hover:-translate-y-[3px]"
                src="https://vfitclub.netlify.app/image/instagram.svg"
                alt="instagram"
                width="30"
                height="30"
              />
            </Link>
          </div>
        </div>

        {/* centro - links */}

        <nav className="footer-nav">
          <h3 className="text-[var(--green-soft)] mb-5 text-[1.2rem]">
            Links Rápidos
          </h3>
          {!token && location.pathname !== "/login" && (
            <ul>
              <li className="mb-3">
                <a
                  href="#sobrenos"
                  className="text-white no-underline text-[0.9rem] transition-all duration-300
                hover:text-[var(--green-soft)]
                hover:ml-[5px]"
                >
                  Sobre Nós
                </a>
              </li>
              <li className="mb-3">
                <Link
                  to="/login"
                  className="text-white no-underline text-[0.9rem] transition-all duration-300
                hover:text-[var(--green-soft)]
                hover:ml-[5px]"
                >
                  Login
                </Link>
              </li>
              <li className="mb-3">
                <a
                  href="#cadastro"
                  className="text-white no-underline text-[0.9rem] transition-all duration-300
              hover:text-[var(--green-soft)]
              hover:ml-[5px]"
                >
                  Cadastre-se
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#calculo"
                  className="text-white no-underline text-[0.9rem] transition-all duration-300
              hover:text-[var(--green-soft)]
              hover:ml-[5px]"
                >
                  Calculo IMC
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#planos"
                  className="text-white no-underline text-[0.9rem] transition-all duration-300 hover:text-[var(--green-soft)] hover:ml-[5px]"
                >
                  Planos
                </a>
              </li>
            </ul>
          )}
          {!token && location.pathname === "/login" && (
            <ul>
              <li className="mb-3">
                <Link
                  to="/"
                  className="text-white no-underline text-[0.9rem] transition-all duration-300
                hover:text-[var(--green-soft)]
                hover:ml-[5px]"
                >
                  Home
                </Link>
              </li>
            </ul>
          )}
          {token && (
            <ul>
              {tipo === "Professor" && (
                <>
                  <li className="mb-3">
                    <Link
                      to="/exercicios"
                      className="text-white no-underline text-[0.9rem] transition-all duration-300
                hover:text-[var(--green-soft)]
                hover:ml-[5px]"
                    >
                      Exercícios
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to="/grupomuscular"
                      className="text-white no-underline text-[0.9rem] transition-all duration-300
                hover:text-[var(--green-soft)]
                hover:ml-[5px]"
                    >
                      Grupo Muscular
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to="/usuarios"
                      className="text-white no-underline text-[0.9rem] transition-all duration-300
                hover:text-[var(--green-soft)]
                hover:ml-[5px]"
                    >
                      Home
                    </Link>
                  </li>
                </>
              )}
              <li className="mb-3">
                <a
                  onClick={handleLogout}
                  className="text-white no-underline text-[0.9rem] transition-all duration-300 hover:text-[var(--green-soft)] hover:ml-[5px]"
                >
                  Logout
                </a>
              </li>
            </ul>
          )}
        </nav>

        {/* direita - novidades */}

        <div className="newsletter">
          <h3 className="text-[var(--green-soft)] text-[1.1rem]">
            Conecte-se às novidades
          </h3>

          <div className="newsletter-input-group">
            <input
              type="email"
              placeholder="Seu e-mail"
              className=" flex flex-wrap px-[15px] py-3 w-[200px]
              bg-[var(--fit-input)]
              border border-[#333]
              text-white
              outline-none
              focus:border-[var(--green-soft)]
              focus:ring-1 focus:ring-[var(--green-soft)]
              transition"
            />
            <button
              type="submit"
              className="bg-[var(--green-neon)] text-black font-bold px-5 h-[49px] w-[49px]
              transition-all duration-300 ease-out
              hover:bg-white
              hover:shadow-[0_0_15px_var(--green-neon)]
              active:scale-95"
            >
              ✓
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
