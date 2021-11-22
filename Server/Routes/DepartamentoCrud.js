const express = require("express");
const router = express.Router();
const Departamento = require("../Models/Departamento");

router.post("/Insertar", async(req, res) => {
    try {
        const dep = new Departamento({
            Nombre: req.body.nom,
            Descripcion: req.body.des,
        });
        const saved = dep.save();

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
    const Nombre = req.body.nom;
    const Descripcion = req.body.des;

    Departamento.findByIdAndUpdate({ _id: id }, {
            $set: {
                Nombre: Nombre,
                Descripcion: Descripcion,
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
    Departamento.find({}).then((doc) => {
        res.json({ users: doc, error: null });
    });
});

router.get("/Buscar/:id", (req, res) => {
    const id = req.params.id;
    Departamento.find({ _id: id }).then((doc) => {
        res.json({ departamento: doc, error: null });
    });
});

router.get("/Eliminar/:id", (req, res) => {
    const id = req.params.id;
    Departamento.findByIdAndDelete({ _id: id })
        .then((doc) => {
            res.json({ response: "Eliminado" });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});
module.exports = router;