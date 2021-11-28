const router = require("express").Router();
const Pedido = require("../Models/Pedido");
var mongoose = require("mongoose");

/*
router.post("/Insertar", (req, res) => {
<<<<<<< HEAD
  
    // const detallepago = {
    //     Tipo:
    // }
=======
>>>>>>> 81c77be594d5c33d1eced033cbbe541521efa68c
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
});*/