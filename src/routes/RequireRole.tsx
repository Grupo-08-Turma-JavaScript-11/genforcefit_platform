import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

type Tipo = "Professor" | "Aluno";

export function RequireRole({ allowed }: { allowed: Tipo[] }) {
  const { usuario } = useContext(AuthContext);

  
  if (!usuario.token) {
    return <Navigate to="/login" replace />;
  }

  const role = usuario.tipo as Tipo;
  if (!allowed.includes(role)) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}
