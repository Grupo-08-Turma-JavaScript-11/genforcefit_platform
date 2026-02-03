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
import ListUsuario from "./components/usuario/listusuario/ListUsuario";
import FormUsuario from "./components/usuario/formusuario/FormUsuario";
import DeleteUsuario from "./components/usuario/deleteUsuario/DeleteUsuario";

import "./index.css";
import ListExercicio from "./components/exercicio/listexercicio/ListExercicio";
import FormExercicio from "./components/exercicio/formexercicio/FormExercicio";
import DeleteExercicio from "./components/exercicio/deleteexercicio/DeleteExercicio";
import { RequireAuth } from "./routes/RequireAuth";
import { RequireRole } from "./routes/RequireRole";
import { Home } from "./pages/home/Home";


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
          <Route path="/login" element={<Login />} />

          <Route element={<RequireAuth />}>
            
            <Route path="/exercicios" element={<ListExercicio />} />

            <Route path="/cadastro" element={<CadastroMariana />} />

            <Route element={<RequireRole allowed={["Professor"]} />}>
              
              <Route path="/usuarios" element={<ListUsuario />} />
              <Route path="/cadastrarusuarios" element={<FormUsuario />} />
              <Route path="/editarusuarios/:id" element={<FormUsuario />} />
              <Route path="/deletarusuarios/:id" element={<DeleteUsuario />} />

              
              <Route path="/grupomuscular" element={<ListarGrupoMuscular />} />
              <Route
                path="/cadastrargrupomuscular"
                element={<FormGrupoMuscular />}
              />
              <Route
                path="/editargrupomuscular/:id"
                element={<FormGrupoMuscular />}
              />
              <Route
                path="/deletargrupomuscular/:id"
                element={<DeletarGrupoMuscular />}
              />

              
              
              <Route path="/cadastrarExercicio" element={<FormExercicio />} />
              <Route path="/editarExercicio/:id" element={<FormExercicio />} />
              <Route
                path="/deletarExercicio/:id"
                element={<DeleteExercicio />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
