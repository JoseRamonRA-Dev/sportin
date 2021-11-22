const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DetallePago = new Schema({
    Tipo: { type: String, default: 0 },
    NoTarjeta: { type: String, default: 0 },
    Banco: { type: String, default: 0 },
});

const Estado = new Schema({
    Confirmado: { type: Boolean, default: 0 },
    Pagado: { type: Boolean, default: 0 },
    Enviado: { type: Boolean, default: 0 },
    Devolucion: { type: Boolean, default: 0 },
});

const Pedido = new Schema({
    ID_Usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        default: undefined,
    },
    FechaPedido: { type: Date, default: 0 },
    FechaEntrega: { type: Date, default: 0 },
    No_Rastreo: {
        type: Schema.Types.ObjectId,
        ref: "Rastreo",
        default: undefined,
    },
    Estado: {
        type: Estado,
        default: () => ({}),
    },
    DetallePago: {
        type: DetallePago,
        default: () => ({}),
    },
    Total: { type: Number, default: 0 },
    Detalle_Envio: { type: String, default: "" },
});

module.exports = mongoose.model("Pedido", Pedido, "Pedido");