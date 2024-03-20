import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

function ProtectedRoute({ redirectTo = "/" }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const checkingAuth = useAuthStore((state) => state.checkingAuth); // Supongo que tienes un estado checkingAuth para indicar si se está verificando la autenticación

  if (!checkingAuth && !isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }

  return <Outlet />;
}

export { ProtectedRoute };
