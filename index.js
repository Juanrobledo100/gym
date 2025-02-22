const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Conectar a la base de datos
conectarDB();

// Importar rutas
app.use("/api/clientes", require("./routes/clienteRoutes"));

// Middleware de manejo de errores
app.use(require("./middleware/errorMiddleware"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
