import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-[1000]
         flex justify-between items-center
         px-6 md:px-[10%]
         py-5 md:py-[35px]
         bg-transparent">
      {/* lado esquerdo (logo) */}
      <div className="logo-content">
        <img src="https://vfitclub.netlify.app/image/logo.png" alt="Logo" width="45" />
      </div>
      
      {/* lado direito (menu) */}
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-[35px] list-none m-0 p-0">
          <li><a href="#cadastro"
            className="text-white no-underline font-bold text-[0.9rem]
            whitespace-nowrap normal-case
            transition duration-300 ease-out
            hover:text-[var(--green-soft)]
            hover:shadow-[0_0_2px_rgba(0,0,0,0.4)]"
            >CADASTRE-SE</a></li>
          <li><a href="#planos"
            className="text-white no-underline font-bold text-[0.9rem]
            whitespace-nowrap normal-case
            transition duration-300 ease-out
            hover:text-[var(--green-soft)]
            hover:shadow-[0_0_2px_rgba(0,0,0,0.4)]">PLANOS</a></li>
          <li><a href="#calculo"
            className="text-white no-underline font-bold text-[0.9rem]
            whitespace-nowrap normal-case
            transition duration-300 ease-out
            hover:text-[var(--green-soft)]
            hover:shadow-[0_0_2px_rgba(0,0,0,0.4)]">CÁLCULO IMC</a></li>
          <li><a href="#sobrenos"
            className="text-white no-underline font-bold text-[0.9rem]
            whitespace-nowrap normal-case
            transition duration-300 ease-out
            hover:text-[var(--green-soft)]
            hover:shadow-[0_0_2px_rgba(0,0,0,0.4)]">SOBRE NÓS</a></li>
          <li><Link to="/login" className="bg-transparent text-[var(--green-neon)] font-bold
         border-2 border-[var(--green-neon)]
         px-[18px] py-[6px]
         text-[0.85rem]
         rounded-full
         shadow-[0_4px_15px_rgba(57,255,20,0.3)]
         cursor-pointer
         transition-all duration-300 ease-out
         hover:text-white
         hover:shadow-[0_6px_20px_rgba(57,255,20,0.5)]
         hover:-translate-y-[2px]">LOGIN</Link></li> {/* igual botão newsletter */}
        </ul>
      </nav>
    </header>
  );
};