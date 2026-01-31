import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/login/Login";
import CadastroUsuario from "./pages/cadastro/CadastroUsuario";
import ListarUsuarios from "./components/usuario/listarusuarios/ListarUsuarios";
import DeletarUsuario from "./components/usuario/deletarusuario/DeletarUsuario";
import ListarGrupoMuscular from "./components/GrupoMuscular/ListGrupoMuscular/ListGrupoMuscular";
import FormGrupoMuscular from "./components/GrupoMuscular/formGrupoMuscular/FormGrupoMuscular";
import DeletarGrupoMuscular from "./components/GrupoMuscular/deleteGrupoMuscular/DeleteGrupoMuscular";



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer />

        <Routes>
          {/* Login */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          {/* Cadastro */}
          <Route path="/cadastro" element={<CadastroUsuario />} />

          {/* Usuários */}
          <Route path="/listarusuarios" element={<ListarUsuarios />} />
          <Route path="/deletarusuario/:id" element={<DeletarUsuario />} />
        {/* Grupo Muscular */}
        <Route path="/gruposmusculares" element={<ListarGrupoMuscular />} />
        <Route path="/cadastrargrupomuscular" element={<FormGrupoMuscular />} />
        <Route path="/editargrupomuscular/:id" element={<FormGrupoMuscular />} />
        <Route
          path="/deletargrupomuscular/:id"
          element={<DeletarGrupoMuscular />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
