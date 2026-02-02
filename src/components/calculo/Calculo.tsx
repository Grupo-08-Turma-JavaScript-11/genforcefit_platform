import './Calculo.css';

export const Calculo = () => {
  return (
    <section className="section-calculo" id="calculo">
      <div className="container">
        <div className="calculo-wrapper">
          {/* onSubmit com preventDefault para a página não recarregar ao clicar no botão */}
          <form className="calculo-form" onSubmit={(e) => e.preventDefault()}>
            <br />
            <h2 className="section-title">Calcule seu IMC</h2>
            <br />
            <br />
            <p className="calculo-subtitle">Monitore sua saúde em tempo real</p>
            
            <div className="input-group">
              <div className="class-input">
              <label>Peso (kg)</label>
              <input type="number" placeholder="ex: 80" />
              </div>
              
              <div className="class-input">
                <label>Altura (m)</label>
                <input type="number" step="0.01" placeholder="ex: 1.75" />
              </div>
            </div>

            <div className="class-input result-input">
              <label>Seu Resultado</label>
              <input type="text" placeholder="---" readOnly />
            </div>

            <button type="submit" className="btn-main">calcular agora</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Calculo;