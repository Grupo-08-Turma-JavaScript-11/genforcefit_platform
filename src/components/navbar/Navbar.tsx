import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const { usuario, handleLogout } = useContext(AuthContext);

  const location = useLocation();

  return (
    <header className="header-main">
      {/* lado esquerdo (logo) */}
      <div className="logo-content">
        <img
          src="https://vfitclub.netlify.app/image/logo.png"
          alt="Logo"
          width="45"
        />
      </div>

      {/* lado direito (menu) */}
      <nav>
        {!usuario.token && location.pathname !== "/login" && (
          <ul className="nav-links">
            <li>
              <a href="#cadastro">CADASTRE-SE</a>
            </li>
            <li>
              <a href="#planos">PLANOS</a>
            </li>
            <li>
              <a href="#calculo">CÁLCULO IMC</a>
            </li>
            <li>
              <a href="#sobrenos">SOBRE NÓS</a>
            </li>
            <li>
              <Link to="/login" className="btn-login">
                LOGIN
              </Link>
            </li>
          </ul>
        )}
        {!usuario.token && location.pathname === "/login" && (
          <ul className="nav-links">
            <li>
              <Link to="/" className="btn-login">
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
                  <Link to="/exercicios" className="btn-login">
                    Exercícios
                  </Link>
                </li>
                <li>
                  <Link to="/grupomuscular" className="btn-login">
                    Grupo Muscular
                  </Link>
                </li>
                <li>
                  <Link to="/usuarios" className="btn-login">
                    Usuarios
                  </Link>
                </li>
              </>
            )}
<li>
            <button onClick={handleLogout} className="btn-logout">
              Logout
            </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
