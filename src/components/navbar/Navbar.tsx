function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">LOGO</div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Sobre Nós</a>
        <a href="#">Página do Aluno</a>
        <a href="#">Página do Professor</a>
        <a href="#">Exercicios</a>
        <a href="#">IMC</a>

      </nav>

      <div className="nav-actions">
        <button className="btn-primary">Matricule-se</button>
      </div>
    </header>
  );
}

export default Navbar;
