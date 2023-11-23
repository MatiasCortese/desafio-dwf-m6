"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var port = process.env.PORT || 3000;
var app = express();
app.use(express.json());
app.use(cors());
app.get("/pepe", function (req, res) {
    res.json({
        message: "hola soy la API pepe"
    });
});
app.use(express.static("dist"));
app.get("*", function (req, res) {
    res.sendFile("../" + __dirname + "/dist/index.html");
});
app.listen(port, function () { return console.log("conectado al puerto ", port); });
// 1. version inicial
// estructura (carpetas/archivos)
// front basico (una pantalla que llame al back)
// back basico (un endpoint)
// deploy a Render, si esto funciona, avanzamos
// 2. version avanzada
// funciona. El juego esta armado, pero desprolijo, trae info demas, pero se puede jugar y va para adelante
// 3. etapa de correccion y ajustes
// sacar codigo demas
// mejorar la lectura del codigo, nombre de vars, funciones, archivos, etc
// chequeo paso a paso
