import React from 'react';

export const Calculo = () => {
  return (
    <section className="section-calculo" id="calculo">
      <div className="container">
        <div className="calculo-wrapper">
          <form className="calculo-form">
         <h2 className="section-title">Calcule seu IMC</h2>
            <p className="calculo-subtitle">Monitore sua saúde em tempo real</p>
            
            <div className="input-group">
              <div className="class-input">
                <label>Peso (kg)</label>
                <input type="number" placeholder="Ex: 80kg" />
              </div>
              
              <div className="class-input">
                <label>Altura (m)</label>
                <input type="number" step="0.01" placeholder="Ex: 1.75m" />
              </div>
            </div>

            <div className="class-input result-input">
              <label>Seu Resultado</label>
              <input type="text" placeholder="---" readOnly />
            </div>

            <button type="submit" className="btn-main">Calcular agora</button>
          </form>
        </div>
      </div>
    </section>
  );
};