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

        const saved = await ras.save();

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

//Añadir detalle
router.put("/InsertarDetalle/:id_ras", (req, res) => {
    const id = req.params.id_ras;
    const estado = req.body.est;
    const fecha = req.body.fec;
    const hora = req.body.hora;

    Rastreo.findByIdAndUpdate({ _id: id }, {
            $push: {
                Detalle: {
                    Estado: estado,
                    Fecha: fecha,
                    Hora: hora,
                },
            },
        })
        .then((doc) => {
            res.json({ response: "Detalle agregado" });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});

//Modificar detalle
router.put("/ModificarDetalle/:id_ras/:id_det", (req, res) => {
    const id = req.params.id_ras;
    const id_det = mongoose.Types.ObjectId(req.params.id_det);
    const estado = req.body.est;
    const fecha = req.body.fec;
    const hora = req.body.hora;

    Rastreo.updateOne({ _id: id, "Detalle._id": id_det }, {
            $set: {
                "Detalle.$": {
                    Estado: estado,
                    Fecha: fecha,
                    Hora: hora,
                },
            },
        })
        .then((doc) => {
            res.json({ response: "Detalle modificado" });
        })
        .catch((err) => {
            console.log("error al cambiar", err);
        });
});

//Eliminar detalle
router.get("/EliminarDetalle/:id_ras/:id_det", (req, res) => {
    const id = req.params.id_ras;
    const id_det = req.params.id_det;
    Rastreo.updateOne({ _id: id }, { $pull: { Detalle: { _id: id_det } } })
        .then((doc) => {
            res.json({ response: "Detalle eliminado" });
        })
        .catch((err) => {
            console.log("error al eliminar", err.message);
        });
});

module.exports = router;