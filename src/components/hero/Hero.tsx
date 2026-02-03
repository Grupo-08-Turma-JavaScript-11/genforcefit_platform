import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero-section">
      {/* Navbar renderizada no topo da seção hero */}
            
      <div className="hero-wrapper-full">
        <div className="hero-text-box">
          <h1 className="hero-title">
            movimento que gera <span className="text-highlight">resultado</span>
          </h1>
          <p className="hero-subtitle">
            Treinamento funcional e alta performance na Genforcefit 
          </p>
          <button className="btn-main">
            <a href='#cadastro'>Comecar agora</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;