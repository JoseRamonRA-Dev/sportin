const router = require("express").Router();
const Producto = require("../Models/Producto");
var mongoose = require("mongoose");

//Añadir producto
router.post("/Insertar", async(req, res) => {
    const Id_prov = req.body.id_prov;
    const nombre = req.body.nom;
    const marca = req.body.marca;
    const precio = req.body.precio;
    const stock = req.body.stock;
    const Id_dep = req.body.id_dep;
    const img = req.body.img;
    const caracteristicas = {
        Color: req.body.color,
        Tamaño: req.body.tam,
        Descripcion: req.body.id_desc,
    };
    try {
        const prod = new Producto({
            ID_PROVEEDOR: Id_prov,
            Nombre: nombre,
            Marca: marca,
            Precio: precio,
            Stock: stock,
            ID_Departamento: Id_dep,
            Imagen: img,
            Caracteristicas: caracteristicas,
        });

        const saved = await prod.save();
        res.json({
            error: null,
            response: "Añadido",
            data: saved,
        });
    } catch (error) {
        res.status(400).json({ error });
    }
});

//Modificar producto
router.put("/Modificar/:id_prod", async(req, res) => {
    const id = req.params.id_prod;
    const Id_prov = req.body.id_prov;
    const nombre = req.body.nom;
    const marca = req.body.marca;
    const precio = req.body.precio;
    const stock = req.body.stock;
    const Id_dep = req.body.id_dep;
    const img = req.body.img;
    const caracteristicas = {
        Color: req.body.color,
        Tamaño: req.body.tam,
        Descripcion: req.body.id_desc,
    };
    Producto.findByIdAndUpdate({ _id: id }, {
            $set: {
                ID_PROVEEDOR: Id_prov,
                Nombre: nombre,
                Marca: marca,
                Precio: precio,
                Stock: stock,
                ID_Departamento: Id_dep,
                Imagen: img,
                Caracteristicas: caracteristicas,
            },
        })
        .then((doc) => {
            res.json({ response: "Producto Modificado" });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});

//Eliminar producto
router.get("/Eliminar/:id_prod", (req, res) => {
    const id = req.params.id_prod;
    Producto.findByIdAndDelete({ _id: id })
        .then((doc) => {
            res.json({ response: "Producto eliminado" });
        })
        .catch((err) => {
            console.log("error al eliminar", err.message);
        });
});

//Ver por id
router.get("/Mostrar/:id_prod", (req, res) => {
    const id = req.params.id_prod;
    Producto.find({ _id: id }).then((doc) => {
        res.json({ Productos: doc, error: null });
    });
});

//Ver todos
router.get("/MostrarTodos", (req, res) => {
    Producto.find({}).then((doc) => {
        res.json({ Productos: doc, error: null });
    });
});

//Ver por proveedor
router.get("/MostrarProv/:id_prov", (req, res) => {
    const id_prov = req.params.id_prov;
    Producto.find({ ID_PROVEEDOR: id_prov }).then((doc) => {
        res.json({ Productos: doc, error: null });
    });
});

//Ver por departamento
router.get("/MostrarDep/:id_dep", (req, res) => {
    const id_dep = req.params.id_dep;
    Producto.find({ ID_Departamento: id_dep }).then((doc) => {
        res.json({ Productos: doc, error: null });
    });
});

//Ver por coinciencia nombre
router.get("/MostrarNombre/:nom", (req, res) => {
    const nom = req.params.nom;
    Producto.find({ Nombre: { $regex: nom, $options: "?" } }).then((doc) => {
        res.json({ Productos: doc, error: null });
    });
});

module.exports = router;