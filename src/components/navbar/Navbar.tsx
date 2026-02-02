export const Navbar = () => {
  return (
    <header className="header-main">
      {/* lado esquerdo (logo) */}
      <div className="logo-content">
        <img src="https://vfitclub.netlify.app/image/logo.png" alt="Logo" width="45" />
      </div>
      
      {/* lado direito (menu) */}
      <nav>
        <ul className="nav-links">
          <li><a href="#cadastro">CADASTRE-SE</a></li>
          <li><a href="#planos">PLANOS</a></li>
          <li><a href="#calculo">CÁLCULO IMC</a></li>
          <li><a href="#sobrenos">SOBRE NÓS</a></li>
          <li><a href="login" className="btn-login">LOGIN</a></li> {/* igual botão newsletter */}
        </ul>
      </nav>
    </header>
  );
};