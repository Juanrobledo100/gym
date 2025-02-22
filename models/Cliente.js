const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  dni: { type: String, required: true, unique: true },
  fechaInicio: { type: Date, required: true },
  fechaVencimiento: { type: Date, required: true },
  estadoPago: { type: String, enum: ["Pagado", "Pendiente"], default: "Pendiente" },
});

module.exports = mongoose.model("Cliente", ClienteSchema);
