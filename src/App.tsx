import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListarGrupoMuscular from "./components/grupomuscular/listgrupomuscular/ListaGrupoMuscular"
import FormGrupoMuscular from "./components/grupomuscular/formgrupomuscular/FormGrupoMuscular"
import DeletarGrupoMuscular from "./components/grupomuscular/deletegrupomuscular/DeleteGrupoMuscular";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/grupoMuscular" element={<ListarGrupoMuscular />} />
        <Route path="/cadastrargrupomuscular" element={<FormGrupoMuscular />} />
        <Route path="/editargrupomuscular/:id" element={<FormGrupoMuscular />} />
        <Route path="/deletargrupomuscular/:id" element={<DeletarGrupoMuscular />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
