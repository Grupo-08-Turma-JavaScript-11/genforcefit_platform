import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function RequireAuth() {
  const { usuario } = useContext(AuthContext);

  if (!usuario.token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
