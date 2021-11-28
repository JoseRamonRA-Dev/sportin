const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Detalle = new Schema({
    Estado: { type: Number, default: 0 },
    Fecha: { type: Date, default: 0 },
    Hora: { type: Date, default: 0 },
});

const Rastreo = new Schema({
    Distribuidor: { type: String, default: "" },
    Observaciones: { type: String, default: "" },
    Id_Pedido: {
        type: Schema.Types.ObjectId,
        ref: "Pedido",
        default: undefined,
    },
    Detalle: [{
        type: Detalle,
        default: () => ({}),
    }, ],
});

module.exports = mongoose.model("Rastreo", Rastreo, "Rastreo");