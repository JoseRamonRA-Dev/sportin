const router = require("express").Router();
const Usuario = require("../Models/Usuario");
var mongoose = require("mongoose");

// constraseña
const bcrypt = require("bcrypt");

// validation
const Joi = require("@hapi/joi");
const schemaRegister = Joi.object({
    Nombre: Joi.string().min(2).max(255).required(),
    ApePat: Joi.string().min(2).max(255).required(),
    ApeMat: Joi.string().min(2).max(255).required(),
    Telefono: Joi.string().min(2).max(10).required(),
    Email: Joi.string().max(255).required().email(),
    Contrasena: Joi.string().min(2).max(1024).required(),
});
const schemaLogin = Joi.object({
    Email: Joi.string().min(6).max(255).required().email(),
    Contrasena: Joi.string().min(2).max(1024).required(),
});

//Añadir usuario por registro
router.post("/Registro", async(req, res) => {
    try {
        // validate user
        const { error } = schemaRegister.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const isEmailExist = await Usuario.findOne({ Email: req.body.Email });

        if (isEmailExist) {
            return res.status(400).json({ error: "Email ya registrado" });
        }
        // hash contraseña
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.Contrasena, salt);

        const user = new Usuario({
            Nombre: req.body.Nombre,
            ApePat: req.body.ApePat,
            ApeMat: req.body.ApeMat,
            Contrasena: password,
            Telefono: req.body.Telefono,
            Email: req.body.Email,
        });

        const savedUser = await user.save();
        res.json({
            error: null,
            response: "Añadido",
            data: savedUser,
        });
    } catch (error) {
        res.status(400).json({ error });
    }
});

//Añadir usuario por admi
router.post("/Insertar", async(req, res) => {
    try {
        const isEmailExist = await Usuario.findOne({ Email: req.body.Email });

        if (isEmailExist) {
            return res.status(400).json({ error: "Email ya registrado" });
        }
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.Contrasena, salt);
        const Tip = {
            Nivel: req.body.nivel,
            Salario: req.body.sal,
            FechaIngreso: req.body.fi,
        };

        const user = new Usuario({
            Nombre: req.body.Nombre,
            ApePat: req.body.ApePat,
            ApeMat: req.body.ApeMat,
            Contrasena: password,
            Telefono: req.body.Telefono,
            Email: req.body.Email,
            Tipo: Tip,
        });

        const savedUser = await user.save();

        res.json({
            error: null,
            response: "Añadido",
            data: savedUser,
        });
    } catch (error) {
        res.status(400).json({ error });
    }
});

//Login
router.post("/login", async(req, res) => {
    // validaciones
    // const { error } = schemaLogin.validate(req.body);
    // if (error) return res.status(400).json({ error: error.details[0].message });

    const user = await Usuario.findOne({ Email: req.body.email });
    if (!user) return res.status(400).json({ error: "Usuario no encontrado" });
    //console.log(user);
    // const validPassword = await bcrypt.compare(req.body.contra, user.Contrasena);
    // if (!validPassword)
    //     return res.status(400).json({ error: "contraseña no válida" });

    try {
        // create token
        /*
                                                                    const token = jwt.sign({
                                                                            name: user.Nombre,
                                                                            id: user._id,
                                                                        },
                                                                        "secret"
                                                                    );*/

        res.json({
            error: null,
            data: "exito bienvenido",
            id: user._id,
            Tipo: user.Tipo.Nivel,
        });
    } catch (e) {
        return res.status(400).json({
            error: "Hubo un error en el login, por favor intenta de nuevo",
        });
    }
});

//Ver usuario
router.get("/Ver/:id", async(req, res) => {
    const id = req.params.id;
    const user = await Usuario.findById({ _id: id });

    try {
        // create token
        res.json({
            error: null,
            Id: user._id,
            Nombre: user.Nombre,
            ApePat: user.ApePat,
            ApeMat: user.ApeMat,
            Contrasena: user.Contrasena,
            Telefono: user.Telefono,
            Email: user.Email,
            Tipo: user.Tipo,
        });
    } catch (e) {
        return status(400).json({
            error: "Hubo un error, por favor intenta de nuevo",
        });
    }
});

//Modificar usuario
router.put("/Modificar/:id", (req, res) => {
    const id = req.params.id;
    const Nom = req.body.Nombre;
    const Contra = req.body.Contrasena;
    const Ema = req.body.Email;
    const apep = req.body.ApePat;
    const apem = req.body.ApeMat;
    const tel = req.body.Telefono;
    const Tip = {
        Nivel: req.body.nivel,
        Salario: req.body.sal,
        FechaIngreso: req.body.fi,
    };

    Usuario.findByIdAndUpdate({ _id: id }, {
            $set: {
                Nombre: Nom,
                ApePat: apep,
                ApeMat: apem,
                Contrasena: Contra,
                Telefono: tel,
                Email: Ema,
                Tipo: Tip,
            },
        })
        .then((doc) => {
            res.json({ response: "Usuario Modificado" });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});

//Eliminar usuario
router.get("/Eliminar/:id", (req, res) => {
    const id = req.params.id;
    Usuario.findByIdAndDelete({ _id: id })
        .then((doc) => {
            res.json({ response: "Eliminado" });
        })
        .catch((err) => {
            console.log("error al cambiar", err.message);
        });
});

//Ver todos los usuarios
router.get("/MostrarTodos", (req, res) => {
    Usuario.find({}).then((doc) => {
        res.json({ users: doc, error: null });
    });
});

//Ver un usuario
router.get("/Mostrar/:id", (req, res) => {
    const id = req.params.id;
    Usuario.find({ _id: id }).then((doc) => {
        res.json({ users: doc, error: null });
    });
});

module.exports = router;