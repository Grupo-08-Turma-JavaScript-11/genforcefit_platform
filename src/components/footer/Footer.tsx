function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="logo">LOGO</div>

        <div className="footer-links">
          <a href="#">Contato</a>
        </div>

        <div className="footer-social">
          <span>Instagram</span>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} <strong>Gen Force Fit</strong>
      </div>

    </footer>
  );
}

export default Footer;  
