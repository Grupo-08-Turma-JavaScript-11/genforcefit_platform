import { Hero } from "../../components/hero/Hero";
import { useAos } from "../../hooks/useAos";
import { Sobrenos } from "../../components/sobrenos/Sobrenos";
import { Calculo } from "../../components/calculo/Calculo";
import Planos from "../../components/planos/Planos";
import Cadastro from "../cadastro/Cadastro";

export const Home = () => {
  useAos();

  return (
    <main style={{ backgroundColor: '#000' }}>
      <Hero />             
      <Planos /> 
      <Cadastro />
      <Calculo />
      <Sobrenos />   
    </main>
  );
};