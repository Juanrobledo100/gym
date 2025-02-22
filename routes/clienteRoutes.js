const express = require("express");
const router = express.Router();
const {
  agregarCliente,
  obtenerClientes,
  buscarCliente,
  actualizarEstadoPago,
  eliminarCliente,
} = require("../controllers/clienteController");

router.post("/", agregarCliente);
router.get("/", obtenerClientes);
router.get("/:query", buscarCliente);
router.put("/:id", actualizarEstadoPago);
router.delete("/:id", eliminarCliente);

module.exports = router;
