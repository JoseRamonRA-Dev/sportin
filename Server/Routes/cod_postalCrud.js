const express = require("express");
const router = express.Router();
const Cod_postal = require("../Models/cod_postal");

router.post("/Insertar", async(req, res) => {
    try {
        const cod = new Cod_postal({
            ID_CP: req.body.cp,
            Colonia: req.body.col,
            Municipio: req.body.mun,
            Estado: req.body.state,
        });
        const saved = cod.save();

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
    const ID_CP = req.body.cp;
    const Colonia = req.body.col;
    const Municipio = req.body.mun;
    const Estado = req.body.state;
    Cod_postal.findByIdAndUpdate({ _id: id }, {
            $set: {
                ID_CP: ID_CP,
                Colonia: Colonia,
                Municipio: Municipio,
                Estado: Estado,
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
    Cod_postal.find({}).then((doc) => {
        res.json({ cod_postal: doc, error: null });
    });
});

router.get("/Mostrar/:id", (req, res) => {
    const id = req.params.id;
    Cod_postal.find({ _id: id }).then((doc) => {
        res.json({ cod_postal: doc, error: null });
    });
});

router.get("/Eliminar/:id", (req, res) => {
    const id = req.params.id;
    Cod_postal.findByIdAndDelete({ _id: id })
        .then((doc) => {
            res.json({ response: "Eliminado" });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});
module.exports = router;