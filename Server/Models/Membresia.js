const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Membresia = new Schema({
    Id_usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        default: undefined,
    },
    Duracion: { type: Number, default: 0 },
    Tipo: { type: String, default: "" },
    FechaInicio: { type: Date, default: 0 },
    FechaVencimiento: { type: Date, default: 0 },
});

module.exports = mongoose.model("Membresia", Membresia, "Membresia");