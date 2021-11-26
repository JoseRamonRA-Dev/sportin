const express = require("express");
const router = express.Router();
const Direccion = require("../Models/Direccion");
var mongoose = require("mongoose");

router.put("/Insertar", (req, res) => {
    const id_us = req.body.id_us;
    const calle = req.body.calle;
    const numero_int = req.body.int;
    const numero_ext = req.body.ext;
    const codigo = mongoose.Types.ObjectId(req.body.cod);

    try {
        const dir = new Direccion({
            Id_Usuario: id_us,
            Calle: calle,
            Numero_int: numero_int,
            Numero_ext: numero_ext,
            Codigo_postal: codigo,
        });
        const saved = dir.save();

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

//Modificar dirección
router.put("/ModificarDireccion/:id_dir", (req, res) => {
    const id_us = req.body.id_us;
    const calle = req.body.calle;
    const numero_int = req.body.int;
    const numero_ext = req.body.ext;
    const codigo = mongoose.Types.ObjectId(req.body.cod);

    Direccion.updateOne({ _id: id_dir, Id_Usuario: id_us }, {
            $set: {
                Calle: calle,
                Numero_int: numero_int,
                Numero_ext: numero_ext,
                Codigo_postal: codigo,
            },
        })
        .then((doc) => {
            res.json({ response: "Direccion modificada" });
        })
        .catch((err) => {
            console.log("error al cambiar", err);
        });
});

//Eliminar dirección
router.get("/EliminarDireccion/:id_us/:id_dir", (req, res) => {
    const id = req.params.id_us;
    const id_dir = req.params.id_dir;
    Direccion.updateOne({ _id: id_dir, Id_Usuario: id })
        .then((doc) => {
            res.json({ response: "Dirección eliminada" });
        })
        .catch((err) => {
            console.log("error al eliminar", err.message);
        });
});

router.get("/MostarDireccion/:id_us/:id_dir", (req, res) => {
    const id = req.params.id_us;
    const id_dir = req.params.id_dir;
    Direccion.find({ _id: id_dir, Id_Usuario: id }).then((doc) => {
        res.json({ users: doc, error: null });
    });
});

router.get("/MostarDirecciones/:id_us", (req, res) => {
    const id = req.params.id_us;

    Direccion.find({ Id_Usuario: id }).then((doc) => {
        res.json({ users: doc, error: null });
    });
});

module.exports = router;