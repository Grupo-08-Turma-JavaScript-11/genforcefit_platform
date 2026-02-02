import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";

import { Hero } from "./components/hero/Hero";
import { Sobrenos } from "./components/sobrenos/Sobrenos";
import { Planos } from "./components/planos/Planos";
import { Calculo } from "./components/calculo/Calculo";
import { Cadastro } from "./components/cadastro/Cadastro";
import { Footer } from "./components/footer/Footer";

import ListarGrupoMuscular from "./components/grupomuscular/listagrupomuscular/ListaGrupoMuscular";
import FormGrupoMuscular from "./components/grupomuscular/formgrupomuscular/FormGrupoMuscular";
import DeletarGrupoMuscular from "./components/grupomuscular/deletegrupomuscular/DeleteGrupoMuscular";

import Login from "./pages/login/Login";
import CadastroMariana from "./pages/cadastro/Cadastro";
import ListUsuario from "./components/usuario/listusuario/ListUsuario"
import FormUsuario from "./components/usuario/formusuario/FormUsuario"
import DeleteUsuario from "./components/usuario/deleteUsuario/DeleteUsuario";


import "./index.css";

function Home() {
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
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastromariana" element={<CadastroMariana />} />

          {/* USUÁRIOS */}
          <Route path="/usuarios" element={<ListUsuario />} />
          <Route path="/cadastrarusuarios" element={<FormUsuario />} />
          <Route path="/editarusuarios/:id" element={<FormUsuario />} />
          <Route path="/deletarusuarios/:id" element={<DeleteUsuario />} />

        {/* GrupoMuscular */}
        <Route path="/grupoMuscular" element={<ListarGrupoMuscular />} />
        <Route path="/cadastrargrupomuscular" element={<FormGrupoMuscular />} />
        <Route path="/editargrupomuscular/:id" element={<FormGrupoMuscular />} />
        <Route path="/deletargrupomuscular/:id" element={<DeletarGrupoMuscular />} />
      </Routes>
    </BrowserRouter>
     </AuthProvider>
  );
}

export default App;