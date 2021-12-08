const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Caracteristicas = new Schema({
    Color: { type: String, default: 0 },
    Tamaño: { type: String, default: 0 },
    Descripcion: { type: String, default: 0 },
});

const Producto = new Schema({
    ID_PROVEEDOR: {
        type: Schema.Types.ObjectId,
        ref: "Proveedor",
        default: undefined,
    },
    Nombre: { type: String, default: "" },
    Imagen: { type: String, default: "" },
    Marca: { type: String, default: "" },
    Precio: { type: Number, default: 0 },
    Stock: { type: Number, default: 0 },
    ID_Departamento: {
        type: Schema.Types.ObjectId,
        ref: "Departamento",
        default: undefined,
    },
    Caracteristicas: {
        type: Caracteristicas,
        default: () => ({}),
    },
    Imagen: { type: String, default: "" },
});

module.exports = mongoose.model("Producto", Producto, "Producto");