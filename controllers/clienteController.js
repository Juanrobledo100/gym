const Cliente = require("../models/Cliente");

// Agregar un nuevo cliente
exports.agregarCliente = async (req, res) => {
  try {
    const { nombre, dni, fechaInicio, fechaVencimiento, estadoPago } = req.body;
    const nuevoCliente = new Cliente({ nombre, dni, fechaInicio, fechaVencimiento, estadoPago });
    await nuevoCliente.save();
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al agregar cliente", error });
  }
};

// Obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener clientes", error });
  }
};

// Buscar cliente por DNI o nombre
exports.buscarCliente = async (req, res) => {
  try {
    const { query } = req.params;
    const clientes = await Cliente.find({
      $or: [{ dni: query }, { nombre: { $regex: query, $options: "i" } }],
    });
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al buscar cliente", error });
  }
};

// Actualizar estado de pago
exports.actualizarEstadoPago = async (req, res) => {
  try {
    const { id } = req.params;
    const { estadoPago } = req.body;
    const cliente = await Cliente.findByIdAndUpdate(id, { estadoPago }, { new: true });
    res.json(cliente);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al actualizar estado de pago", error });
  }
};

// Eliminar cliente
exports.eliminarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    await Cliente.findByIdAndDelete(id);
    res.json({ mensaje: "Cliente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar cliente", error });
  }
}