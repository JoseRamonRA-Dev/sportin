const router = require("express").Router();
const Pedido = require("../Models/Pedido");
var mongoose = require("mongoose");

/*
router.post("/Insertar", async (req, res) => {
    try {
        const ped = new Pedido({
  
        });
        const saved = await ped.save();

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