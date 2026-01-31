import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListarGrupoMuscular from "../src/components/GrupoMuscular/ListGrupoMuscular/ListGrupoMuscular"
import FormGrupoMuscular from "../src/components/GrupoMuscular/formGrupoMuscular/FormGrupoMuscular"
import DeletarGrupoMuscular from "../src/components/GrupoMuscular/deleteGrupoMuscular/DeleteGrupoMuscular"
import FormExercicio from "./components/exercicio/formexercicio/FormExercicio";
function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/exercicios" element={} />
        <Route path="/cadastrarexercicio" element={<FormExercicio />} />
        <Route path="/editarexercicio/:id" element={<FormExercicio />} />
        <Route path="/gruposmusculares" element={<ListarGrupoMuscular />} />
        <Route path="/cadastrargrupomuscular" element={<FormGrupoMuscular />} />
        <Route path="/editargrupomuscular/:id" element={<FormGrupoMuscular />} />
        <Route path="/deletargrupomuscular/:id" element={<DeletarGrupoMuscular />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
