import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import { Hero } from './components/hero/Hero';
import { Sobrenos } from './components/sobrenos/Sobrenos';
import { Planos } from './components/planos/Planos';
import { Calculo } from './components/calculo/Calculo';
import { Cadastro } from './components/cadastro/Cadastro';
import { Footer } from './components/footer/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 50,
      duration: 400,
      once: true,
    });
  }, []);

  return (
    <>
      <main>
        <Hero />
        <Cadastro />
        <Planos />
        <Calculo />
        <Sobrenos />
      </main>
      <Footer />
    </>
  );
}

export default App;