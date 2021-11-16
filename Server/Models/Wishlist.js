const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Wishlist = new Schema({
    ID_Usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        default: undefined,
    },
    ID_PRODDUCTO: {
        type: Schema.Types.ObjectId,
        ref: "Producto",
        default: undefined,
    },
    PrecioInicial: { type: Number, default: 0 },
    Diferencia: { type: Number, default: 0 },
});
module.exports = mongoose.model("Wishlist", Wishlist, "Wishlist");