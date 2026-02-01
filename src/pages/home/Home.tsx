import { Hero } from "../../components/hero/Hero";
import { useAos } from "../../hooks/useAos";
import { Footer } from "../../components/footer/Footer";
import { Sobrenos } from "../../components/sobrenos/Sobrenos";
import { Calculo } from "../../components/calculo/Calculo";
import { Cadastro } from "../../components/cadastro/Cadastro";
import Planos from "../../components/planos/Planos";

export const Home = () => {
  useAos();

  return (
    <main style={{ backgroundColor: '#000' }}>
      <Hero />        
      <Sobrenos />      
      <Cadastro />
      <Planos /> 
      <Calculo />
      <Footer />
    </main>
  );
};