import './Footer.css';

export const Footer = () => {
  return (
    <footer className="section-footer" id="footer">
      <div className="footer-box container">
        
        {/* Lado Esquerdo - Detalhes */}
        <div className="contact-details">
          <h2>gen force fit</h2>
          <div className="contact-company-address">
            auxílio no treino <br />
            <br />
            sua evolução começa aqui.
          </div>
          <div className="contact-social-links">
            <img src="https://vfitclub.netlify.app/image/whatsapp.svg" alt="whatsapp" width="30" height="30" /> 
            <img src="https://vfitclub.netlify.app/image/facebook.svg" alt="facebook" width="30" height="30" /> 
            <img src="https://vfitclub.netlify.app/image/instagram.svg" alt="instagram" width="30" height="30" /> 
          </div>
        </div>

        {/* Centro - Links */}
        <nav className="footer-nav">
          <h3>links rápidos</h3>
          <ul>
            <li><a href="#about">sobre nós</a></li>
            <li><a href="#login">login</a></li>
            <li><a href="#cadastro">cadastre-se</a></li>
            <li><a href="#contato">contato</a></li>
          </ul>
        </nav>

        {/* Direita - Newsletter */}
        <div className="newsletter">
          <h3>fique por dentro das novidades:</h3>
          <div className="newsletter-input-group">
            <input type="email" placeholder="insira seu e-mail aqui" />
            <button className="btn-newsletter">✓</button>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;