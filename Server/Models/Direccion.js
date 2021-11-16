const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Direccion = new Schema({
    Pais: { type: String, default: "" },
    Estado: { type: String, default: "" },
    Ciudad: { type: String, default: "" },
    Colonia: { type: String, default: "" },
    Calle: { type: String, default: "" },
    Numero_int: { type: Number, default: 0 },
    Codigo_postal: { type: Number, default: 0 },
});

module.exports = mongoose.model("Direccion", Direccion, "Direccion");