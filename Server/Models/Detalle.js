const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Detalle = new Schema({
    ID_PRODDUCTO: {
        type: Schema.Types.ObjectId,
        ref: "Producto",
        default: undefined,
    },
    Cantidad: { type: Number, default: 0 },
    Precio: { type: Number, default: 0 },
    Sub_total: { type: Number, default: 0 },
    IVA: { type: Number, default: 0 },
    Descuento: { type: Number, default: 0 },
    Total: { type: Number, default: 0 },
    Estado: { type: Boolean, default: "false" },
});

module.exports = mongoose.model("Detalle", Detalle, "Detalle");