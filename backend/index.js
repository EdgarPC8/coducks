import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import { sequelize } from "./src/database/conection.js";
import { loadDataToDb } from "./src/database/loadData.js";

const app = express();
const port = 3000;

const allowedOrigins = [
  "http://localhost:5173",
  "http://aplicaciones.marianosamaniego.edu.ec",
];

const corsOptions = {
  origin: function (origin, callback) {
    // Verifica si el origen está en la lista de orígenes permitidos
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Acceso no permitido por CORS"));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true, // Permite el envío de cookies y encabezados de autenticación
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Bienvenido a la API ");
});

try {
  await sequelize.authenticate();

  // await sequelize.sync({ force: true });
  // loadDataToDb()

  console.log("Conección realizada con éxito.");

  app.listen(port, () => {
    console.log(`🚀 Api escuchando en el puerto -> ${port}`);
  });
} catch (error) {
  console.error("Error en la conexión en la db:", error);
}
