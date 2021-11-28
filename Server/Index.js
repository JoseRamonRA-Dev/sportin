const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// capturar body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public/"));

//conexion

mongoose
    .connect("mongodb://localhost:27017/sportin", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Base de datos conectada"))
    .catch((e) => console.log("error db:", e));

const conexion = mongoose.connection;
conexion.once("open", () => {
    console.log("conexion exitosa");
});

const UserRoutes = require("./Routes/UsuarioCrud");
const CPRoutes = require("./Routes/cod_postalCrud");
const DepaRoutes = require("./Routes/DepartamentoCrud");
const DetailRoutes = require("./Routes/DetalleCrud");
const DirRoutes = require("./Routes/DireccionCrud");
const MemberRoutes = require("./Routes/MembresiaCrud");
const ProvRoutes = require("./Routes/ProveedorCrud");

const PedRoutes = require("./Routes/PedidoCrud");
const ProdRoutes = require("./Routes/ProductoCrud");
const TrackRoutes = require("./Routes/RatreoCrud");
const WishRoutes = require("./Routes/WishlistCrud");

app.use("/CP", CPRoutes);
app.use("/Departamento", DepaRoutes);
app.use("/Usuario", UserRoutes);
app.use("/Detalle", DetailRoutes);
app.use("/Membresia", MemberRoutes);
app.use("/Proveedor", ProvRoutes);
app.use("/Direccion", DirRoutes);
app.use("/Wish", WishRoutes);
app.use("/Producto", ProdRoutes);
app.use("/Rastreo", TrackRoutes);

/*
app.use("/Pedido", PedRoutes);



*/
//app.use("/logo", express.static("template"));

app.listen(port, function() {
    console.log(`Servidor web escuchando en el puerto ${port}`);
});