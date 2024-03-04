import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Pagina de inicio</h1>}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
