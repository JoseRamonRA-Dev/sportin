const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Direccion = new Schema({
    Id_usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        default: undefined,
    },

    Calle: { type: String, default: "" },
    Numero_int: { type: Number, default: 0 },
    Numero_ext: { type: Number, default: 0 },
    Codigo_postal: {
        type: Schema.Types.ObjectId,
        ref: "CodigoPostal",
        default: undefined,
    },
});

module.exports = mongoose.model("Direccion", Direccion, "Direccion");