const router = require("express").Router();
const Pedido = require("../Models/Pedido");
var mongoose = require("mongoose");

//
router.post("/Insertar", (req, res) => {
  
    // const detallepago = {
    //     Tipo:
    // }
    try {
        const ped = new Pedido({
            ID_Usuario: id_us,
            ID_PRODDUCTO: id_prod,
            PrecioInicial: pi,
            Diferencia: def,
        });
        const saved = ped.save();

        res.json({
            error: null,
            response: "Añadido",
            data: saved,
        });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error });
    }
});
