import ListarGrupoMuscular from "../src/components/GrupoMuscular/ListGrupoMuscular/ListGrupoMuscular"
import FormGrupoMuscular from "../src/components/GrupoMuscular/formGrupoMuscular/FormGrupoMuscular"
import DeletarGrupoMuscular from "../src/components/GrupoMuscular/deleteGrupoMuscular/DeleteGrupoMuscular"
import FormExercicio from "./components/exercicio/formexercicio/FormExercicio";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes> 
          <Route path="/exercicios" element={} />
          <Route path="/cadastrarexercicio" element={<FormExercicio />} />
          <Route path="/editarexercicio/:id" element={<FormExercicio />} />
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
