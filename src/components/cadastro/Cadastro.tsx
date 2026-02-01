import './Cadastro.css'; 
export const Cadastro = () => {
  return (
    <section className="section-cadastro" id="cadastro">
      <div className="container">
        <div className="cadastro-wrapper">
          <form className="cadastro-form" onSubmit={(e) => e.preventDefault()}>
            <h2 className="section-title">Faça parte da GenForceFit</h2>
            <p className="cadastro-subtitle">preencha os dados abaixo para começar sua jornada</p>
            
            <div className="input-group">
              <div className="class-input">
                <label>nome completo</label>
                <input type="text" placeholder="digite seu nome" />
              </div>
              
              <div className="class-input">
                <label>e-mail</label>
                <input type="email" placeholder="seu melhor e-mail" />
              </div>
            </div>

            <div className="input-group">
              <div className="class-input">
                <label>telefone</label>
                <input type="tel" placeholder="(00) 00000-0000" />
              </div>
              
              <div className="class-input">
                <label>objetivo</label>
                <input type="text" placeholder="ex: emagrecimento, hipertrofia" />
              </div>
            </div>

            <button type="submit" className="btn-main">cadastre-se já</button>
          </form>
        </div>
      </div>
    </section>
  );
};