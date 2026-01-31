import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/login/Login";
import CadastroUsuario from "./pages/cadastro/CadastroUsuario";
import ListarUsuarios from "./components/usuario/listarusuarios/ListarUsuarios";
import DeletarUsuario from "./components/usuario/deletarusuario/DeletarUsuario";
import ListarGrupoMuscular from "./components/GrupoMuscular/ListGrupoMuscular/ListGrupoMuscular";
import FormGrupoMuscular from "./components/GrupoMuscular/formGrupoMuscular/FormGrupoMuscular";
import DeletarGrupoMuscular from "./components/GrupoMuscular/deleteGrupoMuscular/DeleteGrupoMuscular";
import FormExercicio from "./components/exercicio/formexercicio/FormExercicio";
import ListExercicio from "./components/exercicio/listexercicio/ListExercicio";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Cadastro */}
        <Route path="/cadastro" element={<CadastroUsuario />} />

        {/* Exercicio */}
        <Route path="/cadastroexercicio" element={<FormExercicio />} />
        <Route path="/editarexercicio" element={<FormExercicio />} />
        <Route path="/exercicios" element={<ListExercicio />} />

        {/* Usuários */}
        <Route path="/listarusuarios" element={<ListarUsuarios />} />
        <Route path="/deletarusuario/:id" element={<DeletarUsuario />} />

        {/* Grupo Muscular */}
        <Route path="/gruposmusculares" element={<ListarGrupoMuscular />} />
        <Route path="/cadastrargrupomuscular" element={<FormGrupoMuscular />} />
        <Route path="/editargrupomuscular/:id" element={<FormGrupoMuscular />} />
        <Route path="/deletargrupomuscular/:id" element={<DeletarGrupoMuscular />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
