const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cod_postal = new Schema({
    ID_CP: { type: String, default: 0 },
    Colonia: { type: String, default: "" },
    Municipio: { type: String, default: "" },
    Estado: { type: String, default: "" },
});

module.exports = mongoose.model("CodigoPostal", Cod_postal, "CodigoPostal");