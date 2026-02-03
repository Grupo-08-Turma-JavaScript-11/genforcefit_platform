import { useState } from "react";
import "./Calculo.css";

export const Calculo = () => {
const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularIMC(e: React.FormEvent) {
    e.preventDefault();

    if (!peso || !altura) {
      setResultado("Preencha peso e altura");
      return;
    }

    const imc = (Number(peso) / (Number(altura) * Number(altura))).toFixed(2);
    setResultado(imc);
  }

  return (
    <section className="section-calculo" id="calculo">
      <div className="container">
        <div className="calculo-wrapper">

          <form className="calculo-form" onSubmit={calcularIMC}>

            <h2 className="text-[var(--green-neon)] text-center text-4xl font-bold my-6">
              Calcule seu IMC
            </h2>

            <p className="calculo-subtitle">
              Monitore sua saúde em tempo real
            </p>

            <div className="input-group">

              <div className="class-input">
                <label>Peso (kg)</label>
                <input
                  type="number"
                  placeholder="ex: 80"
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                />
              </div>

              <div className="class-input">
                <label>Altura (m)</label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="ex: 1.75"
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                />
              </div>

            </div>

            <div className="class-input result-input">
              <label>Seu Resultado</label>
              <input type="text" value={resultado} readOnly />
            </div>

            <button type="submit" className="btn-main">
              calcular agora
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Calculo;