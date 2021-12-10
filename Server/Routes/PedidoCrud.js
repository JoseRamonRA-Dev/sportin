const router = require("express").Router();
const Pedido = require("../Models/Pedido");
const Detalle = require("../Models/Detalle");
const Producto = require("../Models/Producto");
var mongoose = require("mongoose");

//Crear carrito
router.post("/Insertar", async(req, res) => {
    const id_us = req.body.id_us;

    try {
        const ped = new Pedido({
            ID_Usuario: id_us,
            Total: 0,
        });

        const saved = await ped.save();
        res.json({
            error: null,
            response: "Añadido",
            data: saved,
        });
    } catch (error) {
        res.status(400).json({ error });
    }
});

//Cambiar a compra (pedido confirmado)
router.put("/Compra/:id_ped", async(req, res) => {
    const id = req.params.id_ped;
    const id_us = req.body.id_us;
    const fp = req.body.fp;
    const de = req.body.de;
    const est = {
        Confirmado: 1,
        Pagado: 0,
        Enviado: 0,
        Devolucion: 0,
    };
    const detallepago = {
        Tipo: req.body.tip,
        NoTarjeta: req.body.tar,
        Banco: req.body.banco,
    };

    const ped = new Pedido({
        ID_Usuario: id_us,
        Total: 0,
    });

    const saved = await ped.save();

    Pedido.findByIdAndUpdate({ _id: id, ID_Usuario: id_us }, {
            $set: {
                FechaPedido: fp,
                Estado: est,
                DetallePago: detallepago,

                Detalle_Envio: de,
            },
        })
        .then((doc) => {
            Detalle.find({ ID_Pedido: id })
                .then((doc) => {
                    doc.forEach((data) => {
                        Producto.findByIdAndUpdate({ _id: data.ID_Producto }, {
                            $inc: {
                                Stock: -data.Cantidad,
                            },
                        }).then((doc) => {
                            console.log("Producto modificado");
                        });
                    });
                })
                .then((doc) => {
                    res.json({ response: "Modificado" });
                });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});

//Cambiar a pagado (pedido pagado)
router.put("/Pagado/:id_ped", async(req, res) => {
    const id = req.params.id_ped;
    const id_us = req.body.id_us;
    const fe = req.body.fe;
    const est = {
        Confirmado: 0,
        Pagado: 1,
        Enviado: 0,
        Devolucion: 0,
    };

    Pedido.findByIdAndUpdate({ _id: id, ID_Usuario: id_us }, {
            $set: {
                FechaEntrega: fe,
                Estado: est,
            },
        })
        .then((doc) => {
            res.json({ response: "Modificado" });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});

//Cambiar a enviado (pedido enviado)
router.put("/Enviado/:id_ped", async(req, res) => {
    const id = req.params.id_ped;
    const id_us = req.body.id_us;
    const fe = req.body.fe;

    const est = {
        Confirmado: 0,
        Pagado: 0,
        Enviado: 1,
        Devolucion: 0,
    };

    Pedido.findByIdAndUpdate({ _id: id, ID_Usuario: id_us }, {
            $set: {
                FechaEntrega: fe,
                Estado: est,
            },
        })
        .then((doc) => {
            res.json({ response: "Modificado" });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});

//Cambiar a devuelto(pedido devuelto)
router.put("/Devolucion/:id_ped", async(req, res) => {
    const id = req.params.id_ped;
    const id_us = req.body.id_us;

    const est = {
        Confirmado: 0,
        Pagado: 0,
        Enviado: 0,
        Devolucion: 1,
    };

    Pedido.findByIdAndUpdate({ _id: id, ID_Usuario: id_us }, {
            $set: {
                Estado: est,
            },
        })
        .then((doc) => {
            res.json({ response: "Modificado" });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});

//Cambiar pedido
router.put("/Modificar/:id_ped", async(req, res) => {
    const id = req.params.id_ped;
    const id_us = req.body.id_us;
    const fp = req.body.fp;
    const fe = req.body.fe;
    const de = req.body.de;
    const est = {
        Confirmado: req.body.confi,
        Pagado: req.body.pag,
        Enviado: req.body.env,
        Devolucion: req.body.dev,
    };
    const detallepago = {
        Tipo: req.body.tip,
        NoTarjeta: req.body.tar,
        Banco: req.body.banco,
    };
    const total = req.body.tot;

    Pedido.findByIdAndUpdate({ _id: id, ID_Usuario: id_us }, {
            $set: {
                FechaPedido: fp,
                FechaEntrega: fe,
                Estado: est,
                DetallePago: detallepago,
                Total: total,
                Detalle_Envio: de,
            },
        })
        .then((doc) => {
            res.json({ response: "Modificado" });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});

//Ver pedido
router.get("/Mostrar/:id_ped", async(req, res) => {
    const idped = req.params.id_ped;
    Pedido.findById({ _id: idped }).then((doc) => {
        res.json({ ped: doc, error: null });
    });
});

//Ver pedidos
router.get("/MostrarTodos", async(req, res) => {
    const idped = req.params.id_ped;

    Pedido.find({}).then((doc) => {
        res.json({ ped: doc, error: null });
    });
});

//eliminar pedido
router.get("/Eliminar/:id_ped", (req, res) => {
    const idped = req.params.id_ped;
    Pedido.findByIdAndDelete({ _id: idped })
        .then((doc) => {
            res.json({ response: "Eliminado" });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});

//Obtener carrito
router.get("/Carrito/:id_us", async(req, res) => {
    const id_us = req.params.id_us;
    Pedido.find({
        $and: [
            { "Estado.Confirmado": 0 },
            { "Estado.Pagado": 0 },
            { "Estado.Enviado": 0 },
            { "Estado.Devuelto": 0 },
            { ID_Usuario: id_us },
        ],
    }).then((doc) => {
        res.json({ ped: doc, error: null });
    });
});

//Obtener carritos
router.get("/Carritos", async(req, res) => {
    Pedido.find({
        $and: [
            { "Estado.Confirmado": 0 },
            { "Estado.Pagado": 0 },
            { "Estado.Enviado": 0 },
            { "Estado.Devuelto": 0 },
        ],
    }).then((doc) => {
        res.json({ ped: doc, error: null });
    });
});

//Obtener por usuario
router.get("/Usuario/:id_us", async(req, res) => {
    const id_us = req.params.id_us;
    Pedido.find({ ID_Usuario: id_us }).then((doc) => {
        res.json({ ped: doc, error: null });
    });
});

router.get("/MostrarU/:id_ped", async(req, res) => {
    const idped = req.params.id_ped;
    Pedido.findById({ ID_Usuario: idped }).then((doc) => {
        res.json({ ped: doc, error: null });
    });
});

//Obtener todos
router.get("/Todos", async(req, res) => {
    Pedido.find({}).then((doc) => {
        res.json({ ped: doc, error: null });
    });
});

//Obtener confirmados por usuario
router.get("/Confirmados/:id_us", async(req, res) => {
    const id_us = req.params.id_us;
    Pedido.find({ "Estado.Confirmado": 1, ID_Usuario: id_us }).then((doc) => {
        res.json({ ped: doc, error: null });
    });
});

//cambiar estado confirmado
router.get("/PedidosConfirmados", async(req, res) => {
    Pedido.find({ "Estado.Confirmado": 1 }).then((doc) => {
        res.json({ ped: doc, error: null });
    });
});
//Obtener pagados por usuario
router.get("/Pagados/:id_us", async(req, res) => {
    const id_us = req.params.id_us;
    Pedido.find({ "Estado.Pagado": 1, ID_Usuario: id_us }).then((doc) => {
        res.json({ ped: doc, error: null });
    });
});
//Obtener enviados por usuario
router.get("/Enviados/:id_us", async(req, res) => {
    const id_us = req.params.id_us;
    Pedido.find({ "Estado.Enviado": 1, ID_Usuario: id_us }).then((doc) => {
        res.json({ ped: doc, error: null });
    });
});

//Obtener devueltos por usuario
router.get("/Devueltos/:id_us", async(req, res) => {
    const id_us = req.params.id_us;
    Pedido.find({ "Estado.Devolucion": 1, ID_Usuario: id_us }).then((doc) => {
        res.json({ ped: doc, error: null });
    });
});

module.exports = router;