const express = require("express");
const router = express.Router();
const Direccion = require("../Models/Direccion");
var mongoose = require("mongoose");

router.post("/Insertar", async(req, res) => {
    const id_us = mongoose.Types.ObjectId(req.body.id_us);
    const calle = req.body.calle;
    const numero_int = req.body.int;
    const numero_ext = req.body.ext;
    const codigo = req.body.cod;

    try {
        const dir = new Direccion({
            Id_usuario: id_us,
            Calle: calle,
            Numero_int: numero_int,
            Numero_ext: numero_ext,
            Codigo_postal: codigo,
        });
        const saved = await dir.save();
        console.log(saved);
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

//Modificar dirección de un usuario
router.put("/Modificar/:id_dir", (req, res) => {
    const id_dir = req.params.id_dir;
    const id_us = req.body.id_us;
    const calle = req.body.calle;
    const numero_int = req.body.int;
    const numero_ext = req.body.ext;
    const codigo = req.body.cod;

    Direccion.updateOne({ _id: id_dir, Id_usuario: id_us }, {
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

//Eliminar dirección de un usuario
router.get("/Eliminar/:id_us/:id_dir", (req, res) => {
    const id = req.params.id_us;
    const id_dir = req.params.id_dir;
    Direccion.findByIdAndDelete({ _id: id_dir, Id_usuario: id })
        .then((doc) => {
            res.json({ response: "Dirección eliminada" });
        })
        .catch((err) => {
            console.log("error al eliminar", err.message);
        });
});

router.get("/MostrarPorUsuario/:id_us/:id_dir", (req, res) => {
    const id = req.params.id_us;
    const id_dir = req.params.id_dir;
    Direccion.find({ _id: id_dir, Id_usuario: id }).then((doc) => {
        res.json({ dirs: doc, error: null });
    });
});
router.get("/MostrarPorDireccion/:id_dir", (req, res) => {
    const id_dir = req.params.id_dir;
    Direccion.find({ _id: id_dir }).then((doc) => {
        res.json({ dirs: doc, error: null });
    });
});
router.get("/MostrarTodasPorUsuario/:id_us", (req, res) => {
    const id = req.params.id_us;

    Direccion.find({ Id_usuario: id }).then((doc) => {
        res.json({ dirs: doc, error: null });
    });
});

module.exports = router;