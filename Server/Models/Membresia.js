const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Membresia = new Schema({
    Duracion: { type: Number, default: 0 },
    Tipo: { type: String, default: "" },
    FechaInicio: { type: Date, default: 0 },
    FechaVencimiento: { type: Date, default: 0 },
});

module.exports = mongoose.model("Membresia", Membresia, "Membresia");