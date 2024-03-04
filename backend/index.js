import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";

const app = express();
const port = 3000;

app.use(cors());

app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("Bienvenido a la API ");
});

app.listen(port, () => {
  console.log(`🚀 Api escuchando en el puerto -> ${port}`);
});
