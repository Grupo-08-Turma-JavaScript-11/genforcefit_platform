import './Calculo.css';

export const Calculo = () => {
  return (
    <section className="section-calculo" id="calculo">
      <div className="container">
        <div className="calculo-wrapper">
          {/* onSubmit com preventDefault para a página não recarregar ao clicar no botão */}
          <form className="calculo-form" onSubmit={(e) => e.preventDefault()}>
            <h2 className="section-title">calcule seu imc</h2>
            <p className="calculo-subtitle">monitore sua saúde em tempo real</p>
            
            <div className="input-group">
              <div className="class-input">
                <label>peso (kg)</label>
                <input type="number" placeholder="ex: 80" />
              </div>
              
              <div className="class-input">
                <label>altura (m)</label>
                <input type="number" step="0.01" placeholder="ex: 1.75" />
              </div>
            </div>

            <div className="class-input result-input">
              <label>seu resultado</label>
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