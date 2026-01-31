import React from 'react';

export const Cadastro = () => {
  return (
    <section className="section-cadastro" id="cadastro">
      <div className="container">
        <div className="cadastro-wrapper">
          <form className="cadastro-form">
            <h2 className="section-title">Faça parte da GenForceFit</h2>
            <p className="cadastro-subtitle">Preencha os dados abaixo para começar sua jornada</p>
            
            <div className="input-group">
              <div className="class-input">
                <label>Nome Completo</label>
                <input type="text" placeholder="digite seu nome" />
              </div>
              
              <div className="class-input">
                <label>E-mail</label>
                <input type="email" placeholder="seu melhor e-mail" />
              </div>
            </div>

            <div className="input-group">
              <div className="class-input">
                <label>Telefone</label>
                <input type="tel" placeholder="(00) 00000-0000" />
              </div>
              
              <div className="class-input">
                <label>Objetivo</label>
                <input type="text" placeholder="ex: emagrecimento, hipertrofia" />
              </div>
            </div>

            <button type="submit" className="btn-main">Cadastre-se</button>
          </form>
        </div>
      </div>
    </section>
  );
};