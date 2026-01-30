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
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Cadastro */}
        <Route path="/cadastro" element={<CadastroUsuario />} />

        {/* Usuários */}
        <Route path="/listarusuarios" element={<ListarUsuarios />} />
        <Route path="/deletarusuario/:id" element={<DeletarUsuario />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
