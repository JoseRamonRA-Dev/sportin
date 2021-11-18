const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tipo = new Schema({
    Nivel: { type: Number, default: 0 },
    Salario: { type: Number, default: 0 },
    FechaIngreso: { type: Date, default: 0 },
});

const Usuario = new Schema({
    Nombre: { type: String, default: "" },
    ApePat: { type: String, default: "" },
    ApeMat: { type: String, default: "" },
    Contrasena: { type: String, default: "" },
    Telefono: { type: String, default: "" },
    Email: { type: String, default: "" },
    ID_MEMBRESIA: {
        type: Schema.Types.ObjectId,
        ref: "Membresia",
        default: undefined,
    },
    Listadir: {
        type: [Schema.Types.ObjectId],
        ref: "Direccion",
        default: undefined,
    },
    Tipo: {
        type: Tipo,
        default: () => ({}),
    },
});

module.exports = mongoose.model("Usuario", Usuario, "Usuario");