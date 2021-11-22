const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Proveedor = new Schema({
    Nombre: { type: String, default: "" },
    ApePat: { type: String, default: "" },
    ApeMat: { type: String, default: "" },
    Telefono: { type: String, default: "" },
    Email: { type: String, default: "" },
});

module.exports = m;
ongoose.model("Proveedor", Proveedor, "Proveedor");