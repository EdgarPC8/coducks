import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";

import Login from "./page/Login";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useEffect, useState } from "react";
import { useAuthStore } from "./store/authStore";
import { verifyAccessToken } from "./api/auth";

function App() {
  const updateUser = useAuthStore((state) => state.updateUser);
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const setCheckingAuth = useAuthStore((state) => state.setCheckingAuth);
  // const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const verify = await verifyAccessToken();
          const { username, userId } = verify.data;
          updateUser({ username, userId });
          setIsAuth();
          setCheckingAuth();
        } catch (error) {
          console.log(error);
        }
      }
      setCheckingAuth(false); // Marcar la verificación de autenticación como completa
    };
    checkAuth();
  }, [setIsAuth, updateUser]);

  // if (checkingAuth) {
  //   return <h1>Verificando autenticación...</h1>;
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Pagina de inicio</h1>}></Route>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
