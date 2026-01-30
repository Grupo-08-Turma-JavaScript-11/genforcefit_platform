import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Login from "./pages/login/Login"
import CadastroUsuario from "./pages/cadastro/CadastroUsuario"
import ListarUsuarios from "./components/usuario/listarusuarios/ListarUsuarios"
import DeletarUsuario from "./components/usuario/deletarusuario/DeletarUsuario"

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Cadastro de usuário */}
        <Route path="/cadastro" element={<CadastroUsuario />} />

        {/* Listagem (listarcaronas) */}
        <Route path="/listarcaronas" element={<ListarUsuarios />} />

        {/* Deletar usuário */}
        <Route path="/deletarusuario/:id" element={<DeletarUsuario />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
