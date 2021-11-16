const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Departamento = new Schema({
    Nombre: { type: String, default: "" },
    Descripcion: { type: String, default: "" },
});

module.exports = mongoose.model("Departamento", Departamento, "Departamento");