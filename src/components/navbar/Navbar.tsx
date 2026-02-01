export const Navbar = () => {
  return (
    <header className="header-main">
      {/* Lado Esquerdo (Logo) */}
      <div className="logo-content">
        <img src="https://vfitclub.netlify.app/image/logo.png" alt="Logo" width="45" />
      </div>
      
      {/* Lado Direito (Menu) */}
      <nav>
        <ul className="nav-links">
          <li><a href="#cadastro">Cadastre-se</a></li>
          <li><a href="#planos">Planos</a></li>
          <li><a href="#calculo">Cálculo IMC</a></li>
          <li><a href="#sobrenos">Sobre Nós</a></li>
          <li><a href="#footer">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};