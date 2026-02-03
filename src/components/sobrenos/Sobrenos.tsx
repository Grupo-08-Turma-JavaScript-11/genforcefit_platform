import './Sobrenos.css';

export const Sobrenos = () => {
  const instrutores = [
    { nome: "Professor Jonathan", cargo: "Personal Trainer", img: "JoeBloggs.jpg" },
    { nome: "Professor Carlos", cargo: "Personal Trainer", img: "CharlieWatson.jpg" },
    { nome: "Professora Raquel", cargo: "Personal Trainer", img: "RachelDanielle.jpg" },
    { nome: "Professora Tais", cargo: "Personal Trainer", img: "TaylorMelé.jpg" },
  ];

  return (
    <section className="py-[100px] bg-[var(--fit-black)]" id="sobrenos">
      <div className="container">
       <h2 className="section-title p-6">Nossa Equipe</h2>
        <div className="flex justify-center flex-wrap gap-[25px] mt-[40px]">
          {instrutores.map((m, i) => (
            <div key={i} className="instrutor-card">
              <div className="instrutor-img">
                <img src={`https://vfitclub.netlify.app/image/${m.img}`} alt={m.nome} />
              </div>
              <div className="instrutor-info">
                <div className="font-bold text-[1.1rem] text-white normal-case">{m.nome}</div>
                <div className="text-[var(--green-neon)] text-[0.9rem] normal-case mt-[5px]">{m.cargo}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sobrenos;