import './Footer.css';

export const Footer = () => {
  return (
    <footer className="section-footer" id="footer">
      <div className="footer-box container">
        
        {/* lado esquerdo - detalhes */}

        <div className="contact-details">
          <h2>Gen Force Fit</h2>
          <div className="contact-company-address">
            Uma plataforma completa de treinos<br />
            <br />
          </div>

          <div className="contact-social-links">

            <img
              src="https://vfitclub.netlify.app/image/whatsapp.svg"
              alt="whatsapp"
              width="30"
              height="30"
            />

            <img
              src="https://vfitclub.netlify.app/image/facebook.svg"
              alt="facebook"
              width="30"
              height="30"
            />

            {/* instagram */}

            <a
              href="https://www.instagram.com/genforcefit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://vfitclub.netlify.app/image/instagram.svg"
                alt="instagram"
                width="30"
                height="30"
              />
            </a>

          </div>
        </div>

        {/* centro - links */}

        <nav className="footer-nav">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#login">Login</a></li>
            <li><a href="#cadastro">Cadastre-se</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

        {/* direita - novidades */}

        <div className="newsletter">
          <h3>Conecte-se às novidades</h3>

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
