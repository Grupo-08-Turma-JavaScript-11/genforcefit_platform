import './Sobrenos.css';

export const Sobrenos = () => {
  const instrutores = [
    { nome: "Professor Jonathan", cargo: "Personal Trainer", img: "JoeBloggs.jpg" },
    { nome: "Professor Carlos", cargo: "Personal Trainer", img: "CharlieWatson.jpg" },
    { nome: "Professora Raquel", cargo: "Personal Trainer", img: "RachelDanielle.jpg" },
    { nome: "Professora Tais", cargo: "Personal Trainer", img: "TaylorMelé.jpg" },
  ];

  return (
    <section className="section-sobrenos" id="sobrenos">
      <div className="container">
      <br />
       <h2 className="section-title">Nossa Equipe</h2>
       <br />
       <br />
       <br />
        <div className="instrutores-grid">
          {instrutores.map((m, i) => (
            <div key={i} className="instrutor-card">
              <div className="instrutor-img">
                <img src={`https://vfitclub.netlify.app/image/${m.img}`} alt={m.nome} />
              </div>
              <div className="instrutor-info">
                <div className="instrutor-nome">{m.nome}</div>
                <div className="instrutor-cargo">{m.cargo}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sobrenos;