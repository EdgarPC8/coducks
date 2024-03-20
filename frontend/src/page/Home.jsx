import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";

function Home() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);

  return <>Bienvenido {user?.username}</>;
}

export default Home;
