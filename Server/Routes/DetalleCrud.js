const express = require("express");
const router = express.Router();
const Detalle = require("../Models/Detalle");
const Pedido = require("../Models/Pedido");
var mongoose = require("mongoose");

router.post("/Insertar", async(req, res) => {
    const id_prod = mongoose.Types.ObjectId(req.body.id_prod);
    const id_ped = mongoose.Types.ObjectId(req.body.id_ped);
    const cantidad = req.body.cantidad;
    const precio = req.body.precio;
    const sub_total = precio * cantidad;
    const iva = sub_total * 0.16;
    const descuento = req.body.descuento;
    const total = (sub_total + iva - descuento * (sub_total + iva)).toFixed(2);
    const estado = req.body.estado;

    const isExist = await Detalle.findOne({
        ID_Producto: id_prod,
        ID_Pedido: id_ped,
    });

    if (isExist) {
        return res.json({ error: "El producto esta en la lista" });
    }

    try {
        const det = new Detalle({
            ID_Producto: id_prod,
            ID_Pedido: id_ped,
            Cantidad: cantidad,
            Precio: precio,
            Sub_total: sub_total,
            IVA: iva,
            Descuento: descuento,
            Total: total,
            Estado: estado,
        });
        const saved = await det.save();
        insertarTotal(id_ped);
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
    const id_prod = req.body.id_prod;
    const cantidad = req.body.cantidad;
    const precio = req.body.precio;
    const sub_total = precio * cantidad;
    const iva = sub_total * 0.16;
    const descuento = req.body.descuento;
    const total = (sub_total + iva - descuento * (sub_total + iva)).toFixed(2);
    const estado = req.body.estado;

    Detalle.findByIdAndUpdate({ _id: id, ID_Producto: id_prod }, {
            $set: {
                Cantidad: cantidad,
                Precio: precio,
                Sub_total: sub_total,
                IVA: iva,
                Descuento: descuento,
                Total: total,
                Estado: estado,
            },
        })
        .then((doc) => {
            sumarTotal(doc.ID_Pedido, req.io);
            res.json({ response: "Modificado", data: doc });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});

router.get("/MostrarTodos", (req, res) => {
    Detalle.find({}).then((doc) => {
        res.json({ detalles: doc, error: null });
    });
});

//Ver por pedido
router.get("/MostrarPedido/:id_ped", (req, res) => {
    const id_ped = req.params.id_ped;
    Detalle.find({ ID_Pedido: id_ped }).then((doc) => {
        res.json({ detalles: doc, error: null });
    });
});

router.get("/Eliminar/:id", (req, res) => {
    const id = req.params.id;
    Detalle.findByIdAndDelete({ _id: id })
        .then((doc) => {
            sumarTotal(doc.ID_Pedido, req.io);
            res.json({ response: "Eliminado" });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});

function insertarTotal(id_ped) {
    var sum = 0;
    Detalle.find({ ID_Pedido: id_ped }).then((doc) => {
        doc.forEach((val) => {
            sum += val.Total;
        });
        sum = sum.toFixed(2);
        Pedido.findByIdAndUpdate({ _id: id_ped }, {
                $set: {
                    Total: sum,
                },
            })
            .then((doc) => {})
            .catch((err) => {
                console.log("error al cambiar", err.message);
            });
    });
}

function sumarTotal(id_ped, socket) {
    var sum = 0;
    Detalle.find({ ID_Pedido: id_ped }).then((doc) => {
        doc.forEach((val) => {
            sum += val.Total;
        });
        sum = sum.toFixed(2);

        Pedido.findByIdAndUpdate({ _id: id_ped }, {
                $set: {
                    Total: sum,
                },
            })
            .then((doc) => {
                socket.to(`ped:${id_ped}`).emit(`pedUpdate:${id_ped}`, {
                    total: sum,
                });
            })
            .catch((err) => {
                console.log("error al cambiar", err.message);
            });
    });
}
module.exports = router;