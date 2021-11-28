const router = require("express").Router();
const Wish = require("../Models/Wishlist");
var mongoose = require("mongoose");

//
router.post("/Insertar", (req, res) => {
    const id_us = mongoose.Types.ObjectId(req.body.id_us);
    const id_prod = mongoose.Types.ObjectId(req.body.id_prod);
    const pi = req.body.pi;
    const def = req.body.def;

    try {
        const wish = new Wish({
            ID_Usuario: id_us,
            ID_PRODDUCTO: id_prod,
            PrecioInicial: pi,
            Diferencia: def,
        });
        const saved = wish.save();

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

//Modificar wish por usario y producto
router.put("/Modificar/:id_wish/:id_us/:id_prod", (req, res) => {
    const id = req.params.id_wish;
    const id_us = req.params.id_us;
    const id_prod = req.params.id_prod;
    const pi = req.body.pi;
    const def = req.body.def;

    Wish.updateOne({ _id: id, Id_Usuario: id_us, ID_PRODDUCTO: id_prod }, {
            $set: {
                PrecioInicial: pi,
                Diferencia: def,
            },
        })
        .then((doc) => {
            res.json({ response: "Wish modificado" });
        })
        .catch((err) => {
            console.log("error al cambiar", err);
        });
});

//Eliminar wish
router.get("/Eliminar/:id_wish", (req, res) => {
    const id = req.params.id_wish;
    Wish.findByIdAndDelete({ _id: id })
        .then((doc) => {
            res.json({ response: "Wish eliminado" });
        })
        .catch((err) => {
            console.log("error al eliminar", err.message);
        });
});

//Wishes por usuario
router.get("/MostrarWishes/:id_us", (req, res) => {
    const id = req.params.id_us;

    Wish.find({ Id_Usuario: id }).then((doc) => {
        res.json({ wish: doc, error: null });
    });
});

module.exports = router;