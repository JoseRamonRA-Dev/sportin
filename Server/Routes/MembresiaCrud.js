const express = require("express");
const router = express.Router();
const Membresia = require("../Models/Membresia");

router.post("/Insertar", async(req, res) => {
    const id_us = req.body.id_us;
    const duracion = req.body.dur;
    const tipo = req.body.tipo;
    const fechaInicio = req.body.fechaIn;
    const fechaVencimiento = req.body.fechaFin;

    try {
        const mem = new Membresia({
            Id_usuario: id_us,
            Duracion: duracion,
            Tipo: tipo,
            FechaInicio: fechaInicio,
            FechaVencimiento: fechaVencimiento,
        });
        const saved = mem.save();

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

router.put("/Modificar/:id", (req, res) => {
    const id = req.params.id;
    const id_us = req.body.id_us;
    const duracion = req.body.dur;
    const tipo = req.body.tipo;
    const fechaInicio = req.body.fechaIn;
    const fechaVencimiento = req.body.fechaFin;

    Membresia.findByIdAndUpdate({ _id: id, Id_usuario: id_us }, {
            $set: {
                Duracion: duracion,
                Tipo: tipo,
                FechaInicio: fechaInicio,
                FechaVencimiento: fechaVencimiento,
            },
        })
        .then((doc) => {
            res.json({ response: "Modificado" });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});

router.get("/MostrarTodos", (req, res) => {
    Membresia.find({}).then((doc) => {
        res.json({ cod_postal: doc, error: null });
    });
});

router.get("/MembresiaUsuario/:id_us/:id_mem", (req, res) => {
    const id = req.params.id_mem;
    const id_us = req.body.id_us;
    Membresia.find({ _id: id, Id_usuario: id_us }).then((doc) => {
        res.json({ cod_postal: doc, error: null });
    });
});

router.get("/Eliminar/:id", (req, res) => {
    const id = req.params.id;
    Membresia.findByIdAndDelete({ _id: id })
        .then((doc) => {
            res.json({ response: "Eliminado" });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});
module.exports = router;