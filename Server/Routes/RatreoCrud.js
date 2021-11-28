const router = require("express").Router();
const Rastreo = require("../Models/Ratreo");
var mongoose = require("mongoose");

//Añadir Rastreo
router.post("/Insertar", async(req, res) => {
    const Id_ped = req.body.id_ped;
    const observaciones = req.body.obsv;
    const dist = req.body.dist;

    try {
        const ras = new Rastreo({
            Distribuidor: dist,
            Observaciones: observaciones,
            Id_Pedido: Id_ped,
        });

        const saved = ras.save();
        res.json({
            error: null,
            response: "Añadido",
            data: saved,
        });
    } catch (error) {
        res.status(400).json({ error });
    }
});

//Modificar rastreo
router.put("/Modificar/:id_ras", async(req, res) => {
    const id = req.params.id_ras;
    const Id_ped = req.body.id_ped;
    const observaciones = req.body.obsv;
    const dist = req.body.dist;

    Rastreo.findByIdAndUpdate({ _id: id }, {
            $set: {
                Distribuidor: dist,
                Observaciones: observaciones,
                Id_Pedido: Id_ped,
            },
        })
        .then((doc) => {
            res.json({ response: "Rastreo Modificado" });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});

//Eliminar rastreo
router.get("/Eliminar/:id_ras", (req, res) => {
    const id = req.params.id_ras;
    Rastreo.findByIdAndDelete({ _id: id })
        .then((doc) => {
            res.json({ response: "Rastreo eliminado" });
        })
        .catch((err) => {
            console.log("error al eliminar", err.message);
        });
});

//Ver por id
router.get("/Mostrar/:id_ras", (req, res) => {
    const id = req.params.id_ras;
    Rastreo.find({ _id: id }).then((doc) => {
        res.json({ Rastreos: doc, error: null });
    });
});

//Ver todos
router.get("/MostrarTodos", (req, res) => {
    Rastreo.find({}).then((doc) => {
        res.json({ Rastreos: doc, error: null });
    });
});

module.exports = router;