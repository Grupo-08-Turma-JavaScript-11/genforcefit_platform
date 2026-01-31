import React from 'react';

export const Footer = () => {
  return (
    <footer className="section-footer" id="footer" style={{ backgroundColor: '#000', color: 'white', padding: '60px 0' }}>
      <div className="footer-box container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
        <div className="contact-details">
          <h2 style={{ color: 'var(--fit-neon)', marginBottom: '20px' }}>Gen Force Fit</h2>
          <div className="contact-company-address" style={{ opacity: 0.8 }}>
            Auxílio no Treino <br />
            <br />(inserir frase)
          </div>
          <div className="contact-social-links" style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
            <img src="https://vfitclub.netlify.app/image/whatsapp.svg" alt="whatsapp" width="30" height="30" /> 
            <img src="https://vfitclub.netlify.app/image/facebook.svg" alt="facebook" width="30" height="30" /> 
            <img src="https://vfitclub.netlify.app/image/instagram.svg" alt="instagram" width="30" height="30" /> 
          </div>
        </div>

        <nav className="footer-nav">
          <h3 style={{ color: 'var(--fit-neon)', marginBottom: '20px' }}>Links rápidos</h3>
          <ul style={{ listStyle: 'none' }}>
            <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>Sobre Nós</a></li>
            <li><a href="#memberships" style={{ color: '#fff', textDecoration: 'none' }}>Login</a></li>
           <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>Cadastre-se</a></li>
            <li><a href="#memberships" style={{ color: '#fff', textDecoration: 'none' }}>Contato</a></li>
          </ul>
        </nav>

        <div className="newsletter">
          <h3 style={{ color: 'var(--fit-neon)', marginBottom: '20px' }}>Fique por dentro das novidades:</h3>
          <input type="email" placeholder="Insira seu e-mail aqui" style={{ padding: '10px', background: '#111', border: '1px solid #333', color: '#fff' }} />
          {/* Botão Neon Reto */}
          <button style={{ backgroundColor: 'var(--fit-neon)', color: 'black', border: 'none', padding: '10px 15px', fontWeight: 'bold', cursor: 'pointer' }}>✓</button>
        </div>
      </div>
    </footer>
  );
};