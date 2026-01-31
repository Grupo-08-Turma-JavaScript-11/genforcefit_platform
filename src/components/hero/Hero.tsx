import { Navbar } from "../Navbar/Navbar";

export const Hero = () => {
  return (
    <section className="hero-section">
      <Navbar />
      <div className="hero-wrapper-full">
        <div className="hero-text-box">
          <h1 className="hero-title">
            MOVIMENTO QUE GERA <span className="text-highlight">RESULTADO</span>
          </h1>
          <p className="hero-subtitle">
            Treinamento funcional e alta performance na GenForceFit 
          </p>
          <button className="btn-main">
            COMEÇAR AGORA
          </button>
        </div>
      </div>
    </section>
  );
};