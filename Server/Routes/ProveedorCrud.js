const router = require("express").Router();
const Proveedor = require("../Models/Proveedor");
var mongoose = require("mongoose");

//Añadir Proveedor
router.post("/Insertar", async(req, res) => {
    try {
        const prov = new editorial({
            Nombre: req.body.Nombre,
            ApePat: req.body.ApePat,
            ApeMat: req.body.ApeMat,
            Telefono: req.body.Telefono,
            Email: req.body.Email,
        });

        const saved = prov.save();
        res.json({
            error: null,
            response: "Añadido",
            data: savedEdit,
        });
    } catch (error) {
        res.status(400).json({ error });
    }
});

//Ver proveedor
router.get("/Ver/:id", (req, res) => {
    const id = req.params.id;
    Proveedor.findById({ _id: id }).then((doc) => {
        res.json({ edit: doc, error: null });
    });
});

//Ver todas las proveedores
router.get("/VerTodos", (req, res) => {
    Proveedor.find({}).then((doc) => {
        res.json({ edit: doc, error: null });
    });
});

//Modificar proveedor
router.put("/Modificar/:id", (req, res) => {
    const id = req.params.id;

    Proveedor.findByIdAndUpdate({ _id: id }, {
            $set: {
                Nombre: req.body.Nombre,
                ApePat: req.body.ApePat,
                ApeMat: req.body.ApeMat,
                Contrasena: password,
                Telefono: req.body.Telefono,
                Email: req.body.Email,
            },
        })
        .then((doc) => {
            res.json({ response: "Editorial Modificado" });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});

//Eliminar proveedor
router.get("/Eliminar/:id", (req, res) => {
    const id = req.params.id;
    Proveedor.findByIdAndDelete({ _id: id })
        .then((doc) => {
            res.json({ response: "Proveedor eliminada" });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});

module.exports = router;