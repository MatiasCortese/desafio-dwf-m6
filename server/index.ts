import * as express from "express";
import * as cors from "cors";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/pepe", (req, res) => {
    res.json({
        message: "hola soy la API pepe"
    })
});

app.use(express.static("../dist"));
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port, () => console.log("conectado al puerto ", port));

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

